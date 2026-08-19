# Ubuntu

![Logo](https://assets.ubuntu.com/v1/8114528b-picto-ubuntu-orange.png)

## 简介

Ubuntu是当今最受认可的Linux发行版，也是中国国家操作系统基准架构。它用户支持广泛，兼容性强，并且有优秀的开箱即用体验。不过近年来的商业化操作令Linux社区对它嗤之以鼻。

???+ quote "名人名言"
    Ubuntu very much wanted to be like a consumer oriented thing. And in the process, when I tried it many, many years ago, they literally made it hard for me to upgrade the kernel because that was not their target audience.

    *Ubuntu就很想做成面向消费者的系统。结果我很多很多年前试的时候，他们把升级内核搞得非常麻烦，因为我们根本不是他们针对的用户。*

    <p align="right">——Linus Torvalds</p>

## 详细信息

 - 派系：Debian系
 - 发行者：Canonical
 - 官网：https://cn.ubuntu.com/
 - 支持的系统架构：x86_64/arm64
 - 自由软件：是（部分自由）
 - 镜像下载地址：
    - TUNA: https://mirrors.tuna.tsinghua.edu.cn/ubuntu-cdimage/
    - USTC: https://mirrors.ustc.edu.cn/ubuntu-cdimage/
    - MirrorZ: https://mirrors.cernet.edu.cn/ubuntu-cdimage/
 - 包管理器：[apt](../../applications/apps.md#apt-debian)
!!! warning "警告"
    注意！使用apt安装部分软件时可能[被Snap劫持](https://www.zhihu.com/question/47659130)！
 - 更新方式：版本
 - 自动换源：半自动
 - 图形安装界面：是
 - 换源教程：
    - TUNA: https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu-ports/
    - USTC: https://mirrors.ustc.edu.cn/help/ubuntu-ports.html
    - MirrorZ: https://help.mirrors.cernet.edu.cn/ubuntu-ports/

## 风味

### Desktop
 - Edubuntu: 教育
 - Kubuntu: 预装KDE桌面
 - Lubuntu: 预装LXQt桌面
 - Ubuntu Budgie: 预装Budgie桌面
 - Ubuntu Cinnamon: 预装Cinnamon桌面
 - Ubuntu Kylin（优麒麟）: 中国特供版，预装UKUI桌面
 - Ubuntu MATE: 预装MATE桌面
 - Ubuntu Studio: 内容创作
 - Ubuntu Unity: 预装Unity桌面
 - Xubuntu: 预装Xfce桌面

### Server
 - Ubuntu Server: 服务器用系统

### Core
 - Ubuntu Core: 不可变系统，适合IoT设备

## 注意事项

### Debian CN

[Debian 中文社区](https://debiancn.org/)提供了一系列软件，可作为对Debian官方仓库的一个补充，其目的之一是改进Debian中文用户在Debian系统上的使用体验。

???+ note "安装与换源教程"
    Debian CN所提供的安装教程位于Github。为照顾国内用户，我们将其README.md拷贝并以Markdown格式化后展示于下方。

    ??? info "安装教程"

        要开始使用社区软件源，请遵照以下步骤进行操作：

        #### 启用社区源的命令

        ```bash
        sudo rm -fv /etc/apt/sources.list.d/debiancn.list; # 移除旧格式 sources.list 文件
        echo 'Enabled: yes
        Types: deb
        URIs: http://repo.debiancn.org/
        Suites: bookworm
        Components: main
        Signed-By: /usr/share/keyrings/debiancn-keyring.gpg
        ' | sudo tee /etc/apt/sources.list.d/debiancn.sources
        wget https://repo.debiancn.org/pool/main/d/debiancn-keyring/debiancn-keyring_0~20250427_all.deb -O /tmp/debiancn-keyring.deb;
        sudo apt install /tmp/debiancn-keyring.deb;
        sudo apt update;
        rm /tmp/debiancn-keyring.deb;
        ```
        **注意：** 以上命令适合 ``bookworm`` 用户。您可以自行替换 ``bookworm`` 为您使用的发行代号。目前社区源可以使用以下代号：

        - ``bullseye`` 
        - ``bookworm``
        - ``trixie``

        目前暂无专用于 ``testing`` 和 ``sid`` 的仓库。

        #### 彻底移除社区软件源

        如果您需要彻底移除社区软件源，请按以下步骤操作：

        ```bash
        sudo apt purge debiancn-keyring;
        sudo rm -fv /etc/apt/sources.list.d/debiancn.sources;
        sudo rm -fv /etc/apt/sources.list.d/debiancn.list;
        sudo apt update;
        ```

    若要换源，您只需将以上命令中的`http://repo.debiancn.org/`替换为以下任意一个镜像源即可。

     - TUNA: 无
     - USTC: https://mirrors.ustc.edu.cn/debiancn/
     - MirrorZ: https://mirrors.cernet.edu.cn/debiancn/

### 移除Snap

Snap是Canonical推出的Linux通用包管理工具。与Flatpak相同，采用沙箱化设计来保证软件极其依赖的正常运行。

不过，由于Canonical的商业操作，使用`apt`安装部分软件会被Snap劫持，同时由于Snap本身的性能优化不足，因而其被部分社区用户唾弃，Linux Mint也剔除了Snap。

Snap的移除步骤十分繁琐。首先，你必须按照顺序（先应用，后依赖）卸载所有Snap应用:
```bash
snap list # 列出Snap应用
sudo snap remove --purge firefox #逐个卸载
...
sudo snap remove --purge core20 core24
```

之后，卸载Snapd并清除残余目录:
```bash
sudo apt purge snapd
sudo apt autoremove
sudo rm -rf ~/snap /var/snap /var/lib/snapd /var/cache/snapd /usr/lib/snapd /snap
# 若部分目录不存在，删掉即可
```

最后还需要阻止其重装。您需要编辑`/etc/apt/preferences.d/nosnap.pref`，并写入:
```bash
Package: snapd
Pin: release a=*
Pin-Priority: -10
```
或者运行`sudo apt-mark hold snapd`。

最后，更新软件包列表: `sudo apt update`

**请注意，经过系统大版本更新等操作，Snap仍然有恢复的可能。**