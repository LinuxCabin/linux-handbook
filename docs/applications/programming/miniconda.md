# Miniconda

## 概述

Miniconda的上游Anaconda是一个**Python的管理器**，让你在同一个操作系统上**拥有多个共存的Python环境，按需使用和激活**。但Anaconda过于臃肿，因此官方也推出了最小化版本，也就是Miniconda。

Miniconda 跟Anaconda的最大区别就是砍掉了很多预装的东西，让用户按需安装。

## 安装

下载官方安装脚本，访问[官方下载链接](https://www.anaconda.com/download/success)，选择 Linux，选择右边Miniconda，架构请自行查询，一般情况为x86。

![Anaconda安装脚本下载](../../img/miniconda/pic1.png)

使用bash执行脚本

```bash
bash Miniconda3-latest-Linux-x86_64.sh
```

选项保持默认即可。安装完之后重启终端或者使用下面的命令重新加载环境变量。

```bash
source ~/.bashrc
```

## 镜像源

访问[中科大源](https://mirrors.ustc.edu.cn/help/anaconda.html)进行配置即可

创建一个`~/.condarc`文件然后把channels开头的文本复制粘贴进去即可。

```bash
# 创建配置文件
touch ~/.condarc
# 编辑配置文件
nano ~/.condarc
```

此外，还需要配置pip源，建议访问[中科大源](https://mirrors.ustc.edu.cn/help/pypi.html)进行配置
