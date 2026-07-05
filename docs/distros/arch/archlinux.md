# Arch Linux

![Logo](https://upload.wikimedia.org/wikipedia/commons/a/a5/Archlinux-logo.svg)

## 简介

Arch Linux 是 Linux 社区中最受欢迎的独立滚动更新（Rolling Release）发行版之一。它秉承 KISS（Keep It Simple, Stupid）哲学，不预装繁杂的软件和默认桌面，将系统的完全掌控权交还给用户。虽然其全命令行安装的方式对新手门槛较高，但它拥有开源界最强大的知识库 Arch Wiki、极度丰富的 AUR 软件仓库以及“一次安装，终身更新”的特性，是极客和深度 Linux 爱好者的不二之选。

## 详细信息

 - 派系：Arch系
 - 发行者：Arch Linux Project / 社区维护
 - 官网：https://archlinux.org/
 - 支持的系统架构：x86_64 v1（官方官方仅支持x86_64，ARM架构由社区项目 Arch Linux ARM 维护）
 - 自由软件：是（非全自由）
 - 镜像下载地址：
 - - TUNA: https://mirrors.tuna.tsinghua.edu.cn/archlinux/iso/
 - - USTC: https://mirrors.ustc.edu.cn/archlinux/iso/
 - - CERNET: https://mirrors.cernet.edu.cn/archlinux/iso/
 - 包管理器：pacman
   > 注意！Arch 严禁“部分升级”（Partial Upgrade）。请勿在未同步升级全系统的情况下单独安装或更新某个软件，否则极易导致系统依赖断裂造成所谓的 **“滚挂”** ！此外，推荐配置 **AUR (Arch User Repository)** 并配合 yay 或 paru 等助手使用。
 - 更新方式：传统
 - 换源教程：
 - - TUNA: https://mirrors.tuna.tsinghua.edu.cn/help/archlinux/
 - - USTC: https://mirrors.ustc.edu.cn/help/archlinux.html
 - - CERNET: https://help.mirrors.cernet.edu.cn/archlinux/

## 风味

### Community Edition
 - EndeavourOS: 延续 Arch 原生血统的衍生版，提供图形化安装界面和优化的终端工具，被誉为“带图形界面的 Arch”。
 - Manjaro: 基于 Arch 生态但拥有独立筛选软件库的发行版，主打稳定、多核兼容与新手友好，开箱即用。
 - Garuda Linux: 专注于游戏性能和炫酷外观（默认酷炫的机械风/RGB风格桌面）的衍生版，默认使用 Btrfs 文件系统。
 - Artix Linux: 移除 systemd 替换为 OpenRC、runit 或 s6 等传统初始化系统的硬核 Arch 衍生版。

### Server

- 不推荐，但确实有一部分服务器运行于Arch上。

### Core

- ArchLinux本身为极简发行版。