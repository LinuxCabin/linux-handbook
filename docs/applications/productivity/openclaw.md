# OpenClaw

## 概述

[OpenClaw](https://openclaws.io/zh/)是一个开源的AI智能体框架，相当于一只“大手”，能够帮助使用者完成具体任务。

## 安装

[OpenClaw的官方安装教程](https://openclaws.io/zh/install)提供了安装脚本，但由于网络原因，体验可能不尽人意。我们在此讲解npm手动安装。

### 安装Node.js

您需要到[Node.js官网](https://nodejs.org/zh-cn/download)运行脚本安装Node.js。

由于原安装脚本需要从Github拉取文件，您需要在`https://raw.githubusercontent.com`前面加上Github加速链接（像这样`https://gh-proxy.com/https://raw.githubusercontent.com`）。

同时，您需要为nvm换源。我们建议参考[NVM 镜像设置](https://www.nvmnode.com/zh/guide/mirrors.html)。

!!! warning "包管理器"
    尽管多数发行版的官方源提供了`nodejs`包，但其版本严重过时，因此不推荐使用包管理器安装Node.js。

#### npm

如果您在安装时选择npm管理包，请按照[阿里源官网](https://npmmirror.com/)的使用说明来为npm换源。

#### pnpm

若您选择pnpm来管理包，您需要执行以下指令：

```bash
# 1. 配置阿里云源
pnpm config set registry https://registry.npmmirror.com
# 2. 验证配置
pnpm config get registry
# 3. （可选）配置 pnpm 专属镜像（提升下载速度）
pnpm config set @pnpm:registry https://registry.npmmirror.com
```

（来自https://www.cnblogs.com/ljbguanli/p/20134805）

### 安装OpenClaw本体

```bash
npm i -g openclaw
## 如果你使用pnpm
pnpm add -g openclaw
```

之后，运行`openclaw onboard`来配置即可。
