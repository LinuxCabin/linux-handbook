# Gentoo Linux

![Markdown Logo](https://www.gentoo.org/assets/img/logo/gentoo-logo.svg){width=200px}

## 简介

Gentoo Linux 是一个高度可定制的，基于源码的操作系统。Gentoo 在本地主机上从源码编译软件，编译器直接为本机架构优化，其特色的 USE 系统允许在编译时关闭或打开软件的功能，SLOT 系统允许不同大版本或不同变体的软件包在同一台主机上运行。不过 Gentoo 名声在外的还有漫长的编译时间，陡峭的学习曲线，困难的安装与配置。

如果您对 Linux 已有所熟悉，想选择一个自定义程度高，有优秀的包和依赖管理软件的 Linux 发行版，并且愿意付出一些时间的话，可以试试 Gentoo Linux。

???+ quote "名人名言"
     time emerge -uDN @world
     
     real    12h34m6.767s

     <p align="right">—— /dev/pts/0</p>

## 详细信息

- 派系：Gentoo系
- 发行者：Gentoo Linux 计划
- 官网：https://www.gentoo.org/
- 支持的系统架构：x86_64(amd64)/ia64/x86(i486,i686)/arm64/arm32(arm)/ppc64/ppc32(ppc)/risc-v/mips/alpha/hppa/sparc/s390/m68k ...
- 自由软件：是（可选择许可证类型）
- 初始化进程  (init):
    - ``OpenRC``        ( ``sysvinit`` / ``openrc-init`` )
    - ``systemd``
???+ note "有关初始化进程（init）的选择"
     Gentoo Linux 官方只支持 ``OpenRC`` 和 ``systemd`` ，但是完全可以在 Gentoo Linux 上配置 ``runit``, ``dinit``, ``s6`` 等初始化进程，只不过可能需要自己写配置。
- Stage 3 下载地址：
    - TUNA: https://mirror.tuna.tsinghua.edu.cn/gentoo/releases/amd64/autobuilds/current-stage3-amd64-desktop-openrc/
    - USTC: https://mirrors.ustc.edu.cn/gentoo/releases/amd64/autobuilds/current-stage3-amd64-desktop-openrc/
    - MirrorZ: https://mirrors.cernet.edu.cn/gentoo/releases/amd64/autobuilds/current-stage3-amd64-desktop-openrc/
- Live ISO 下载地址：
    - TUNA: https://mirrors.tuna.tsinghua.edu.cn/gentoo/releases/amd64/autobuilds/current-livegui-amd64/
    - USTC: https://mirrors.ustc.edu.cn/gentoo/releases/amd64/autobuilds/current-livegui-amd64/
    - MirrorZ: https://mirrors.cernet.edu.cn/gentoo/releases/amd64/autobuilds/current-livegui-amd64/
- 包管理器：Portage
- 更新方式：滚动
???+ note "有关“部分升级”"
     不像其他滚动发行版，Gentoo Linux 允许“部分升级”（Partial Upgrade)。Portage 使用单软件包的依赖关系图，SLOT 系统 和 preserved-rebuild 功能来避免软件包冲突。这当然不是说一直处在“部分升级”的状态是个好主意，还是建议有空完全升级。

- 图形安装界面：否
- 换源教程:
    - 软件源：
        - TUNA: https://mirrors.tuna.tsinghua.edu.cn/help/gentoo
        - USTC: https://mirrors.ustc.edu.cn/help/gentoo.html
        - MirrorZ: https://help.mirrors.cernet.edu.cn/gentoo
    - Ebuild：
        - TUNA: https://mirrors.tuna.tsinghua.edu.cn/help/gentoo-portage
        - USTC: https://mirrors.ustc.edu.cn/help/gentoo-portage.html
        - MirrorZ: https://help.mirrors.cernet.edu.cn/gentoo-portage

## 注意事项

### gentoo-zh Overlay
![Markdown Logo](https://gentoozh.org/img/logo.webp)

gentoo-zh 由 Gentoo 中文社区维护，收录大量中文用户常用的软件包。

- Overlay 使用教程：https://gentoozh.org/overlay/

有关 Gentoo 中文社区：https://gentoozh.org/