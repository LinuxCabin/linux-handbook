# Linux Mint

![Logo](https://www.linuxmint.com/web/img/logo.svg)

## 简介

Linux Mint 是公认对 Windows 迁移用户最友好的 Linux 发行版。它主要基于 Ubuntu 稳定版构建，但彻底摒弃了 Ubuntu 激进且饱受争议的 Snap 软件包机制，坚持传统的 APT 和 Flatpak 核心。它预装了极其精致、符合传统 Windows 操作习惯的 Cinnamon 桌面，并且默认不启用Wayland来保证兼容性，拥有出色的图形化驱动管理和开箱即用体验，省心、省力、极其稳定。

## 详细信息

 - 派系：Debian/Ubuntu系
 - 发行者：Linux Mint 团队
 - 官网：https://linuxmint.com/
 - 支持的系统架构：x86_64
 - 自由软件：是（部分自由）
 - 镜像下载地址：
    - TUNA: https://mirrors.tuna.tsinghua.edu.cn/linuxmint-cd/
    - USTC: https://mirrors.ustc.edu.cn/linuxmint-cd/
    - MirrorZ: https://mirrors.cernet.edu.cn/linuxmint-cd/
 - 包管理器：apt
 - 更新方式：版本
 - 自动换源：半自动
 - 图形安装界面：是
 - 换源教程：
    - TUNA: https://mirrors.tuna.tsinghua.edu.cn/help/linuxmint/
    - USTC: https://mirrors.ustc.edu.cn/help/linuxmint.html
    - MirrorZ: https://help.mirrors.cernet.edu.cn/linuxmint/

## 风味

### Ubuntu Base

 - Cinnamon Edition: 旗舰版本，视觉效果最现代，完美复刻传统 Windows 逻辑，系统功能和特效最丰富。
 - MATE Edition: 经典版本，基于传统的 MATE 桌面，更轻量更稳定，适合中低配电脑。
 - Xfce Edition: 极速版本，资源占用极低，极度稳定，是老旧硬件复活、充当轻量办公机的绝佳选择。

### Debian Base

 - LMDE (Linux Mint Debian Edition): 完全脱离 Ubuntu、直接基于 Debian Stable 构建的备用版本。软件略旧但稳定性极高，是官方为了防止 Ubuntu 生态发生巨变而准备的“方舟”系统。

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
