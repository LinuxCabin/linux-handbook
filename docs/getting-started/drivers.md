# 驱动

Linux下的驱动主要分为以下两类：

- 自由驱动：公开源代码，由开源社区维护，性能发挥较弱，问题修复快。
- 专有驱动：不公开源代码，由制造商维护，性能发挥好，问题修复一般较慢。

## 显卡驱动

### Intel

Intel显卡（包括传统的核显、锐炫Arc独显以及最新的酷睿Ultra核显）在Linux下遵循“开源优先、即插即用”的策略。Intel直接把驱动写进Linux内核和Mesa图形库的，日常使用或打游戏不需要去官网手动下载任何安装包。而且Intel在更新和优化驱动，具体对比如下

| 内核驱动模块 | 对应显卡型号&架构示例 | 其他说明 |
|---|---|---|
| i915 | 传统核显（第11代（TigerLake）之前的旧核显）、第一代锐炫（Arc A系列独显（Alchemist/DG2架构））、酷睿核显（11代至14代的集显） | 绝对主力，兼容稳定。A系列独显在Linux上目前默认依然跑在i915驱动上，稳定性经过多年打磨已经非常成熟 |
| Xe | 第二代锐炫（ArcB系列独显（Battlemage架构））、酷睿Ultra核显（LunarLake(Xe2)、ArrowLake）、未来架构（PantherLake/NovaLake(Xe3) | 下一代官方默认的现代化驱动，自Linux6.8内核起正式内置，针对新架构默认启用，代码效率和吞吐量极高 |

### AMD

AMD显卡在Linux下主要依赖开源驱动(amdgpu)。由于AMD将大部分驱动源码直接合入Linux内核，免去了第三方安装的麻烦。主流发行版（如Ubuntu、Fedora、Arch）均可即插即用，日常体验（尤其是多屏、Wayland协议、开源游戏Vulkan性能）表现极佳。

AMD不同架构的显卡需要不同驱动，但大多数使用amdgpu即可

| 显卡架构 | 对应显卡型号示例 | 内核驱动模块 | 其他说明 |
|---|---|---|---|
| RDNA3/RDNA3+ | RX7000系列、Radeon8000系列 | amdgpu | 直接使用系统内置驱动，配合mesa提供最佳游戏/图形性能 |
| RDNA2|RX6000系列 | amdgpu | 原生完美支持 |
| RDNA/RDNA1 | RX5000系列 | amdgpu | 原生完美支持 |
| GCN5/5.1(Vega) | RXVega56/64,RadeonVII | amdgpu | 需确保内核版本较新以获得最佳支持 |
| GCN1~4 | RX400/500系列,R9Fury|amdgpu | 属于较老架构，默认可能使用老旧的radeon驱动，建议在内核参数中强制启用amdgpu |
 |早于GCN1架构 | HD7000系列及更早(如HD5000/6000) | radeon | 支持停止维护，仅能使用开源radeon驱动 |

### NVIDIA

NVIDIA对Linux用户的驱动在23年以来，支持日渐完善，NVIDIA显卡目前在极个别方面不足外，几乎已经追平Windows。目前NVIDIA在最新驱动开源部分非关键的内核空间部分，即nvidia-open。但其用户空间工具（如CUDA，DLSS等）依然闭源，即nvidia-utils。

同样，NVIDIA不同架构的显卡也需要不同的驱动，但是NVIDIA相对AMD更为复杂

| 驱动版本范围 | 对应显卡型号示例                 | 其他说明                                                                 |
|-----------------|--------------------------------|--------------------------------------------------|
| 610.x 及更新  | Turing（GTX 16系列）、Ampere（RTX 30系列）、Ada Lovelace（RTX 40系列）、Blackwell（RTX 50系列） | 最低支持GTX 1650及以上，Pascal（GTX 10系列）及更早架构完全不兼容 |
| 580.x~582.x  | Pascal（GTX 10系列）、Volta（Titan V）、Turing、Ampere、Ada Lovelace | Pascal架构的最终常规支持版本，2025年10月后仅提供安全更新，无新功能或性能优化 |
| 470.x~535.x  | Maxwell（GTX 900系列）、Pascal、Volta、Turing、Ampere | Maxwell架构的最终支持版本，2024年9月后仅限安全更新 |
| 390.x 及更旧 | Kepler（GTX 700系列）、Maxwell | 仅限安全更新至2024年9月，无新功能支持，Linux内核兼容性差 |

!!! warning "警告"
    由于NVIDIA坚持使用 EGLStreams，而 KDE KWin、GNOME Mutter 及各类基于 wlroots 的混成器均围绕公版方案 GBM 构建，导致大量小型项目根本无法支持 NVIDIA 显卡，即 NVIDIA 对 Wayland 的实现并非 Wayland 的推荐公版，造成众多本应运行良好的 Wayland 机制在 NVIDIA 显卡下出现严重问题！！  

    ***已知存在的问题***

    - Hyprland Wayland合成器的显示器缩放问题
    - wlroots未支持NVIDIA
    - Waydroid无法使用NVIDIA
    - ...以及各种因为EGLStreams而受影响的软件

## 网卡驱动

### Realtek

内核自带r8169（eth）和rtw88（wireless）驱动，但对于高端无线网卡和部分RTL无线网卡支持不佳，出现问题时，推荐安装rtw89，rtl8821ce以解决。

### Intel 

Intel网卡在Linux系统下享有业界相对顶级的原生支持。绝大多数有线网卡与无线网卡均内置于内核驱动中，实现免驱即插即用。有线网卡支持完善。如e1000e(千兆)、ixgbe(万兆)、igc(2.5G)均已并入主线Linux内核。 无线网卡主流型号（如AX200、AX210、BE200等）依赖iwlwifi，内核版本满足要求即可直接识别。

### Broadcom

Broadcom（博通）无线网卡在Linux系统下的支持情况因芯片型号而异。部分网卡已原生集成于内核中，开箱即用，而大部分老旧或特定型号（如BCM43142等）需手动安装专属闭源驱动（broadcom-sta）或配置固件。

???+info "目前的支持情况"
    - 原生支持芯片(brcmsmac/brcmfmac)：大多数较新的Broadcom无线网卡由内核中的开源驱动直接支持，这类网卡通常即插即用。
    - 需要专有驱动的芯片(broadcom-sta/wl)：例如BCM4311, BCM4312, BCM4313, BCM43142, BCM4360等。这类设备在主流发行版（如 Ubuntu, Debian, Arch Linux 等）中需要安装broadcom-wl或 bcmwl-kernel-source驱动包。
    - 极其老旧或部分极新芯片：可能仅有Windows驱动

### Qualcomm Atheros 

Qualcomm Atheros在Linux下的驱动支持是最完美的（没有之一），大多已内置于内核中。Qualcomm Atheros的驱动属于开源项目，完全整合在主流Linux内核中，如ath9k(支持早期的 802.11n 网卡，如AR9287, AR9565等。稳定性极佳，免驱、无需额外固件)、ath10k(支持802.11ac网卡，如QCA9377, QCA6174, QCA9880等，依赖linux-firmware固件，开箱即用)、ath11k/ath12k(支持较新的Wi-Fi 6(802.11ax) 与Wi-Fi 7设备。随着新内核发布，断流等性能问题在不断修复)。
