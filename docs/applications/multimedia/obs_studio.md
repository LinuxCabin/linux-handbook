# OBS Studio
<!-- TODO: L118, L164, L186 -->

![Markdown Logo](https://obsproject.com/assets/images/new_icon_small-r.png)

全称：Open Broadcaster Software，开源广播软件（直译）

## 概述

OBS Studio 同时是一款视频录制器和一款推流器。它还有“合成器”的功能，允许将多个输入源合并到同一个输出中——然后发送到视频流服务器或保存为文件。

OBS Studio 完全免费，灵活可定制，还有庞大的插件库和社区支持。

## 安装
可以通过 [Flatpak](../../concepts/package_managers/flatpak.md) 和 Snap 安装 OBS Stuio，也可以通过传统包管理器直接安装 OBS Studio。

### Flatpak（推荐：AMD / Intel）
```bash
flatpak install com.obsproject.Studio
```

### Snap
```bash
sudo snap install obs-studio
```

### 传统包管理器（推荐：Nvidia）
- Debian系：
    ```bash
    sudo apt install obs-studio
    ```
- Redhat系：
    ```bash
    sudo yum install obs-studio
    ```

## 配置

### 录制屏幕
在 **来源** 中，点击 **+** 号，选择 **屏幕采集(Pipewire)** ，点击 **OK** 。

???+ info "如果收到了弹窗..."
     桌面管理器可能会问您诸如 “是否允许该应用录制屏幕” 的问题，选择允许。这是安全的，只有 OBS Studio 能看见屏幕上的内容。

现在您应该可以在新弹出的窗口上看到目前屏幕的内容，再点击一次 **OK** 来保存设定。

### 视频质量
OBS Studio 默认输出 1080p ，（视您的硬件）最高 6000 kbps 的视频。

#### 更改输出分辨率
若要更改输出分辨率，点击右下角的 **设置**，在设置的左侧栏目中点击 **视频**，将右侧的 **输出分辨率** 改为想要的值，点击右下角的 **完成**。

#### 更改输出比特率
前往 **设置**，点击左侧栏目的 **输出**，将右侧的 **视频比特率** 改为想要的值，点击右下角的 **完成**。

### 快捷键

前往 **设置**，左侧栏目的 **快捷键**，点击项目后的输入框，在键盘和/或鼠标（是的，可以绑定鼠标侧键）按下你想要设置的键。
???+ note "不工作？"
     如果快捷键在 OBS 窗口外不工作，很有可能您使用 Wayland 显示服务器。OBS 无法在后台访问键盘，这是 Wayland 为了安全而作出的限制。有利用 Wayland 原生接口的插件，参阅 [**Wayland 下的快捷键**](#wayland) 章节。

## 使用

点击 **开始录制** 或 **开始直播** ，在完成后点击** 停止录制** 或 **停止直播** 。

如想暂停录制，点击 **停止录制** *旁边* 的暂停键以暂停。再点一下以继续录制，或点击** 停止录制** 来结束。

## 高级

### 硬件加速 ( AMD / Intel )

如果 OBS Studio 使用 Flatpak 或 Snap 安装，不用任何操作，依赖已经被管理好了。

如果 OBS Studio 使用传统包管理器安装，安装 ``ffmpeg`` 。

- Debian 系： `sudo apt install ffmpeg`
- RedHat 系： `sudo yum install ffmpeg`
- Arch 系：   `sudo pacman -S ffmpeg`

您可能需要重启电脑。

??? question "可是我看不到硬件加速的选项耶？"
     把输出模式改成 **高级** ，在 **直播** 和 **录像** 的视频编码器里选择 **"FFmpeg VAAPI"** 开头的选项。

### 硬件加速 ( Nvidia )

!!! quote "所以 Nvidia ..."
    **So Nvidia, fuck you.**  
    *所以 Nvidia，去你妈的。*  
    <p align="right">——Linus Torvalds</p>

#### Nvidia 专有驱动

!!! warning "专有软件（非自由软件）"
    Nvidia 专有驱动（`nvidia`）是[专有软件](https://www.gnu.org/proprietary/proprietary.html)。

##### 传统包管理器

如果 OBS Studio 使用传统包管理器安装，安装 ``ffmpeg`` 。

- Debian 系： `sudo apt install ffmpeg`
- RedHat 系： `sudo yum install ffmpeg`
- Arch 系：   `sudo pacman -S ffmpeg`

您可能需要重启电脑。

VA-API, VDPAU 和 高性能的 NVDEC, NVENC 都可用。

##### Flatpak 或 Snap

如果 OBS Studio 使用 Flatpak 或 Snap 安装，不用任何操作，依赖（VA-API）已经被管理好了...除非先安装的 OBS，后安装的 Nvidia 专有驱动。这样的话，安装以下包裹：
```bash
flatpak install org.freedesktop.Platform.VAAPI.nvidia
```

现在只有 VA-API 和 VDPAU 可用。要使用 NVDEC 和 NVENC，[安装 CUDA 工具包](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/)。

<!-- 不写了。我成功跑起来了但是太复杂了，写下来绝对撞j4w: ffmpeg又不是不能用。 -->

#### nouveau

从 GeForce 8系（ 8600 GT, 8800 GTX 等）到 **开普勒架构**的 GeForce 7系（ GTX 760, GTX 780 等，**GTX 750 和 GTX 750 Ti 不包括在内**），nouveau 支持 VA-API 和 VDPAU 加速。

还需要安装 [从Nvidia驱动中提取的固件](https://nouveau.freedesktop.org/VideoAcceleration.html#firmware)。

!!! warning "专有软件（非自由软件）"
    上述“从Nvidia驱动中提取的固件”是[专有软件](https://www.gnu.org/proprietary/proprietary.html)。如果您的目标是完全自由的软件，nouveau目前还做不到。您可以考虑使用集成显卡进行硬件加速。

???- info "安装过程..."
     **安装 mesa 驱动**  
     - Debian 系： `sudo apt install mesa-va-drivers`  
     - RedHat 系： `sudo yum install mesa-va-drivers`  
     - Arch 系： `sudo pacman -S mesa`  
     - Gentoo Linux： `USE=vaapi sudo -E emerge media-libs/mesa`

     **安装固件**  
     - Arch 系： `git clone --depth 1 https://aur.archlinux.org/nouveau-fw.git && cd nouveau-fw && makepkg -si`  
     - Gentoo Linux： `sudo emerge sys-firmware/nvidia-firmware`  
     - 其他发行版：
     ```bash
     mkdir /tmp/nouveau
     cd /tmp/nouveau
     wget https://raw.github.com/envytools/firmware/master/extract_firmware.py
     wget http://us.download.nvidia.com/XFree86/Linux-x86/325.15/NVIDIA-Linux-x86-325.15.run
     sh NVIDIA-Linux-x86-325.15.run --extract-only
     python extract_firmware.py
     sudo mkdir /lib/firmware/nouveau
     sudo cp -d nv* vuc-* /lib/firmware/nouveau/
     ```
     
     **安装 FFmpeg**  
     - Debian 系： `sudo apt install ffmpeg`  
     - RedHat 系： `sudo yum install ffmpeg`  
     - Arch 系： `sudo pacman -S ffmpeg`  
     - Gentoo Linux： `USE=vaapi sudo -E emerge media-video/ffmpeg`

     如果您使用 Flatpak 安装 OBS Studio，第三步 **安装 FFmpeg** 可以跳过。

对于更新的显卡，nouveau **不支持** 硬件加速。

### Wayland 下的快捷键

<!-- 裸金属运行的obs需要手动编译该插件，受限于coc无法提供教程 -->
<!-- edit Aug 18 6:36 PM EDT 2026：安装nvidia比手动编译难... 要么不加入n卡要么一起橄榄coc... -->

如果 OBS Studio 使用 Flatpak 安装，安装 ``com.obsproject.Studio.Plugin.WaylandHotkeys`` 。

```bash
flatpak install com.obsproject.Studio.Plugin.WaylandHotkeys
```

安装完成后启动 OBS Studio，您应该会看到一个设置快捷键的弹窗。

!!! info "注意"
    OBS 内置的快捷键设置没有效果，应该去系统设置里更改快捷键。

???+ note "添加，更改，移除快捷键"
     **GNOME**

     打开系统设置，导航至 **应用程序** - **OBS Studio** ，点击 **全局快捷键** 。

     **KDE Plasma**

     打开系统设置，导航至 **键盘** - **快捷键**，在列表里选择 **OBS Studio** 。

<!-- TODO: 我需要使用中文操作系统的人帮我验证翻译名。-->

## 关于更多

- [官方网站](https://obsproject.com/)： `https://obsproject.com/`
- [官方文档](https://docs.obsproject.com/)： `https://docs.obsproject.com/`
- 社区文档：
    - [OBS Studio 完全新手指南](https://www.obs.com.cn/post/140.html)： `https://www.obs.com.cn/post/140.html`    ***这不是官网！OBS Studio 没有“中文官网”！**

- Nvidia：
    - [Linux CUDA 安装教程](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/)： `https://docs.nvidia.com/cuda/cuda-installation-guide-linux/`