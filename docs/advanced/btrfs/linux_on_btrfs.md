# 指南： 在 Btrfs 子卷上安装 Linux

!!! warning "警告"
    这篇指南面向对 Linux 已有所经验的用户，对分区表，Linux 文件系统，引导的了解是硬性要求。不建议任何第一次安装和使用 Linux 的用户参照此指南。误操作可能导致数据损失。

!!! note "为什么我想使用 Btrfs"
    可以将 Linux 根目录下的不同文件夹（例如 ``/home`` ``/var`` ``/srv`` ...）挂载到不同的 Btrfs 子卷。相比传统使用 ext4 的布局，Btrfs 子卷有共享文件系统的储存空间的特性，可以不浪费分卷内未使用的空间从而使单一挂载点不易“爆满”。Btrfs 的快照功能还允许在不复制物理数据的前提下备份。

!!! note "为什么我在一些情况下不该使用 Btrfs"
    Btrfs 的 RAID 功能非常不稳定，请不要使用 Btrfs 自带的 RAID 功能。同时，因为 Btrfs 才用写时复制（CoW），在处理修改大文件（如 数据库，BitTorrent）时会产生严重的碎片，特别是机械硬盘。
    因此，不应该在下载机，存储优先的服务器上使用 Btrfs。XFS, ZFS 是更成熟的选择。

## 准备工作

提前想好分卷的布局是个好主意。

主流的布局里有以下几种：

- ``@home`` 作为 /home, ``@`` 作为 /

- ``@home`` 作为 /home, ``@var`` 作为 /var, ``@tmp`` 作为 /tmp, ``@`` 作为 /

- ``@home`` 作为 /home, ``@opt`` 作为 /opt, ``@`` 作为 /

- ``@var`` 作为 /var, ``@srv`` 作为 /srv, ``@tmp`` 作为 /tmp, ``@`` 作为 /

- 以上，但是增加 ``@snapshots`` 用来存放快照

- ... ...

Linux 是自由的，任何布局只要有 ``/`` 的挂载点都行得通。但是一些软件期望标准化的布局，比如 Timeshift。如果打算使用 Timeshift 进行备份，只能选择第一种（``@home``,``@``）。
除此之外，可能还需要单独的 swap 分区和 EFI 分区（如果使用 UEFI）。

???+ tip "如果打算安装双系统"
    划分出一块未使用的空间可以省很多时间。



## Debian

由于 Debian 安装器不支持 Btrfs 子卷，需要在安装途中做点小手脚。
在 高级设置 ``Advanced options`` 里选择 专家安装 ``Expert install`` 。

### 分区
#### 使用安装器的自动分区

!!! warning "警告"
    备份所有重要资料再继续。此部分的误操作可能导致数据损失。

像往常一样安装 Debian, 直到 磁盘分区 ``Partition disks`` , 选择 向导 - 使用最大的未分配空间 ``Guided - use the largest continuous free space`` 或 向导 - 使用整个磁盘 ``Guided - use entire disk`` ，再选择 所有文件在同一分区 ``All files in one partition`` 。

选中格式为 ext4，挂载点为 / 的分区，将文件系统改为 btrfs。


#### 手动分区

!!! warning "警告"
    备份所有重要资料再继续。此部分的误操作可能导致数据损失。

像往常一样安装 Debian，直到 磁盘分区 ``Partition disks`` ，选择 手动 ``Manual`` 。


##### 如果使用 BIOS：

我们需要一个 Btrfs 分区挂载至 ``/`` 和可选的 swap 分区。

```text
  sda （硬盘，可能是hdX，sdX，nvmeXnY...）
   ├─  ...
   ├─  /    (btrfs)
   ├─  swap *可选
   └─  ...
```

<!-- 这部分应该在别的地方介绍。
- （可选）如果想要使用整个硬盘，选中硬盘名后回车，选择 ``msdos`` 。

- （可选）选中未分配空间，选择创建新分区 ``Create a new partition`` ，分区大小 512MB 到 1GB ，类型 主分区 ``Primary`` ，位置 头部 ``Beginning`` ，文件系统 Ext4，挂载点 ``Mount point``  /boot。

