# 安装前准备

## 准备工具

在开始之前，您需要准备好一个空U盘（建议8GB以上），并且（最好）关闭电脑的安全启动 (Secure Boot) 功能。

如果您使用Windows，可以参考这篇较为简单的[教程](https://zhuanlan.zhihu.com/p/719651215)进入BIOS。

进入BIOS后，请通过方向键进入Security->Secure Boot，并将其设置为Disabled状态。

各品牌、型号电脑关闭安全启动的方法不同，如果与提供的路径不同，我们建议您使用AI辅助或搜索具体解决方案。

!!! warning "警告"
    BIOS是电脑的核心配置部分，如果您没有经验，我们建议您寻求AI或他人帮助，而不是自行修改，这可能导致你的操作系统无法启动！！！

## 选择发行版

发行版选择至关重要，这会从根本上决定您的日常使用体验。我们建议您参考网络资料与用户评价进行选择，或者被其他人“带师”。

!!! warning "警告"
    如果您初入Linux，我们建议您选择Debian系或RHEL系发行版试水。**我们不建议任何新手用户直接使用Arch Linux！！！**

下面是一些由我们排序的发行版，这里仅仅是一个简单难易度和激进程度的对比，具体的其他优势请查阅其他资料，您也可以点开各自的链接来**了解并比较**。

**我们建议您在安装前与安装后查看所选择发行版的“注意事项”一节。**

<table border="1" cellspacing="0" cellpadding="10" style="border-collapse:collapse; text-align:center;">
  <tr>
    <td style="background: linear-gradient(to top right, transparent 49%, #333 49%, #333 51%, transparent 51%); position: relative; width: 83px; height: 45px;">
      <span style="position: absolute; left: 2px; bottom: 2px;">难易度</span>
      <span style="position: absolute; right: 2px; top: 2px;">激进度</span>
    </td>
    <td>激进</td>
    <td>偏激进</td>
    <td>偏保守</td>
    <td>保守</td>
  </tr>
  <tr>
    <td>困难</td>
    <td><a href=/distros/arch/archlinux>Arch Linux</a> / <a href=/distros/arch/artixlinux>Artix Linux</a> / NixOS Unstable</td>
    <td>Guix Linux</td>
    <td>Gentoo Linux / NixOS Stable</td>
    <td>LFS (Linux From Scratch)</td>
  </tr>
  <tr>
    <td>较困难</td>
    <td>Void Linux / Alpine Linux Edge</td>
    <td>openSUSE Tumbleweed</td>
    <td>Slackware</td>
    <td>Alpine Linux Stable</td>
  </tr>
  <tr>
    <td>较简单</td>
    <td>Debian Sid / EndeavourOS</td>
    <td>Debian Testing / <a href=/distros/rhel/fedora>Fedora</a> / Manjaro / openSUSE Slowroll</td>
    <td>CentOS Stream</td>
    <td>Debian Stable / <a href=/distros/rhel/rocky>Rocky Linux</a>  / <a href=/distros/rhel/almalinux>Alma Linux</a>  / openSUSE Leap</td>
  </tr>
  <tr>
    <td>简单</td>
    <td>Everynight Vista</td>
    <td>openSUSE Aeon / <a href=/distros/rhel/fedora>Fedora Silverblue</a> / Deepin</td>
    <td><a href=/distros/debian/ubuntu>Ubuntu Release</a>  / <a href=/distros/debian/linuxmint>Linux Mint Release</a></td>
    <td><a href=/distros/debian/ubuntu>Ubuntu LTS</a> /KDE neon / LMDE</td>
  </tr>
</table>


或者，你也可以试试我们制作的[趣味测试](https://lati-fun.pages.dev/)，虽然只是个demo版本。 （部署于Cloudflare Pages，访问可能缓慢）


???+ note "发行版=外观？"

    请注意：**如果您的想法是“这个发行版很漂亮，我选这个”**，那么您可能听信了某些传教士的“一面之词”。

    **桌面外观不由发行版本身决定，而是由您所安装的桌面环境决定。**

    我用某个发行版并不代表我必须使用某个桌面环境。与Windows不同，Linux的组件之间具有极其高的耦合度！您完全可以选用更加简单的发行版来体验您心仪的桌面环境。

    在继续之前，我们建议您阅读并**分辨**以下概念章节：

    - 发行版
    - 桌面环境


## 调配分区

我们建议您通过专业的分区工具（如[DiskGenius](https://www.diskgenius.cn/)和Windows的磁盘管理单元）进行分区。您需要用分区工具在电脑硬盘上腾出60GB以上（建议值）的**空闲**空间。我们不建议直接在DiskGenius等WIndows下软件创建分区，而是在安装时由安装程序进行创建，这可以保证系统的稳定性和分区一致性。

!!! warning "警告"
    请不要将Linux安装到任何NTFS文件系统的分区，这将导致你的系统完全无法启动！Linux对NTFS的支持尚不完善！我们不建议使用Linux来调整NTFS分区！！！
    
    任何分区操作都存在风险，请您在操作之前确保已经备份所用磁盘中的重要数据到可靠的外部存储！！！

## 下载镜像

您需要先到各发行版介绍中找到“镜像下载链接”下载系统镜像，我们建议您选择最新，并且预装您所需要的桌面环境的版本。

???+ note "一些常见的发行版标签"
    - x86-64/amd64: 大多数PC（一般选这个）
    - arm64/aarch64/armv8l/armv8a: 树莓派、IoT等设备
    - desktop: 带桌面环境的系统（推荐）
    - server: 服务器用系统，无桌面环境

???+ note "一些桌面环境"
    - KDE (K Desktop Environment): 贴近Windows操作逻辑，有高度的自定义性与丰富主题
      ![KDE](https://fedoraproject.org/assets/images/kde-edition/background_plasma.png)
    - GNOME: 贴近macOS界面，优雅、简洁，有多样的扩展（可能需要安装某些扩展、软件包来获得较好的桌面体验）
      ![GNOME](https://fedoraproject.org/assets/images/workstation_framework.webp)
    - COSMIC: 拥有优秀的窗口管理机制，自定义性强，是下一代的前卫Wayland桌面环境
      ![COSMIC](https://fedoraproject.org/assets/images/spins/screenshot-cosmic.jpg)
    - Hyprland: 平铺窗口管理器，具有炫酷的视觉效果，并拥有Wayland的最新特性，不过配置复杂，并且只建议在Arch Linux上获得最佳体验
      ![Hyprland](https://hypr.land/ricing_competitions/1/flicko.webp)
    - Niri: 滚动窗口管理器，比Hyprland更适合生产环境与触控板逻辑，同样配置复杂，但发行版覆盖范围广
      ![Niri](https://www.phoronix.net/image.php?id=2026&image=niri_2604_2)

## 烧录镜像

在下载对应镜像后，您需要下载对应的烧录软件来将系统镜像烧录到U盘中。
???+ note "一些比较热门的烧录软件"
    - [Ventoy](https://www.ventoy.net/cn/download.html)（recommend）
    - [Rufus](https://rufus.ie/zh/)（recommend）
    - [balenaEtcher](https://etcher.balena.io/)
    - [Raspberry Pi Imager](https://www.raspberrypi.com/software/)

!!! warning "警告"
    在烧录前，请确保您的U盘中没有重要资料！U盘的所有文件将被清空且几乎不可逆！！！

---
好的，一切准备工作完成！打开下一章，开始踏入Linux吧！

