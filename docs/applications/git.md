# Git

![git](https://git-scm.com/images/logo@2x.png)

[官网](https://git-scm.com/)

## 什么是Git

Git是一个Git是一个免费开源自由的分布式版本控制软件,Git采用[GPL-V2协议](https://opensource.org/license/GPL-2.0)发布,是软件开发中的常用软件,当然Git不单单可以用来软件开发,只要涉及版本控制,使用Git就是个不错的选择

## Git的诞生

自从Linus于1991年发布Linux的第一个版本并且公开源代码开始,每天都有来自全世界的程序员给Linux贡献代码,这就产生了一个问题,如果新添加的代码存在问题该如何回退到之前的版本,如何管理代码,如何决定那些代码进入最终版本,也就是版本控制的问题,在1991~2001年期间Linux的维护工作的大量时间都花在了提交补丁和保存归档的繁琐事务上,在2002年Linux使用BitKeeper来管理版本,BitKeeper是一个闭源付费的软件,但其开发公司与Linux团队达成了协议,让Linux团队免费使用BitKeeper,但Linux的开发社区依旧对BitKeeper不满,所以社区试图破解BitKeeper的协议,被发现后,BitKeeper的开发公司收回了Linux团队的免费使用权,Linus在此情况下自己写出了Git并公开源代码发布,有趣的是BitKeeper在2016以Apache2.0协议开源,不过其已经停止开发

## Git的使用

**由于本文档面向新手所以只介绍Git的本地仓库版本管理,不涉及远程仓库的使用**

- 使用以下命令创建初始化一个Git仓库

```
#mkdir用于创建文件夹

mkdir 文件夹名称 

#cd用于切换目录
cd  文件夹名称

git init

```

- 使用以下命令将修改的文件推送到本地仓库创建一个版本

```
#git add命令会把文件放入暂存区

git add 修改的文件

#您可以不加-m参数,Git会打开一个图形界面让您填写信息
#git commit 将缓存区的文件放入本地仓库

git commit -m "这一次提交的介绍"

```

- 使用使用以下命令查看所有版本

```
git log

#如果您想要一个更加简洁的界面

git log --oneline

```

- 使用以下命令回退版本

```
#哈希值使用git log查看,是一串很长的文本,哈希值是独一无二的
#git reflog可以查看您所有的操作,包括您删除的版本的哈希值
#git reset默认使用--mixed参数,这会删除本地仓库和缓存区的文件,而--hard参数会删除本地仓库和缓存区和工作区的文件,--soft参数只删除本地仓库的文件
#更推荐您使用默认参数

git reset 版本的哈希值

```

## 视频教程

[一小时Git教程](https://www.bilibili.com/video/BV1HM411377j/)
[蛋老师的Git教程](https://www.bilibili.com/video/BV1r3411F7kn/)
[Git的原理解析](https://www.bilibili.com/video/BV11z4y1X79p/)


