# Arch Linux

![Logo](https://wiki.archlinuxcn.org/wzh/images/logo.svg)

## 简介

Arch Linux 是 Linux 社区中最受欢迎的独立滚动更新（Rolling Release）发行版之一。它秉承 KISS（Keep It Simple, Stupid）哲学，不预装繁杂的软件和默认桌面，将系统的完全掌控权交还给用户。虽然其全命令行安装的方式对新手门槛较高，但它拥有所有GNU/Linux发行版中最强大的知识库 Arch Wiki、极度丰富的 AUR 软件仓库以及“一次安装，终身更新”的特性，是极客和深度 Linux 爱好者的不二之选。

???+ quote "名人名言"
      And at the same time, there are the really tech oriented ones where you compile your own, everything you compile your own distro. And again, that was not geared for me.

      ...

      I want a distro that just installs and just works.

      *另一方面，也有那种特别“技术向”的发行版，那种什么都要自己编译，从零搞起的发行版，同样也不适合我。*

      *...*

      *我想要的是开箱即用的发行版。*

      <p align="right">——Linus Torvalds</p>

## 详细信息

 - 派系：Arch系
 - 发行者：Arch Linux Project / 社区维护
 - 官网：https://archlinux.org/
 - 支持的系统架构：x86_64/arm64 (由社区维护)
 - 自由软件：是（部分自由）
 - 镜像下载地址：
    - TUNA: https://mirrors.tuna.tsinghua.edu.cn/archlinux/iso/
    - USTC: https://mirrors.ustc.edu.cn/archlinux/iso/
    - MirrorZ: https://mirrors.cernet.edu.cn/archlinux/iso/
 - 包管理器：[pacman](../../applications/apps.md#pacman-arch)

!!! warning "警告"
    Arch 严禁“部分升级”（Partial Upgrade）。请勿在未同步升级全系统的情况下单独安装或更新某个软件，否则极易导致系统依赖断裂造成所谓的 **“滚挂”** ！
      
    在每次更新系统时，请一定阅读Arch Linux官网新闻，以查阅是否需要手动干预的软件包。

 - 更新方式：滚动
 - 自动换源：是
 - 图形安装界面：否
 - 换源教程：
    - TUNA: https://mirrors.tuna.tsinghua.edu.cn/help/archlinux/
    - USTC: https://mirrors.ustc.edu.cn/help/archlinux.html
    - MirrorZ: https://help.mirrors.cernet.edu.cn/archlinux/

## 注意事项

### Arch Linux CN

Arch Linux CN由Arch Linux中文社区维护，包含多数中国用户常用的软件包、字体等等。

要使用Arch Linux CN，您需要编辑`/etc/pacman.conf`文件，并添加如下内容。

```
[archlinuxcn]
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
Server = https://mirrors.cernet.edu.cn/archlinuxcn/$arch

```
然后运行`sudo pacman -S archlinuxcn-keyring`导入GPG Key。

### AUR

AUR (Arch User Repository)是当今Linux软件包数目第二多的软件仓库，具有丰富多样的应用可供安装，包括但不限于QQ、微信、达芬奇等。

要使用AUR，您需要安装AUR助手，目前有`yay`与`paru`可供选择。不过请注意，两者并不直接存在与Arch Linux官方软件仓库中，我们建议您首先添加Arch Linux CN软件仓库，之后用`pacman`安装任意一个。或者，您也可以参照Arch Wiki的教程：[Yay](https://wiki.archlinuxcn.org/zh-cn/Yay)

同时，您可能需要安装`base-devel`来编译软件。

???+ note "执行者"
   不建议使用`sudo`来执行AUR助手。

!!! warning "网络问题" 
   AUR本质上拖管的是PKGBUILD文件，可以被看作是应用程序的构建脚本，因而部分软件在安装时需要从Github拉取上游软件包，这使得部分软件的安装进度十分缓慢。

   要解决这一问题，您可以手动编辑PKGBUILD来更换加速链接，也可以参考[本篇教程](https://zhuanlan.zhihu.com/p/688340777)。