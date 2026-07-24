# Debian

![Debian](https://www.debian.org/logos/openlogo-100.png)

## 简介

Debian是一个由全球志愿者社区维护的自由开源操作系统。它以其稳定性和严格的自由软件准则而闻名，是Ubuntu等众多发行版的基石。

## 详细信息

 - 派系：Debian系
 - 发行者：Debian计划
 - 官网：https://www.debian.org/
 - 支持的系统架构：x86_64
 - 自由软件：是/否
 - 镜像下载地址：
    - TUNA: https://mirrors.tuna.tsinghua.edu.cn/debian-cd/
    - USTC: https://mirrors.ustc.edu.cn/debian-cd/
    - MirrorZ: https://mirrors.cernet.edu.cn/debian-cd/
 - 包管理器：apt
 - 更新方式：版本/滚动
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

## 风味

Debian官方维护三个并行的发行版本。

- Debian Stable（稳定版）: 最稳定，经过测试，推荐普通用户使用。
- Debian Testing（测试版）: 下一个 Stable 版本的开发中状态。
- Debian Sid（不稳定版）: 滚动更新，作为Debian的日常开发阵地。

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
