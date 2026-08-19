# 应用

在国产信创政策推动下，大多数日常应用已经推出了Linux原生版本。不过，部分应用可能仍然存在些许问题与功能缺失。我们会在本章列出一些应用以及推荐安装选项。

或者，您也可以通过发行版自带应用商店或第三方应用商店（如[星火应用商店](https://www.spark-app.store/)）进行下载。

## 软件包选择
  - Debian 系: Debian, Mint, Ubuntu, Kubuntu等: `deb`
  - 红帽系: Fedora, RHEL, Rocky等: `rpm`
  - Arch 系: 通常不需要用包(`pacman`)安装

大部分桌面环境支持双击安装包进行安装。您也可以按照使用以下的包管理器。

## Apt (Debian系)

全称：Advanced Packaging Tool

包格式：deb

apt是大部分Debian系的软件包管理器，由Debian团队在dpkg的基础上创建。

apt有多种变体，如apt-get、aptitude（用于缓解依赖地狱）等。

以下是一些较为常见的apt指令。

1. `sudo apt install xxx` 安装某个软件包（可列举多个）
2. `sudo apt remove xxx` 卸载某个软件包（可列举多个）
3. `sudo apt update` 更新软件仓库缓存
4. `sudo apt upgrade` 升级系统软件包
5. `sudo apt autoremove` 自动删除部分不需要的软件包

不常用指令

1. `sudo apt purge xxx` 彻底删除某个软件包（可列举多个）
2. `sudo apt search xxx` 搜索某软件包
3. `sudo apt moo` 彩蛋

更详细可以参考[Runoob的教程](https://www.runoob.com/linux/linux-comm-apt.html)。

## Dnf (红帽系)

全称：Dandified Yum

包格式：rpm

dnf是大部分红帽系的软件包管理器，在rpm的基础上创建。

与先前的yum相比，dnf具有性能高，速度快的特点。

以下是一些较为常见的dnf指令。

1. `sudo dnf install xxx` 安装某个软件包（可列举多个）
2. `sudo dnf remove xxx` 卸载某个软件包（可列举多个）
3. `sudo dnf upgrade 或 update` 升级系统软件包
4. `sudo dnf autoremove` 自动删除部分不需要的软件包
5. `sudo dnf makecache` 创建软件仓库缓存
6. `sudo dnf copr enable xxx` 启用某COPR仓库
7. `sudo dnf copr disable xxx` 禁用某COPR仓库

不常用指令

1. `sudo dnf system-upgrade download --releasever=xx` 升级系统至某一版本
2. `sudo dnf system-upgrade reboot` （在上一指令的基础上）重启进行升级
3. `sudo dnf group install xxx` 安装某一软件包组
4. `sudo dnf search xxx` 搜索某软件包

更详细可以参考[Runoob的教程](https://www.runoob.com/linux/linux-comm-dnf.html)。

## Pacman (Arch系)

全称：Package Manager

包格式：pacman

pacman是大部分Arch系的软件包管理器。

!!! warning "警告"
    Arch 严禁“部分升级”（Partial Upgrade）。请勿在未同步升级全系统的情况下单独安装或更新某个软件，否则极易导致系统依赖断裂造成所谓的 **“滚挂”** ！此外，推荐配置 **AUR (Arch User Repository)** 并配合 yay 或 paru 等助手使用，可以提升使用体验。

???+ note "多选题"
    在安装软件时，您可能见到类似如下的选项:
    ```
    :: There are 2 providers available for jack:
    :: Repository extra
    1) jack2  2) pipewire-jack
    ```
    这时，我们推荐您选择带有如下字样的选项：

    - `pipewire`: 音频服务
    - `ffmpeg`: 多媒体后端
    - `NetworkManager`: 网络链接管理
    - `cups`: 打印
    - `systemd-resolved`: DNS解析
    
    以上列表无法覆盖所有选项，若遇到未列出的情况，您可以寻求AI的帮助。

???+ note "软件组"
    在安装软件组时，遇到这样的情况，我们建议您直接回车:
    ```
    :: There are 58 members in group gnome:
    :: Repository extra
    1) baobab  2) decibels  3) epiphany  4) gdm  5) gnome-backgrounds  6) gnome-calculator  7) gnome-calendar  8) gnome-characters  9) gnome-clocks  10) gnome-color-manager  11) gnome-connections
    12) gnome-console  13) gnome-contacts  14) gnome-control-center  15) gnome-disk-utility  16) gnome-font-viewer  17) gnome-keyring  18) gnome-logs  19) gnome-maps  20) gnome-menus  21) gnome-music
    22) gnome-remote-desktop  23) gnome-session  24) gnome-settings-daemon  25) gnome-shell  26) gnome-software  27) gnome-system-monitor  28) gnome-text-editor  29) gnome-tour  30) gnome-user-docs
    31) gnome-user-share  32) gnome-weather  33) grilo-plugins  34) gst-thumbnailers  35) gvfs  36) gvfs-afc  37) gvfs-dnssd  38) gvfs-goa  39) gvfs-gphoto2  40) gvfs-mtp  41) gvfs-nfs  42) gvfs-onedrive
    43) gvfs-smb  44) gvfs-wsdd  45) loupe  46) malcontent  47) nautilus  48) orca  49) papers  50) rygel  51) showtime  52) simple-scan  53) snapshot  54) sushi  55) tecla  56) xdg-desktop-portal-gnome
    57) xdg-user-dirs-gtk  58) yelp

    Enter a selection (default=all): 
    ```

以下是一些较为常见的pacman指令。

1. `sudo pacman -S` 安装某个软件包（可列举多个）
2. `sudo pacman -Rs` 卸载某个软件包及其依赖（可列举多个）
3. `sudo pacman -Syu` 升级系统软件包（请不要颠倒参数顺序！）
4. `sudo pacman -Scc` 清空包缓存

???+ question "-S, -Syu，这些都是什么意思？"
    在Pacman中，`-S`（Sync，同步）、`-R`（Remove，移除）这些代表的是选项(Options)，可以看作“主操作模式”，而不同的选项后可能会存在不同的“辅助开关”。例如，`-S`的变体`-Syu`或`-S -y -u`中，`-y`代表Refresh（刷新），`-u`代表Sysupgrade（更新所有包），意为：刷新软件源并更新所有包。而在`-R`的变体`-Rus`中 ，`-u`代表的就是Unneeded（跳过仍然被其他包所依赖的软件包），`-s`代表Recursive（递归删除目标包与依赖），意为：递归删除目标包与依赖，并忽略那些被其他软件依赖的包。
    
    并且，部分“辅助开关”被重复时会有不同作用，例如`-Syyuu`，此处的`-yy`表示强制刷新软件源，`-uu`表示在更新的同时允许降级。

    同时，各个“辅助开关”也存在操作顺序的差异。

    要查看各选项含义，您可以运行`sudo pacman --help`，而要查看对应选项下的其他选项，您可以运行`sudo pacman -选项 --help`。

不常用指令

1. `sudo pacman -Ss` 搜索某软件包

更详细可以参考[Linux命令手册](https://www.linux-man.cn/linux/command/pacman/)。

### AUR 助手 (Arch)

AUR (Arch User Repository)是当今Linux软件包数目第二多的软件仓库，具有丰富多样的应用可供安装，包括但不限于QQ、微信、达芬奇等。

要使用AUR，您需要安装AUR助手，目前有`yay`与`paru`可供选择。不过请注意，两者并不直接存在与Arch Linux官方软件仓库中，我们建议您首先添加Arch Linux CN软件仓库，之后用`pacman`安装任意一个。或者，您也可以参照Arch Wiki的教程：[Yay](https://wiki.archlinuxcn.org/zh-cn/Yay)

同时，您可能需要安装`base-devel`来编译软件。

一般来说，AUR的常用语法与Pacman基本相同。

???+ note "执行者"
    不建议使用`sudo`或在`root`用户下执行AUR助手。

!!! warning "网络问题" 
    AUR本质上拖管的是PKGBUILD文件，可以被看作是应用程序的构建脚本，因而部分软件在安装时需要从Github拉取上游软件包，这使得部分软件的安装进度十分缓慢。

    要解决这一问题，您可以手动编辑PKGBUILD来更换加速链接，也可以参考[本篇教程](https://zhuanlan.zhihu.com/p/688340777)。

## Flatpak

Flatpak是Linux新一代跨平台软件安装解决方案。它通过沙箱设计，将软件与宿主机隔离，从而保证兼容性与安全性

!!! warning "已知问题"
    Flatpak与宿主机互通目前不够完善，例如QQ的剪贴板问题等。

    要解决这一问题，请使用Flatpak安装Flatseal后，找到对应软件，关闭“回退到X11”。
    
    不过尽管如此，大多数软件的表现均与包管理器版本无较大差别。

在您使用Flatpak之前，请确保您已经使用您的系统包管理器安装了`flatpak`包，并添加了Flathub软件源。

???+ info "Flathub缓存"
    国内目前仅USTC与SJTUG有Flathub缓存。

     - USTC: https://mirrors.ustc.edu.cn/help/flathub.html
    
     - MirrorZ: https://help.mirrors.cernet.edu.cn/flathub


以下是一些较为常见的Flatpak指令。

1. `flatpak install xxx` 安装某个Flatpak包（可列举多个）
2. `flatpak remove xxx` 卸载某个Flatpak包（可列举多个）
3. `flatpak update (xxx)` 升级全部/某个Flatpak包

我们此处不列出关于构建、修改应用权限等指令，您可以运行 `flatpak --help` 来查看。推荐使用Flatseal管理应用权限。

建议参考来自Linux中国的[Flatpak 新手指南](https://zhuanlan.zhihu.com/p/55299546)。

## AppImage

包格式：appimage

AppImage是一种通用的软件包格式，可以理解为Windows上的绿色版软件。它通过打包依赖来规避额外安装，具有通用性，可以在几乎所有发行版上运行。AppImage包没有统一的管理器。

???+ note "权限问题"
    在下载AppImage后，您需要运行`chmod +x 软件包`来给予其执行权限。