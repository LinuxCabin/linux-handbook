# VLC 媒体播放器

![vlc](https://images.videolan.org/images/VLC-IconSmall.png)

## 概述

VLC 媒体播放器（简称 VLC）是一个可移植、跨平台的媒体播放器。VLC 支持许多解码和编码库，对各种媒体文件的兼容性都很好。

VLC 是自由软件，基于 [GPL-2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html) 发布。

## 安装

VLC 可以由传统包管理器或 [Flatpak](../../concepts/package_managers/flatpak.md), Snap 安装。我们推荐选择 Flatpak 。

[Flatpak](https://flathub.org/apps/org.videolan.VLC) （推荐）
```bash
flatpak install org.videolan.VLC
```

??? info "传统包管理器（apt, yum, pacman...）的安装方法"

    Debian 系：
    ```bash
    sudo apt install vlc
    ```

    RedHat 系：
    ```bash
    sudo yum install vlc
    ```

    Arch 系：
    ```bash
    sudo pacman -S vlc
    ```

## 使用

打开 VLC。

### 播放媒体

选中 **媒体** - **打开文件** ，打开要播放的文件。
