# 安装后必做

## 换源

与Windows不同，Linux采用包管理器统一管理系统的软件包，所以大部分软件需要通过包管理器进行安装。但是由于中国大陆的特殊网络环境，官方的软件仓库下载速率极其缓慢。

因此，在安装之后，请务必切换软件源到国内镜像，以保证软件下载与系统更新的速度。

???+ "提示"
    在换源之前，我们强烈建议您首先了解发行版对应包管理器的基本命令。您可以参照“[应用与工具](../applications/apps.md)”一节。

???+ "快捷脚本"
    您可以使用[LinuxMirrors项目](https://linuxmirrors.cn/)的换源脚本，更方便，快捷。


国内主要的开源软件镜像站有以下这些：

 - [TUNA（清华源）](https://mirrors.tuna.tsinghua.edu.cn/): 由清华大学TUNA协会维护，是国内最主流的软件镜像源，以极高的下载速度著称。
 - [USTC（中科大源）](https://mirrors.ustc.edu.cn/) : 由中国科学技术大学与中科大LUG服务器维护小组维护，镜像收录十分广泛，容纳了包括Rocky等（TUNA不愿加）的镜像。
 - [MirrorZ（校园网联合镜像站）](https://mirrors.cernet.edu.cn/): 由中国教育和科研计算机网网络中心（CERNET）提供服务，收录了各大高校所创立的开源镜像站，能够自动重定向至地理位置最近的镜像站。

简单来说，TUNA快，USTC广，MirrorZ兜底。您可以任意选择三者中的一个。

??? question "如何使用镜像站？"

    这里举Fedora作为例子，我们使用 [TUNA源](https://mirrors.tuna.tsinghua.edu.cn/)

    - **访问镜像站**
        首先打开镜像站, 也就是访问 => https://mirrors.tuna.tsinghua.edu.cn/

    - **搜索发行版**
        这个时候我们在搜索框里面输入 Fedora

        然后就会出现筛选结果， 这个时候我们不要直接点Fedora, 而是点旁边的那个 `?` (也就是tuna给的换源官方手册)

        ![TUNA搜索界面](../img/mirrors/pic1.png)

    - **命令替换**

        之后我们直接复制命令替换的那个内容

        ![命令替换](../img/mirrors/pic2.png)

    ???+ note "权限问题" 
        TUNA默认提供的是使用 root 进行操作的指令，如果直接输入，大概率会有 Permission denied 的报错。

        这时我们只需要在前面先加上一个 `sudo` (记得是 sudo 然后空一个再粘贴命令)就可以了， 当然T您也可以直接打开上面的“是否使用sudo的”开关，之后复制并执行命令。

        ![启动sudo](../img/mirrors/pic3.png)

    替换完成之后， 我们可以直接进行系统的**软件更新，见证魔法** => 我刚开始用的时候，也感觉直接更新所有软件是一个很酷的事情。

    ```bash
    sudo dnf update # 检查并更新
    ```


各个发行版的换源教程，我们已经整理到了对应发行版的选项卡下，您可以自行查阅。

## Flatpak

[Flatpak](../applications/apps.md#flatpak)是新一代Linux软件管理工具。其采用沙箱式设计，使得软件能够兼容多数发行版。并且，基于Flatpak的Flathub是Linux上极其重要的应用商店，深度集成于KDE Discover, GNOME。

**对于用户软件，我们推荐您使用[Flatpak](../applications/apps.md#flatpak)或[AppImage](../applications/apps.md#appimage)进行安装。**

您可以通过包管理器或者桌面环境自带的应用商店安装Flatpak。同样的，Flathub也需要换源。

???+ info "Flathub缓存"
    国内目前仅USTC与SJTUG有Flathub缓存。

     - USTC: https://mirrors.ustc.edu.cn/help/flathub.html
    
     - MirrorZ: https://help.mirrors.cernet.edu.cn/flathub

!!! warning "已知问题"
    Flatpak与宿主机互通目前不够完善，例如QQ的剪贴板问题，拖拽文件识别等。

    要解决这一问题，请使用Flatpak安装Flatseal后，找到对应软件，关闭“回退到X11”，并且打开允许访问全部文件。
    
    不过尽管如此，大多数软件的表现均与包管理器版本无较大差别。

## 输入法

由于Linux的输入法配置略有玄学，故将本章独立出来。见[“输入法”章节](./input-method.md)。

## 时间制（双系统）

如果您使用的是Windows与Linux双系统，您会发现在从Linux切换至Windows时，时间会发生错位。

这是由于Windows采用的时间制是本地时间，也就是BIOS设置中的时间，而Linux默认使用UTC时间（格林尼治标准时间），由于中国属于GMT+8时区，每次切换系统都会导致8个小时的差异。

要解决这个问题也很简单，请在Windows下以管理员权限启动PowerShell，并执行：`reg add "HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation" /v 。

!!! warning "已知问题"
    您也可以在Linux终端中输入：`timedatectl set-local-rtc 1`来解决。

    但是，Linux下set-local-rtc设置后，会导致夏令时无法自动切换，并且可能出现其他问题。而在Windows下启用RealTimeIsUniversal则不存在该问题。

    **本方案与以上方案选择一个即可，请不要两个同时操作。**

## 文件互通（双系统）

### Win -> Linux

若您的Linux使用ext[文件系统](./before-installing.md#_7)，则Windows会由于不支持ext而无法访问Linux的文件。

您只需在Windows下载安装[Ext4Fsd](https://www.accum.se/~bosse/ext2fsd/0.71/Ext2Fsd-0.71-setup.exe)即可解决。

### Linux -> Win

若您在Linux下无法访问/读写Windows的NTFS文件系统，请您在Linux上通过包管理器安装`ntfs-3g`软件包。

???+ note "挂载NTFS的问题"
    若您在挂载NTFS分区时出现类似"bad superblock"等错误，有可能是因为您的NTFS文件系统存在错误。

    要解决该问题，请在Windows的命令提示符中运行`chkdsk X: /f`并**重启至少两次**进行修复。若依然失败，请运行`chkdsk X: /r`进行更为彻底的修复。

    **请将上图命令中的X:替换为自己的盘符。**

## 杂项

### 反向滚动

若您发现您的鼠标或触摸板的滚动方向与惯用方向相反，您可以在对应桌面的设置中找到“反向滚动（或自然滚动）”。通过调整该选项即可改变滚动方向。