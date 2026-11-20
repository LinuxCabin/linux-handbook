# NixOS

![Logo](https://brand.nixos.org/logos/nixos-logo-default-gradient-black-regular-horizontal-recommended.svg){width=300}

## 简介

NixOS 是在 Nix 基础上构建的极客发行版：它通过编辑配置文件声明式地定义整个系统，因此可以原子回滚、结果可复现，并且能规避依赖冲突等问题。

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

NixOS LiveCD的安装程序不提供镜像源选择，并且由于LiveCD的只读特性也无法修改镜像源。所以在安装NixOS时，若您不具备相应网络条件，您需要手动指定镜像源来完成安装。

我们建议您参考[该安装教程](https://www.bilibili.com/video/BV1KfiuBhE6i/)以及[NixOS CN](https://nixos-cn.org/tutorials/installation/DualBoot.html)，并在执行`sudo nixos-install`时，将原指令替换为`sudo nixos-install --option substituters 镜像地址`。

???+ info "可用的镜像地址"
     - TUNA: https://mirrors.tuna.tsinghua.edu.cn/nix-channels/store
     - USTC: https://mirrors.ustc.edu.cn/nix-channels/store
     - MirrorZ: https://mirrors.cernet.edu.cn/nix-channels/store

或者，您也可以采用[NixOS-LiveCD-CN（Github）](http://github.com/zjm54321/NixOS-LiveCD-CN)项目的镜像来加速安装。其内置了镜像源，对国内用户较为友好。