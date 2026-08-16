# Git

![git](https://git-scm.com/images/logo@2x.png)

[官网](https://git-scm.com/)

## 概述

Git是一个Git是一个免费开源自由的分布式版本控制软件,Git采用[GPL-V2协议](https://opensource.org/license/GPL-2.0)发布,是软件开发中的常用软件,当然Git不单单可以用来软件开发,只要涉及版本控制,使用Git就是个不错的选择。

## 使用方法

### 克隆仓库

```
git clone http://example.com/example.git
```

### 创建初始化一个Git仓库

#### 从空的目录创建

```
mkdir 文件夹名称
cd 文件夹名称
git init
```

> `mkdir 文件夹名称` 用于创建文件夹
> 
> `cd 文件夹名称` 进入您刚刚创建的文件夹

#### 在已有项目中创建

> 确保您当前位于您的项目目录中 （使用`pwd`命令确认，`cd`命令用于进入一个文件夹）

```
git init
```

### 将修改的文件推送到仓库创建一个版本

#### 加入暂存区

```
git add 修改的文件
```

> `add`意为`添加`，用于将文件加入暂存区

#### 提交暂存区

```
git commit -m "这一次提交的介绍"
```

???+ tip "不带`-m`参数"
    您可以不加`-m`参数,Git会根据您当前的`EDITOR`环境变量打开一个编辑器让您填写信息

    您可以使用`echo $EDITOR`得知当前编辑器是什么

    `git commit` 将缓存区的文件放入本地仓库

> `commit`意为`提交`

### 查看所有版本

```
git log
```

???+ tip "如果您想要一个更加简洁的界面"
    `git log --oneline`

### 回退版本

- `git log` 查看commit历史,每一个提交都具有一个独一无二的哈希值
- `git reflog` 可以查看您所有的操作,包括您删除的版本的哈希值
- `git reset --mixed` 这是默认使用参数,会删除本地仓库和缓存区的文件
- `git reset --hard` 会删除本地仓库和缓存区和工作区的文件
- `git reset --soft` 只删除本地仓库的文件

> 更推荐您使用默认参数
>
> `git reset 版本的哈希值`


## 关于更多

由于我们的专门性限制，我们建议您去其他专门教程深入的的学习git。

1. [Pro Git Book](https://git-scm.com/book/zh/v2)
2. [菜鸟教程](https://www.runoob.com/git/git-tutorial.html)
3. [一小时Git教程](https://www.bilibili.com/video/BV1HM411377j/)
4. [蛋老师的Git教程](https://www.bilibili.com/video/BV1r3411F7kn/)
5. [Git的原理解析](https://www.bilibili.com/video/BV11z4y1X79p/)