- （可选）继续选中未分配空间，选择创建新分区，分区大小为稍大于内存容量，类型 逻辑分区 ``Logical`` ，位置 尾部 ``End`` ，文件系统 swap area。

- 继续选中未分配空间，选择创建新分区，大小按自动提示或 max，类型 逻辑分区，文件系统 btrfs，挂载点 / 。

- 看起来不错就结束分区并写入磁盘吧 ``Finish partitioning and write changes to disk`` 
-->


##### 如果使用 UEFI：

我们需要一个 FAT 格式的 ``/boot/efi`` 分区充当 EFI 分区，一个 Btrfs 分区挂载至 ``/`` 和可选的 swap 分区。

```text
  sda （硬盘，可能是hdX，sdX，nvmeXnY...）
   ├─ ...
   ├─ /boot/efi    (fat16/fat32)
   ├─ /    (btrfs)
   ├─ swap *可选
   └─ ...
```


### 完成分区后...

在菜单里选择 ``Execute a shell`` 启动终端以供我们执行命令。

我们需要记下目前已挂载卷的路径。

!!! warning "警告"
    对于不同的主机，分区的路径可能不同。应该替换 ``/dev/sda6`` 和 ``/dev/sda1`` 为实际路径。

```bash
~ # mount
...
/dev/sda6 on /target type btrfs ( ... subvol=/@rootfs)
/dev/sda1 on /target/boot/efi type vfat ( ... )
```

我们看到 ``/dev/sda6`` 是 Btrfs 分区，默认的分卷是 ``@rootfs``，``/dev/sda1`` 是 EFI 分区。

???+ note "参数的不同写法"
     ``subvol=/@abcxyz`` 与 ``subvol=@abcxyz`` 在大部分情况下是等价的。

为了创建分卷，我们要卸载这两个卷并挂载 Btrfs 根卷到一个位置。

```bash
~ # umount /target/boot/efi
~ # umount /target

~ # mkdir -p /mnt/btrfs
~ # mount /dev/sda6 /mnt/btrfs
~ # mount
...
/dev/sda6 on /mnt/btrfs type btrfs ( ... subvol=/)
```

现在开始创建分卷，以仅单独 ``@home`` 布局为例。为了保持兼容性以使用 Timeshift 等工具，我们将默认的 ``@rootfs`` 分卷移动到 ``@`` 。

???+ note "有关在根目录上挂载的分卷的名字"
     Debian 默认使用 ``subvol=/@rootfs`` 作为根目录使用的分卷，而大多数主流发行版倾向使用 ``subvol=/@``。如果使用 Ubuntu 等发行版并正按照本指南操作，不需要移动分卷。

```bash
cd /mnt/btrfs
/mnt/btrfs # ls
@rootfs
/mnt/btrfs # mv @rootfs @
/mnt/btrfs # ls
@
```

```bash
/mnt/btrfs # btrfs subvolume create @home
Create subvolume './@home'
/mnt/btrfs # ls
@        @home
```

分卷创建好后，我们将根卷卸载并把文件系统挂载回 ``/target`` 下 。如果有 EFI 分区，别忘了挂载它（ ``/boot/efi`` ）。

???- info "有关压缩"
    如果想设置压缩，应该现在设置。
    
    在挂载的参数里加上 ``compress=zstd``，像这样
    ```bash
    mount /dev/...  ...  -o compress=zstd,subvol=/...
    ```

```bash
/mnt/btrfs # cd
~ # umount /mnt/btrfs
~ # mount /dev/sda6 /target -o subvol=/@
~ # mkdir -p /target/home
~ # mount /dev/sda6 /target -o subvol=/@home
~ # mount /dev/sda1 /target/boot/efi
~ # mount
...
/dev/sda6 on /target type btrfs ( ... subvol=/@)
/dev/sda6 on /target/home type btrfs ( ... subvol=/@home)
/dev/sda1 on /target/boot/efi type vfat ( ... )
```

由于我们更改了文件系统结构，我们需要更新 fstab。

```bash
~ # nano /target/etc/fstab
```

???- info "有关压缩"
    同理地，在参数里加上 ``compress=zstd``，像这样
    ```text
    UUID=...    /...   btrfs    ...,compress=zstd,subvol=...   0   0
    ```

