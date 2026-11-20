# 驱动

Linux下的驱动主要分为以下两类：

- 自由驱动：公开源代码，由开源社区维护，性能发挥较弱，问题修复快。
- 专有驱动：不公开源代码，由制造商维护，性能发挥好，问题修复一般较慢。

一般情况下，二者二选一即可。

部分发行版具备驱动管理器，您可以在其中选择安装驱动。

## 显卡驱动

### Intel

Intel显卡（包括传统的核显、锐炫Arc独显以及最新的酷睿Ultra核显）在Linux下遵循“开源优先、即插即用”的策略。Intel 直接把驱动写进了 Linux 内核和 Mesa 图形库，日常使用或打游戏都不需要去官网手动下载安装包。而且 Intel 一直在持续更新和优化驱动，具体对比如下：

| 内核驱动模块 | 对应显卡型号&架构示例 | 其他说明 |
|---|---|---|
| i915 | 传统核显（第11代（TigerLake）之前的旧核显）、第一代锐炫（Arc A系列独显（Alchemist/DG2架构））、酷睿核显（11代至14代的集显） | 绝对主力，兼容稳定。A系列独显在Linux上目前默认依然跑在i915驱动上，稳定性经过多年打磨已经非常成熟 |
| Xe | 第二代锐炫（ArcB系列独显（Battlemage架构））、酷睿Ultra核显（LunarLake（Xe2）、ArrowLake）、未来架构（PantherLake/NovaLake（Xe3）） | 下一代官方默认的现代化驱动，自Linux6.8内核起正式内置，针对新架构默认启用，代码效率和吞吐量极高 |

Intel显卡在专业用途下可能需要的库有：

- 专有驱动：`intel-compute-runtime`、`intel-opencl`
- 自由驱动：`mesa-va-drivers`

### AMD

AMD显卡在Linux下主要依赖开源驱动（`amdgpu`）。由于AMD将大部分驱动源码直接合入Linux内核，免去了第三方安装的麻烦。主流发行版（如Ubuntu、Fedora、Arch）均可即插即用，日常体验（尤其是多屏、Wayland协议、开源游戏Vulkan性能）表现极佳。

AMD不同架构的显卡需要不同驱动，但绝大多数情况下使用 `amdgpu`（依赖专有固件）即可。`mesa-va-drivers` 额外提供硬件视频加速。

| 显卡架构 | 对应显卡型号示例 | 内核驱动模块 | 其他说明 |
|---|---|---|---|
| RDNA3/RDNA3+ | RX7000系列、Radeon8000系列 | amdgpu | 直接使用系统内置驱动，配合mesa提供最佳游戏/图形性能 |
| RDNA2|RX6000系列 | amdgpu | 原生完美支持 |
| RDNA/RDNA1 | RX5000系列 | amdgpu | 原生完美支持 |
| GCN5/5.1(Vega) | RXVega56/64、RadeonVII | amdgpu | 需确保内核版本较新以获得最佳支持 |
| GCN1~4 | RX400/500系列、R9Fury|amdgpu | 属于较老架构，默认可能使用老旧的radeon驱动，建议在内核参数中强制启用amdgpu |
| 早于GCN1架构 | HD6000 及更早（如 HD5000/6000）| radeon | 已停止维护，仅能使用开源的 radeon 驱动 |


### NVIDIA

???+ quote "名人名言"
    So NVIDIA, fuck you.

    *所以，英伟达，去你妈的。*

    <p align="right">——Linus Torvalds</p>

自 2023 年以来，NVIDIA 对 Linux 的驱动支持日渐完善，如今除极个别方面仍有不足外，几乎已经追平 Windows。目前 NVIDIA 已将内核空间模块开源（Turing 及更新架构），即 nvidia-open。但其用户空间工具（如CUDA、DLSS等）依然闭源，即nvidia-utils。

同样，NVIDIA不同架构的显卡也需要不同的驱动，但是NVIDIA相对AMD更为复杂

