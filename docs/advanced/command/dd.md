# DD命令

## 概述

DD命令是一个系统自带的数据复制转移命令

## DD命令与CP命令的区别

DD命令与CP命令都可以对数据进行复制转移,但DD命令与CP命令有着很大的区别,CP命令的操作对象是文件系统而DD命令的操作对象是字节流,最为明显的区别就是DD命令可以操作块设备例如您的硬盘,这得益于Linux一切皆字节流的思想,在计算机中所有的数据都是由一长串的0和1存储的这就是字节流,Linux将硬盘等设备抽象成了字节流方便操作

## 使用

**DD命令的操作是不可撤销的,请谨慎使用!!!**

DD命令的基础语法

`dd if=<输入数据> of=<输出数据> 参数`

### 使用DD命令创建整个磁盘的完整镜像

```bash
#使用lsblk命令查看所有的硬盘设备

lsblk

##例如创sd0硬盘的完整镜像,bs参数控制每次读取的字节数,status=progress参数显示进度

sudo dd if=/dev/sd0 of=./sd0.img bs=4M status=progress

```

### 使用DD命令制作系统安装盘

```bash
#例如制作Debian的系统启动盘

lsblk

#例如U盘的设备名称为sdd

sudo dd if=debian.iso of=/dev/sdd bs=4M status=progress

```

### 备份硬盘数据到另一个硬盘

```bash
lsblk

#例如两个硬盘分别为sd1和sd2

sudo dd if=/dev/sd1 of=/dev/sd2 bs=4M status=progress

```


### 安全擦除硬盘数据

```bash
lsblk

#例如擦除硬盘sd3数据

sudo dd if=/dev/zero of=/dev/sd3

```

