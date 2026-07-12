# Fedora

![Logo](https://fedoraproject.org/assets/images/logos/fedora-logo.svg)

## 简介

Fedora是一款前沿、开放的发行版，有着广泛的社区支持，并且提供多种变体可供选择。

## 详细信息

 - 派系：红帽系
 - 发行者：Fedora 团队
 - 官网：https://fedoraproject.org/zh-Hans/
 - 支持的系统架构：x86_64/arm64
 - 自由软件：是（部分自由）
 - 镜像下载地址：
 - - TUNA: https://mirrors.tuna.tsinghua.edu.cn/fedora/releases/
 - - USTC: https://mirrors.ustc.edu.cn/fedora/releases/
 - - CERNET: https://mirrors.cernet.edu.cn/fedora/releases/
 - 包管理器：dnf
 - 更新方式：传统
 - 换源教程：
 - - TUNA: https://mirrors.tuna.tsinghua.edu.cn/help/fedora/
 - - USTC: https://mirrors.ustc.edu.cn/help/fedora.html
 - - CERNET: https://help.mirrors.cernet.edu.cn/fedora/

## 风味

### Editions

 - Fedora Workstation: 预装GNOME桌面
 - Fedora KDE Plasma Desktop: 预装KDE桌面
 - Fedora Server: 服务器版本
 - Fedora Cloud: 云虚拟机版本
 - Fedora IoT: 嵌入式设备版本
 - Fedora CoreOS: 容器用不可变版本

### Atomic Desktops （原子系统）

 - Fedora Silverblue: 预装GNOME桌面，不可变系统
 - Fedora Kinoite: 预装KDE桌面，不可变系统
 - Fedora Sway Atomic: 预装Sway桌面，不可变系统
 - Fedora Budgie Atomic: 预装Budgie桌面，不可变系统
 - Fedora COSMIC Atomic: 预装COSMIC桌面，不可变系统

### Spins（预装不同桌面的变体）

 - Xfce Desktop
 - Cinnamon Desktop
 - MATE+Compiz Desktop
 - i3 Tiling WM
 - LXQt Desktop
 - LXDE Desktop
 - SOAS Desktop
 - Sway Tiling WM
 - Budgie Desktop
 - Miracle Desktop
 - KDE Mobile Desktop
 - COSMIC Desktop

### Labs（行业特供）

 - Astronomy: 天文
 - Design Suite: 设计
 - Games: 游戏
 - Jam: 音乐
 - Python Classroom: 教育
 - Scientific: 科学
 - Security Lab: 安全

## 注意事项

### rpmfusion

Fedora由于版权限制，无法内置H264/H265编解码器，因此需要手动添加源来安装。

???+ info "镜像源帮助"
     - TUNA: https://mirrors.tuna.tsinghua.edu.cn/help/rpmfusion/
     - USTC: https://mirrors.ustc.edu.cn/help/rpmfusion.html
     - CERNET: https://help.mirrors.cernet.edu.cn/rpmfusion/

在添加源后，请在终端运行`sudo dnf group install Multimedia`来安装编解码器。