# Debian

![Debian](https://www.debian.org/logos/openlogo-100.png)

## 简介

这是一段发行版的简介，你可以写它的优点、特质，当然也可以写它的不足，请尽情发挥！但注意不要写得太长哦。

## 详细信息

 - 派系：Debian系
 - 发行者：Owner 
 - 官网：https://example.com
 - 支持的系统架构：x86_64/arm64/...
 - 自由软件：是/否
 - 镜像下载地址：
    - TUNA: https://mirrors.tuna.tsinghua.edu.cn/debian-cd/
    - USTC: https://mirrors.ustc.edu.cn/debian-cd/
    - MirrorZ: https://mirrors.cernet.edu.cn/debian-cd/
 - 包管理器：apt
 - 更新方式：版本
 - 自动换源：302
 - 图形安装界面：是
 - 换源教程：
    - TUNA: 
        - debian: https://mirrors.tuna.tsinghua.edu.cn/help/debian/
        - debian-security: https://mirrors.tuna.tsinghua.edu.cn/help/debian-security/
    - USTC:
        - debian: https://mirrors.ustc.edu.cn/help/debian.html
        - debian-security: https://mirrors.ustc.edu.cn/help/debian-security.html
    - MirrorZ:
        - debian: https://help.mirrors.cernet.edu.cn/debian/
        - debian-security: https://help.mirrors.cernet.edu.cn/debian-security/

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