???- tip "如果不会使用nano..."
     Ctrl + \ 调出替换菜单，输入 ``@rootfs`` ，回车，替换为 ``@`` ，回车。
     把光标留在那一行，Ctrl + K 剪切一整行，再按 Ctrl + U 原封不动粘贴回去，每按一次 Ctrl + U 都能得到一整行复制的条例。
     Ctrl + O 保存，Ctrl + X 退出。

编辑 ``<mount point>`` 挂载点， ``<options>`` 挂载参数。

```text
...
UUID=...    /        btrfs    ...,subvol=@        0    0
UUID=...    /home    btrfs    ...,subvol=@home    0    0
...
```

一切都设置好后，Ctrl + D 退出 shell，继续像往常一样安装 Debian。

如果一切顺利，我们已经重启进入新的系统了。不需要任何额外的配置，所有东西都应该正常工作。Debian其实就是安装器拉了，Linus说得对...



## Fedora

Fedora 的安装器原生支持并且默认使用 Btrfs 子卷。



## Arch Linux

### 分区

用喜欢的磁盘分区软件打开硬盘。
```bash
cfdisk /dev/sda
```
!!! warning "警告"
    备份所有重要资料。误操作可能导致数据损失。

#### 如果使用BIOS：

```text
  sda （硬盘，可能是hdX，sdX，nvmeXnY...）
   ├─ ...
   ├─ swap *可选
   ├─ /    (btrfs)
   └─ ...
```

#### 如果使用UEFI：

```text
  sda （硬盘，可能是hdX，sdX，nvmeXnY...）
   ├─ ...
   ├─ /boot/efi    (fat32)
   ├─ swap *可选
   ├─ /    (btrfs)
   └─ ...
```

### 创建好分区后

格式化新建的分区。
!!! warning "警告"
    对于不同的主机，分区的路径可能不同。应该替换 ``/dev/sdaX `` 为实际路径。
```bash
# UEFI
mkfs.vfat -F 32 /dev/sda1 -n ESP

mkfs.btrfs /dev/sda3 -L Arch
mkswap /dev/sda2 -L swap
```

挂载 Btrfs 分区以添加分卷。
```bash
mount --mkdir /dev/sda3 /mnt/btrfs
cd /mnt/btrfs

# Example 这是一个例子，应该选择你觉得合适的
btrfs subvolume create @
btrfs subvolume create @var
btrfs subvolume create @tmp
btrfs subvolume create @home
btrfs subvolume create @snapshots

cd /
umount /mnt/btrfs
```

挂载 Linux 文件系统。

???- info "有关压缩"
    如果想设置压缩，应该现在设置。
    
    在挂载的参数里加上 ``compress=zstd``，像这样
    ```bash
    mount --mkdir /dev/...  ...  -o compress=zstd,subvol=...
    ```

```bash
mount --mkdir /dev/sda3 /mnt/arch -o subvol=@
mount --mkdir /dev/sda3 /mnt/arch/var -o subvol=@var
mount --mkdir /dev/sda3 /mnt/arch/tmp -o subvol=@tmp
mount --mkdir /dev/sda3 /mnt/arch/home -o subvol=@home
mount --mkdir /dev/sda3 /mnt/arch/.snapshots -o subvol=@snapshots

# UEFI
mount --mkdir /dev/sda1 /mnt/arch/boot/efi

swapon /dev/sda2
```

安装 Arch Linux 基础软件包。
```bash
pacstrap -K /mnt/arch base
```

生成 fstab。
如果想设置基于快照的备份，我们大概会想删除 fstab 中 ``subvolid`` 这一挂载选项。
```bash
genfstab -U /mnt/arch >> /mnt/arch/etc/fstab
```

Chroot 到新的系统以进行进一步设置...
```bash
arch-chroot /mnt/arch /bin/bash

pacman -Syu linux linux-firmware dhcpcd grub ...
```


### 参见

ArchWiki - Btrfs
- https://wiki.archlinux.org/title/Btrfs

ArchWiki - Installation guide
- https://wiki.archlinux.org/title/Installation_guide

<!--
如果你站将来有Arch Linux的安装指南，可以把它链接到这里
-->



<!-- TODO: ## 列表里没有我的发行版，怎么办？ -->
