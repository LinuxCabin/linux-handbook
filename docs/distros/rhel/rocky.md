# Rocky Linux

![Logo](https://rockylinux.org/favicon.png)

## 简介

Rocky Linux是RHEL的下游版本。在RedHat宣布停止公开RHEL源代码后，Rocky Linux通过特殊渠道保证了社区衍生RHEL的进一步发展。它主打极端的稳定性、可预测的长期支持（通常长达 10 年）和企业级安全。由于软件包版本相对保守，且默认缺少商业多媒体解码器、日常桌面软件，导致桌面开箱即用体验对新手而言折腾成本较高，但是服务器、科学计算和高稳定性工作站方面的首选。

## 详细信息

 - 派系：红帽系
 - 发行者：Rocky Enterprise Software Foundation
 - 官网：https://rockylinux.org/zh-CN
 - 支持的系统架构：x86_64/arm64/ppc64le/s390x
 - 自由软件：是（部分自由）
 - 镜像下载地址：
 - - TUNA: 无
 - - USTC: https://mirrors.ustc.edu.cn/rocky/
 - - MirrorZ: https://mirrors.cernet.edu.cn/rocky/
 - 包管理器：dnf
 - 更新方式：传统
 - 换源教程：
 - - TUNA: 无
 - - USTC: https://mirrors.ustc.edu.cn/help/rocky.html
 - - MirrorZ: https://help.mirrors.cernet.edu.cn/rocky/

## 注意事项

### Rpm Fusion

红帽系发行版由于版权限制，无法内置H264/H265编解码器，因此需要手动添加源来安装。

???+ info "镜像源帮助"
     - TUNA: https://mirrors.tuna.tsinghua.edu.cn/help/rpmfusion/
     - USTC: https://mirrors.ustc.edu.cn/help/rpmfusion.html
     - MirrorZ: https://help.mirrors.cernet.edu.cn/rpmfusion/

在添加源后，请在终端运行`sudo dnf group install Multimedia`来安装编解码器。

### EPEL (Extra Packages for Enterprise Linux)

EPEL为企业Linux提供服务，内置了部分官方软件源没有内置的软件包。如果您发现某些软件包没有找到，您可以通过添加EPEL来尝试。

???+ info "镜像源帮助"
     - TUNA: https://mirrors.tuna.tsinghua.edu.cn/help/epel/
     - USTC: https://mirrors.ustc.edu.cn/help/epel.html
     - MirrorZ: https://help.mirrors.cernet.edu.cn/epel/

