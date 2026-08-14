# Git

![git](https://git-scm.com/images/logo@2x.png)

[官网](https://git-scm.com/)

## 概述

Git是一个Git是一个免费开源自由的分布式版本控制软件,Git采用[GPL-V2协议](https://opensource.org/license/GPL-2.0)发布,是软件开发中的常用软件,当然Git不单单可以用来软件开发,只要涉及版本控制,使用Git就是个不错的选择。


## 使用方法

克隆仓库

```
git clone http://example.com/example.git
```

创建初始化一个Git仓库

```
# mkdir用于创建文件夹

mkdir 文件夹名称 

# cd用于切换目录
cd  文件夹名称

git init

```

将修改的文件推送到仓库创建一个版本

```
# git add命令会把文件放入暂存区

git add 修改的文件

# 您可以不加-m参数,Git会打开一个图形界面让您填写信息
# git commit 将缓存区的文件放入本地仓库

git commit -m "这一次提交的介绍"

```

查看所有版本

```
git log

# 如果您想要一个更加简洁的界面

git log --oneline

```

回退版本

```
# 哈希值使用git log查看,是一串很长的文本,哈希值是独一无二的
# git reflog可以查看您所有的操作,包括您删除的版本的哈希值
# git reset默认使用--mixed参数,这会删除本地仓库和缓存区的文件,而--hard参数会删除本地仓库和缓存区和工作区的文件,--soft参数只删除本地仓库的文件
# 更推荐您使用默认参数

git reset 版本的哈希值

```

## 关于更多

由于我们的专门性限制，我们建议您去其他专门教程深入的的学习git。

[Pro Git Book](https://git-scm.com/book/zh/v2)
[菜鸟教程](https://www.runoob.com/git/git-tutorial.html)
[一小时Git教程](https://www.bilibili.com/video/BV1HM411377j/)
[蛋老师的Git教程](https://www.bilibili.com/video/BV1r3411F7kn/)
[Git的原理解析](https://www.bilibili.com/video/BV11z4y1X79p/)


