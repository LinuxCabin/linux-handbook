# 安装后必做

## 换源

与Windows不同，Linux采用包管理器统一管理系统的软件包，所以大部分软件需要通过包管理器进行安装。但是由于中国大陆的特殊网络环境，官方的软件仓库下载速率极其缓慢。

因此，在安装之后，请务必切换软件源到国内镜像，以保证软件下载与系统更新的速度。

???+ "提示"
    在换源之前，我们强烈建议您首先了解发行版对应包管理器的基本命令。您可以参照“概念-软件包”一节。

国内主要的开源软件镜像站有以下这些：

 - [TUNA（清华源）](https://mirrors.tuna.tsinghua.edu.cn/): 由清华大学TUNA协会维护，是国内最主流的软件镜像源，以极高的下载速度著称。
 - [USTC（中科大源）](https://mirrors.ustc.edu.cn/) : 由中国科学技术大学与中科大LUG服务器维护小组维护，镜像收录十分广泛，容纳了包括Rocky等（TUNA不愿加）的镜像。
 - [MirrorZ（校园网联合镜像站）](https://mirrors.cernet.edu.cn/): 由中国教育和科研计算机网网络中心（CERNET）提供服务，收录了各大高校所创立的开源镜像站，能够自动重定向至地理位置最近的镜像站。

简单来说，TUNA快，USTC广，MirrorZ兜底。您可以任意选择三者中的一个。

各个发行版的换源教程，我们已经整理到了对应发行版的选项卡下，您可以自行查阅。（若没有，您也可以登录镜像站官网进行查找。）

## Flatpak

Flatpak是新一代Linux软件管理工具。其采用沙箱式设计，使得软件能够兼容多数发行版。并且，基于Flatpak的Flathub是Linux上极其重要的应用商店，深度集成于KDE Discover, GNOME。

**对于用户软件，我们推荐您使用Flatpak进行安装。**

您可以通过包管理器安装Flatpak。同样的，Flathub也需要换源。

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

要解决这个问题也很简单，在终端中输入：`timedatectl set-local-rtc 1`即可。

!!! warning "已知问题"
    Linux下set-local-rtc设置后，会导致夏令时无法自动切换。而在Windows下启用RealTimeIsUniversal则不存在该问题。

    如果想要解决，请在Windows下以管理员权限启动PowerShell，并执行：`reg add "HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation" /v RealTimeIsUniversal /t REG_DWORD /d 1 /f`

    **本方案与以上方案选择一个即可，请不要两个同时操作。**

## 文件互通（双系统）

### Win -> Linux

若您的Linux使用ext文件系统，则Windows会由于不支持ext而无法访问Linux的文件。

您只需在Windows下载安装[Ext4Fsd](https://www.accum.se/~bosse/ext2fsd/0.71/Ext2Fsd-0.71-setup.exe)即可解决。

### Linux -> Win

若您在Linux下无法访问/读写Windows的NTFS文件系统，请您在Linux上通过包管理器安装`ntfs-3g`软件包。

???+ note "挂载NTFS的问题"
    若您在挂载NTFS分区时出现类似"bad superblock"等错误，有可能是因为您的NTFS文件系统存在错误。

    要解决该问题，请在Windows的命令提示符中运行`chkdsk X: /f`并**重启至少两次**进行修复。若依然失败，请运行`chkdsk X: /r`进行更为彻底的修复。

    **请将上图命令中的X:替换为自己的盘符。**