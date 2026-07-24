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
    如果您初入Linux，我们建议您选择Debian系或红帽系发行版试水。**我们不建议任何新手用户直接使用Arch Linux！！！**

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
    <td><a href=/distros/debian/debian>Debian Sid</a> / EndeavourOS</td>
    <td><a href=/distros/debian/debian>Debian Testing</a> / <a href=/distros/rhel/fedora>Fedora</a> / Manjaro / openSUSE Slowroll</td>
    <td>CentOS Stream</td>
    <td><a href=/distros/debian/debian>Debian Stable</a> / <a href=/distros/rhel/rocky>Rocky Linux</a>  / <a href=/distros/rhel/almalinux>Alma Linux</a>  / openSUSE Leap</td>
  </tr>
  <tr>
    <td>简单</td>
    <td></td>
    <td>openSUSE Aeon / <a href=/distros/rhel/fedora>Fedora Silverblue</a> / <a href=/distros/debian/deepin>Deepin</a></td>
    <td><a href=/distros/debian/ubuntu>Ubuntu Release</a>  / <a href=/distros/debian/linuxmint>Linux Mint Release</a></td>
    <td><a href=/distros/debian/ubuntu>Ubuntu LTS</a> /KDE neon / LMDE</td>
  </tr>
</table>


或者，你也可以试试[Distrochooser（英文）](https://distrochooser.de/)或是我们制作的[趣味测试](https://lati-fun.pages.dev/)，虽然只是个demo版本。 （部署于Cloudflare Pages，访问可能缓慢）


???+ note "发行版=外观？"

    请注意：**如果您的想法是“这个发行版很漂亮，我选这个”**，那么您可能听信了某些传教士的“一面之词”。

    **桌面外观不由发行版本身决定，而是由您所安装的桌面环境决定。**

    我用某个发行版并不代表我必须使用某个桌面环境。与Windows不同，Linux的组件之间具有极其高的耦合度！您完全可以选用更加简单的发行版来体验您心仪的桌面环境。

    在继续之前，我们建议您阅读并**分辨**以下概念章节：

    - 发行版
    - 桌面环境
    - 窗口管理器
    - 平铺/滚动式桌面


## 调配分区

我们建议您通过专业的分区工具（如[DiskGenius](https://www.diskgenius.cn/)和Windows的磁盘管理单元）进行分区。您需要用分区工具在电脑硬盘上腾出60GB以上（建议值）的**空闲**空间。我们不建议直接在DiskGenius等WIndows下软件创建分区，而是在安装时由安装程序进行创建，这可以保证系统的稳定性和分区一致性。

我们建议您在操作完分区后用其他设备记录您磁盘的分区图示/顺序，这在安装系统时非常有用。

!!! warning "警告"
    请不要将Linux安装到任何NTFS文件系统的分区，这将导致你的系统完全无法启动！Linux对NTFS的支持尚不完善！我们不建议使用Linux来调整NTFS分区！！！
    
    任何分区操作都存在风险，请您在操作之前确保已经备份所用磁盘中的重要数据到可靠的外部存储！！！

## 下载镜像

您需要先到各发行版的官网找到下载按钮，并下载对应系统镜像，但由于中国大陆网络环境，我们并不推荐直接到官网下载。

或者，您可以通过开源镜像站进行下载。您可以在“发行版”章节对应选项卡中找到“镜像下载链接”下载系统镜像。

我们建议您选择最新，并且预装您所需要的桌面环境的版本。

???+ note "一些常见的发行版标签"
    - x86-64/amd64: 大多数PC（一般选这个）
    - arm64/aarch64/armv8l/armv8a: 树莓派、IoT等设备
    - desktop: 带桌面环境的系统（推荐）
    - server: 服务器用系统，无桌面环境

???+ note "一些桌面环境/窗口管理器"
    - [KDE](../desktop/de/kde.md) (K Desktop Environment): 贴近Windows操作逻辑，有高度的自定义性与丰富主题
      ![KDE](https://fedoraproject.org/assets/images/kde-edition/background_plasma.png)
    - [GNOME](../desktop/de/gnome.md): 贴近macOS界面，优雅、简洁，有多样的扩展（可能需要安装某些扩展、软件包来获得较好的桌面体验）
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
    - [Ventoy](https://www.ventoy.net/cn/download.html)（推荐）
    ??? note "Ventoy使用指南"
        在开始本教程之前，请准备一个**足够大**的 U 盘。足够大意味着**可以保存您要使用的的全部系统镜像。**请注意，**这将清除 U 盘上的所有数据**。

        ## 第一步：下载 Ventoy

        打开[这个网站](https://ventoy.net)，并点击上方的 **Downloads**。

        ![图 1](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20Ventoy%20%E5%88%9B%E5%BB%BA%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%90%AF%E5%8A%A8%E7%9B%98/pic01.png)

        选择要下载的版本。如果您正在使用 GNU/Linux，点击 linux 结尾的文件名。如果您正在使用 Microsoft Windows，点击 windows 结尾的文件名。这与您要安装的发行版本身无关，下载哪个版本取决于您现在正在使用的系统，

        ![图 2](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20Ventoy%20%E5%88%9B%E5%BB%BA%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%90%AF%E5%8A%A8%E7%9B%98/pic02.png)

        跳转到 SourceForge 之后再次选择要下载的版本。

        ![图 3](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20Ventoy%20%E5%88%9B%E5%BB%BA%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%90%AF%E5%8A%A8%E7%9B%98/pic03.png)

        等待下载完成。

        ## 第二步：打开 Ventoy

        将要用于制作启动盘的 U 盘插入电脑。将下载好的压缩包解压，打开目录。

        如果您现在使用的是 GNU/Linux，请双击运行 **VentoyGUI.x86_64**。如果是 Microsoft Windows，请运行 **Ventoy2Disk.exe**。本人使用的是 GNU/Linux，这里选择 VentoyGUI.x86_64。

        ![图 4](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20Ventoy%20%E5%88%9B%E5%BB%BA%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%90%AF%E5%8A%A8%E7%9B%98/pic04.png)

        如果要求输入密码，请输入**用户的登录密码**。

        ![图 5](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20Ventoy%20%E5%88%9B%E5%BB%BA%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%90%AF%E5%8A%A8%E7%9B%98/pic05.png)

        ## 第三步：制作启动盘

        到了最关键的一步，**请务必确认是否选择了正确的 U 盘，操作将会清除 U 盘所有数据。**为了保险起见，我的建议是**确保列表中只有一个 U 盘，也就是您要操作的那个 U 盘。**

        ![图 6](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20Ventoy%20%E5%88%9B%E5%BB%BA%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%90%AF%E5%8A%A8%E7%9B%98/pic06.png)

        选择了正确的 U 盘后，点击 **Install** 继续。

        ![图 7](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20Ventoy%20%E5%88%9B%E5%BB%BA%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%90%AF%E5%8A%A8%E7%9B%98/pic07.png)

        完成两次确认。**这将清除所有数据。**

        ![图 8](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20Ventoy%20%E5%88%9B%E5%BB%BA%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%90%AF%E5%8A%A8%E7%9B%98/pic08.png)

        ![图 9](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20Ventoy%20%E5%88%9B%E5%BB%BA%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%90%AF%E5%8A%A8%E7%9B%98/pic09.png)

        Ventoy 将自动制作启动盘。

        ![图 10](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20Ventoy%20%E5%88%9B%E5%BB%BA%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%90%AF%E5%8A%A8%E7%9B%98/pic10.png)

        完成之后将看到下面的窗口，关闭窗口即可，拔出 U 盘。

        ![图 11](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20Ventoy%20%E5%88%9B%E5%BB%BA%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%90%AF%E5%8A%A8%E7%9B%98/pic11.png)

        ## 第四步：将镜像复制到启动盘

        重新插入 U 盘。您应该可以看到一个名字叫做 **Ventoy** 的可移动磁盘。

        将下载好的镜像文件（文件名应该以 iso 结尾）复制到这个可移动磁盘中。复制完之后不要忘记**弹出**再拔掉 U 盘。

        ## 第五步：从启动盘启动

        参考 [GNU/Linux 综合指南](https://freeswzhcn.codeberg.page/site/posts/GNU-Linux%20%E7%BB%BC%E5%90%88%E6%8C%87%E5%8D%97%E5%AF%BC%E8%88%AA%E9%A1%B5/) 中从启动盘启动的教程。

        应该看到这个界面。选择要启动的镜像启动即可。

        ![图 12](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20Ventoy%20%E5%88%9B%E5%BB%BA%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%90%AF%E5%8A%A8%E7%9B%98/pic12.png)

        （内容来自[使用 Ventoy 创建多功能启动盘](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20Ventoy%20%E5%88%9B%E5%BB%BA%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%90%AF%E5%8A%A8%E7%9B%98/)，本部分内容使用CC BY-SA 4.0协议分发）

    - [Rufus](https://rufus.ie/zh/)（推荐）
    - [balenaEtcher](https://etcher.balena.io/)
    ??? note "balenaEtcher使用指南"
        本教程将教大家使用 balenaEtcher 制作 GNU/Linux 启动盘。
        
        ## 第一步：下载 balenaEtcher

        打开 balenaEtcher 的 [GitHub 页面](https://github.com/balena-io/etcher)，打开 Releases 中的 Release。

        ![图 1](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20balenaEtcher%20%E5%88%B6%E4%BD%9C%20GNU-Linux%20%E5%90%AF%E5%8A%A8%E7%9B%98/pic01.png)

        如果您当前使用的是 Microsoft Windows，下载包含 win32 字样的压缩包。如果您当前使用的是 GNU/Linux，下载包含 linux 字样的压缩包。

        ![图 2](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20balenaEtcher%20%E5%88%B6%E4%BD%9C%20GNU-Linux%20%E5%90%AF%E5%8A%A8%E7%9B%98/pic02.png)

        ## 第二步：制作启动盘

        压缩包解压。插入用于制作启动盘的 U 盘。Windows 双击运行 balenaEtcher.exe。GNU/Linux 双击运行 balena-etcher。

        点击 Change。

        ![图 3](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20balenaEtcher%20%E5%88%B6%E4%BD%9C%20GNU-Linux%20%E5%90%AF%E5%8A%A8%E7%9B%98/pic03.png)

        在这里**务必选择正确的 U 盘。这将清除全部数据。**然后点击 Select。

        ![图 4](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20balenaEtcher%20%E5%88%B6%E4%BD%9C%20GNU-Linux%20%E5%90%AF%E5%8A%A8%E7%9B%98/pic04.png)

        点击 Flash from file。

        ![图 5](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20balenaEtcher%20%E5%88%B6%E4%BD%9C%20GNU-Linux%20%E5%90%AF%E5%8A%A8%E7%9B%98/pic05.png)

        选择要写入的镜像文件（格式为 iso）。

        ![图 6](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20balenaEtcher%20%E5%88%B6%E4%BD%9C%20GNU-Linux%20%E5%90%AF%E5%8A%A8%E7%9B%98/pic06.png)

        点击 **Flash!**。请三思，**这将清除全部数据。**

        ![图 7](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20balenaEtcher%20%E5%88%B6%E4%BD%9C%20GNU-Linux%20%E5%90%AF%E5%8A%A8%E7%9B%98/pic07.png)

        如果要求输入密码，请输入**用户的登录密码**。

        ![图 8](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20balenaEtcher%20%E5%88%B6%E4%BD%9C%20GNU-Linux%20%E5%90%AF%E5%8A%A8%E7%9B%98/pic08.png)

        等待写入完成。

        ![图 9](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20balenaEtcher%20%E5%88%B6%E4%BD%9C%20GNU-Linux%20%E5%90%AF%E5%8A%A8%E7%9B%98/pic09.png)

        看到这个页面后，拔出 U 盘。您现在可以从这个 U 盘启动了。

        ![图 10](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20balenaEtcher%20%E5%88%B6%E4%BD%9C%20GNU-Linux%20%E5%90%AF%E5%8A%A8%E7%9B%98/pic10.png)

        （内容来自[使用 balenaEtcher 制作 GNU/Linux 启动盘](https://freeswzhcn.codeberg.page/site/posts/%E4%BD%BF%E7%94%A8%20balenaEtcher%20%E5%88%B6%E4%BD%9C%20GNU-Linux%20%E5%90%AF%E5%8A%A8%E7%9B%98/)，本部分内容使用CC BY-SA 4.0协议分发）

    - [Raspberry Pi Imager](https://www.raspberrypi.com/software/)

!!! warning "警告"
    在烧录前，请确保您的U盘中没有重要资料！U盘的所有文件将被清空且几乎不可逆！！！

---
好的，一切准备工作完成！打开下一章，开始踏入Linux吧！

