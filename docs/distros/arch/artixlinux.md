# Artix Linux

## 简介

Artix Linux 是一个基于 Arch Linux 的独立硬核发行版。它最大的特点是**彻底移除了 systemd**，并允许用户在安装时自由选择 OpenRC、runit、s6 或 dinit 等传统、轻量且高效的初始化系统（Init System）。它完美继承了 Arch 的滚动更新特性和 AUR 生态，非常适合反对 systemd 垄断、追求极简和系统底层绝对掌控力的硬核玩家。

## 详细信息
 - 派系：Arch系
 - 发行者：Artix Linux 团队
 - 官网：https://artixlinux.org/
 - 支持的系统架构：x86_64
 - 自由软件：是
 - 镜像下载地址：
 - - TUNA: https://mirrors.tuna.tsinghua.edu.cn/artixlinux/
 - - USTC: https://mirrors.ustc.edu.cn/artixlinux/
 - - CERNET: https://mirrors.cernet.edu.cn/artixlinux/
 - 包管理器：pacman
 - 更新方式：传统
 - 换源教程：
 - - TUNA: 无
 - - USTC: 无
 - - CERNET: 无

## 风味

### 初始化系统分类 (Init Editions)

 - OpenRC: 使用 Gentoo 著名的 OpenRC 作为初始化系统，在 Artix 中最为稳健和流行。
 - runit: 使用 Void Linux 核心的 runit，启动速度极快，服务配置极其简单明了。
 - s6 / dinit / suite66: 适合有特定需求的极客探索的现代轻量化、并发控制初始化系统。