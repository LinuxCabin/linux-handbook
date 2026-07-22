# NixOS

![Logo](https://brand.nixos.org/logos/nixos-logo-default-gradient-black-regular-horizontal-recommended.svg)

## 简介

NixOS是在Nix基础上，将系统层面进一步原子化所产生的极客系统。它通过编辑配置文件来修改系统设置（声明式），具有不可变性，并且能够规避依赖冲突等问题。

## 详细信息

 - 派系：其他系
 - 发行者：NixOS Foundation
 - 官网：https://nixos.org/
 - 支持的系统架构：x86_64/arm64
 - 自由软件：是（部分自由）
 - 镜像下载地址：
    - TUNA: https://mirrors.tuna.tsinghua.edu.cn/nixos-images/
    - USTC: 无
    - MirrorZ: https://mirrors.cernet.edu.cn/nixos-images/
 - 包管理器：nix
 - 更新方式：Nix
 - 自动换源：否
 - 图形安装界面：是
 - 换源教程：
    - TUNA: https://mirrors.tuna.tsinghua.edu.cn/help/nix-channels/
    - USTC: https://mirrors.ustc.edu.cn/help/nix-channels.html
    - MirrorZ: https://mirrors.cernet.edu.cn/nix-channels/

## 注意事项

### LiveCD Mirrors

NixOS LiveCD的安装程序不提供镜像源选择，并且由于LiveCD的只读特性也无法修改镜像源。所以在安装NixOS时，若您不具备相应网络条件，您需要通过手动方式来安装系统。

我们建议您参考[该安装教程](https://www.bilibili.com/video/BV1KfiuBhE6i/)以及[NixOS CN](https://nixos-cn.org/tutorials/installation/DualBoot.html)，并在执行`sudo nixos-install`时，将原指令替换为`sudo nixos-install --option substituters 镜像地址`。

???+ info "可用的镜像地址"
     - TUNA: https://mirrors.tuna.tsinghua.edu.cn/nix-channels/store
     - USTC: https://mirrors.ustc.edu.cn/nix-channels/store
     - MirrorZ: https://mirrors.cernet.edu.cn/nix-channels/store