| 驱动版本范围 | 对应显卡型号示例                 | 其他说明                                                                 |
|-----------------|--------------------------------|--------------------------------------------------|
| 610.x 及更新  | Turing（GTX 16系列）、Ampere（RTX 30系列）、Ada Lovelace（RTX 40系列）、Blackwell（RTX 50系列） | 最低支持GTX 1650及以上，Pascal（GTX 10系列）及更早架构完全不兼容 |
| 580.x~582.x  | Pascal（GTX 10系列）、Volta（Titan V）、Turing、Ampere、Ada Lovelace | Pascal架构的最终常规支持版本，2025年10月后仅提供安全更新，无新功能或性能优化 |
| 470.x~535.x  | Maxwell（GTX 900系列）、Pascal、Volta、Turing、Ampere | Maxwell架构的最终支持版本，2024年9月后仅限安全更新 |
| 390.x 及更旧 | Kepler（GTX 700系列）、Maxwell | 仅限安全更新至2024年9月，无新功能支持，Linux内核兼容性差 |

NVIDIA显卡在专业用途下可能需要`akmod-nvidia`与`xorg-x11-drv-nvidia-cuda`库。

!!! warning "警告"
    NVIDIA 长期沿用自家的 EGLStreams，而非社区通用的 GBM，早期驱动下 KDE KWin、GNOME Mutter 及各类基于 wlroots 的混成器对 NVIDIA 支持并不完整。自 495 版驱动起已支持 GBM，555 版起支持显式同步，目前的问题主要集中在旧卡与旧驱动、Xwayland 以及个别合成器的兼容性上。  

    ***已知存在的问题***

    - Hyprland Wayland合成器的显示器缩放问题
    - 旧版驱动下 wlroots 系合成器的兼容性
    - Waydroid无法使用NVIDIA
    - ...以及各类依赖显式同步（explicit sync）的功能

## 网卡驱动

### Realtek

内核自带r8169（eth）和rtw88（wireless）驱动，但对部分较新的 RTL 无线网卡支持不佳，出现问题时，推荐安装rtw89、rtl8821ce以解决。

### Intel 

Intel网卡在Linux系统下享有业界相对顶级的原生支持。绝大多数有线网卡与无线网卡均内置于内核驱动中，实现免驱即插即用。有线网卡支持完善。如e1000e（千兆）、ixgbe（万兆）、igc（2.5G）均已并入主线Linux内核。无线网卡主流型号（如AX200、AX210、BE200等）依赖iwlwifi，内核版本满足要求即可直接识别。

### Broadcom

Broadcom（博通）无线网卡在Linux系统下的支持情况因芯片型号而异。部分网卡已原生集成于内核中，开箱即用，而大部分老旧或特定型号（如BCM43142等）需手动安装专属闭源驱动（broadcom-sta）或配置固件。

???+ info "目前的支持情况"
    - 原生支持芯片（brcmsmac/brcmfmac）：大多数较新的Broadcom无线网卡由内核中的开源驱动直接支持，这类网卡通常即插即用。
    - 需要专有驱动的芯片（broadcom-sta/wl）：例如 BCM4311、BCM4312、BCM4313、BCM43142、BCM4360 等。这类设备在主流发行版（如 Ubuntu、Debian、Arch Linux 等）中需要安装broadcom-wl或 bcmwl-kernel-source驱动包。
    - 极其老旧或部分极新芯片：可能只有 Windows 驱动，Linux 下无法使用无线功能

### Qualcomm Atheros 

Qualcomm Atheros在Linux下的驱动支持是最完美的（没有之一），大多已内置于内核中。Qualcomm Atheros的驱动属于开源项目，完全整合在主流Linux内核中，如ath9k（支持早期的 802.11n 网卡，如AR9287, AR9565等。稳定性极佳，免驱、无需额外固件）、ath10k（支持802.11ac网卡，如QCA9377, QCA6174, QCA9880等，依赖linux-firmware固件，开箱即用）、ath11k/ath12k（支持较新的Wi-Fi 6（802.11ax）与Wi-Fi 7设备。随着新内核发布，断流等性能问题在不断修复）。
