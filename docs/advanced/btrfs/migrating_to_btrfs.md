# 指南： 迁移已有的 Linux 安装至 Btrfs
并设置 Btrfs 子卷

!!! warning "警告"
    这篇指南面向对 Linux 已有所经验的用户，对分区表，Linux 文件系统，引导的了解是硬性要求。不建议任何第一次使用 Linux 的用户参照此指南。误操作可能导致数据损失。

!!! note "注意"
    本文描述了一种笔者*猜想*适用于最多人的从 **Ext4** 迁移到 Btrfs 的方法。不保证在所有设备上工作。如果因为一些原因在您的设备上不能完成，笔者深表歉意。


## 准备


### 了解要转换的文件系统结构

运行 ``df -h`` 并记下输出。
```bash
user@hostname:~$ df -h
# Example 这是一个例子，硬盘不一定是/dev/sda，可以是/dev/hdX，/dev/sdX，/dev/nvmeXnY...
Filesystem      Size  Used Avail Use% Mounted on
...
/dev/sda2        20G  1.2G   17G   7% /
...
/dev/sda5        43G   52K   40G   1% /home
/dev/sda1       975M  9.1M  966M   1% /boot/efi  *类似的是efi分区，不用考虑它
...
```
只要其中有一个分区的可用空间 ``Avail`` 大于其他所有分区占用 ``Used`` 的总合，就可以使用这个方法：只保留此分区，将此分区转化为 Btrfs，再把其他分区的数据拷贝到此分区。

## 理论成立，实践开始！

### 启动 livecd

显然我们不能修改一个已挂载的文件系统，更不能卸载运行中 ``/`` 上的文件系统，所以需要用到 livecd。

大多数发行版的 livecd 都应该可用，这里使用 Arch Linux image 演示。如果选用的 livecd 带图形化界面，打开终端（Terminal）。

### 确认硬盘的路径

在 livecd 里，硬盘在 /dev 里的位置可能会改变，但卷标和分区大小不会变。运行一遍 ``lsblk`` 或 ``lsblk -f`` 来确认。
```bash
root@livecd ~ # lsblk
# Example 这是一个例子，硬盘不一定是/dev/sda，可以是/dev/hdX，/dev/sdX，/dev/nvmeXnY...
NAME   MAJ:MIN RM    SIZE RO TYPE MOUNTPOINTS
...
sda      8:0    0     80G  0 disk 
├─sda1   8:1    0    976M  0 part 
├─sda2   8:2    0     32G  0 part 
├─sda5   8:5    0   43.1G  0 part 
└─sda6   8:6    0      4G  0 part 
...
```

我们确认了 ``/dev/sda2`` 是要保留的分区， ``/dev/sda5`` 是要拷贝数据后删除的分区。

### 将保留的 ext4 分区转换为 Btrfs 分区

现在我们用 ``btrfs-convert`` 将 ``/dev/sda2`` 转换为 Btrfs。
!!! warning "警告"
    有数据损失的风险，备份所有重要资料再继续。

```bash
root@livecd ~ # e2fsck -f /dev/sda2
e2fsck 1.47.4 (6-Mar-2025)
...
/dev/sda2: 38269/2097152 files (0.4% non-contiguous), 581031/8388608 blocks

root@livecd ~ # btrfs-convert /dev/sda2
btrfs-convert from btrfs-progs v7.1
...
Create initial btrfs filesystem
Create ext2 image file
Create btrfs metadata
Copy inodes [O] [     38269/     38269]
Free space cache cleared
Conversion complete
```

现在我们尝试挂载转换好的 Btrfs 分区。
```bash
root@livecd ~ # mount --mkdir /dev/sda2 /mnt/newpart

root@livecd ~ # ls /mnt/newpart 
bin   dev  ext2_saved  initrd.img      lib    lost+found  mnt  proc  run   srv  tmp  var      vmlinuz.old
boot  etc  home        initrd.img.old  lib64  media       opt  root  sbin  sys  usr  vmlinuz

root@livecd ~ # mount
...
/dev/sda2 on /mnt/newpart type btrfs ( ... ,subvol=/)
```

可以看到 ``btrfs-convert`` 将原分区的文件系统直接放到母卷（``subvol=/``）下。这更像原来 ext4 的做法，但因为我们要设置子卷，不能采用这样的方案。
我们要把文件系统镜像到它应该在的子卷里，用 Btrfs 的快照功能。

???+ note "子卷名"
     在这个例子里，文件系统源自 ``/`` ，所以快照到 ``@`` 子卷。如果我们选择了保留 ``/home`` 分区，应该快照到 ``@home`` 分区，以此类推...

```bash
root@livecd ~ # btrfs subvolume snapshot /mnt/newpart /mnt/newpart/@
Create snapshot of '/mnt/newpart' in '/mnt/newpart/@'
```

确认新子卷包含了原有的文件系统，我们就可以安全地删除母卷下重复的文件了。

!!! warning "警告"
    确认新的子卷正常工作。如果快照出了问题，继续删除会丢失所有的数据。

```bash
root@livecd ~ # ls /mnt/newpart/@
bin   dev  ext2_saved  initrd.img      lib    lost+found  mnt  proc  run   srv  tmp  var      vmlinuz.old
boot  etc  home        initrd.img.old  lib64  media       opt  root  sbin  sys  usr  vmlinuz
# Read some random data 随便读点数据
root@livecd ~ # cat /mnt/newpart/@/etc/hostname 
debian

root@livecd ~ # rm -rf /mnt/newpart/bin
root@livecd ~ # rm -rf /mnt/newpart/boot
...
root@livecd ~ # rm -rf /mnt/newpart/vmlinuz.old

root@livecd ~ # ls -A /mnt/newpart
@
```

???- note "如果这是唯一的分区..."
     您也许想把一些目录子卷存放，例如 ``/home``。这种情况下，创建新子卷并直接从 ``@`` 子卷移动。
     ```bash
     btrfs subvolume create /mnt/newpart/@home
     mv /mnt/newpart/@/home/* /mnt/newpart/@home
     ```
     完成以后，直接跳到 #更新fstab 。

这一分区的工作已经完成了，接下来拷贝其余分区的数据。

### 转移其余分区的数据至 Btrfs 子卷

在新的 Btrfs 分区上新建子卷，作为数据迁移的目的地。

???+ note "root lives matter"
     如果一开始没有选择保留根分区（挂载到 ``/`` 的分区），别忘了建一个 ``@`` 子卷。我们需要它来存放根目录下的文件。
     ```bash
     root@livecd ~ # btrfs subvolume create /mnt/newpart/@
     ```

```bash
root@livecd ~ # btrfs subvolume create /mnt/newpart/@home
Create subvolume '/mnt/newpart/@home'
...
```

按照文件系统结构挂载 Btrfs 的所有子卷。
```bash
root@livecd ~ # mount --mkdir /dev/sda2 /mnt/newroot -o subvol=@
root@livecd ~ # mount /dev/sda2 /mnt/newroot/home -o subvol=@home
...
```

按照原来的文件系统结构挂载原有要删除的分区到一个地方并拷贝数据到 Btrfs 子卷。
```bash
root@livecd ~ # mount --mkdir /dev/sda5 /mnt/oldparts/home
...

root@livecd ~ # rsync -aAX --progress /mnt/oldparts/* /mnt/newroot 
sending incremental file list
...

root@livecd ~ # umount /dev/sda5
...
```

我们的 Btrfs 分区现在包含所有的数据，等价于原来的几个 ext4 分区。我们不再需要那些旧分区，现在可以安全地删除他们，并将空间用于扩展新的 Btrfs 分区。

用喜欢的分区表编辑器打开硬盘并删除旧的 ext4 分区，这里使用 ``fdisk``。

!!! warning "警告"
    应该备份所有重要资料再继续，误操作可能导致数据损失。

```text
root@livecd ~ # fdisk /dev/sda
Welcome to fdisk (util-linux 2.42.2).

Command (m for help): d
Partition number (1,2,5,6, default 6): 5

Partition 5 has been deleted.

```

现在扩展 Btrfs 分区。
```bash
Command (m for help): e
Partition number (1,2,6, default 6): 2

New <size>{K,M,G,T,P} in bytes or <size>S in sectors (default 75.1G): 

Partition 2 has been resized.

Command (m for help): w
The partition table has been altered.
Syncing disks.

root@livecd ~ # btrfs filesystem resize max /mnt/newpart
Resize device id 1 (/dev/sda2) from 32.00GiB to max
```

???- note "如果你的 Btrfs 分区不在空闲空间的头部..."
    没有特定的工具下，Btrfs 只能向后扩展和向前压缩。为了向前扩展，我们需要使用一些分区编辑工具将 Btrfs 分区连带数据块整体向前挪，然后再向后扩展。

    这里演示使用 ``sfdisk`` 。

    假设 ``/dev/sda4`` 是我们要移动的分区...
    ```bash
    sfdisk --move-data /dev/sda -N 4
    ```
    
    应该在执行前卸载磁盘上*所有*的分区。如果做不到，在命令末尾加上 `` --force`` 参数。
    
    ``--move-data`` 代表在更改分区表时一并移动数据，请不要省略。
    
    sfdisk 的输入格式是 ``<起始位置>``，``<分区大小>``，``<分区类型>``，``<是否可启动 *仅MBR >``，用逗号隔开每个项目。

    进入时，屏幕上方会打印现在的分区表 ``Old situation:``
    ```text
    /* Example 这是一个例子 */
    Device         Start       End   Sectors  Size Type
    /dev/sda1       2048   2000895   1998848  976M EFI System
    /dev/sda2    2000896 127830015 125829120   60G Linux filesystem
    /dev/sda4  148801536 159287295  10485760    5G Linux filesystem
    /dev/sda6  159424512 167770111   8345600    4G Linux swap
    ```
    
    我们需要找到 ``/dev/sda4`` 的前一个分区。通常来说分区按序号（就是那个``4``）排列，但是也有例外。我们将 ``/dev/sda4`` 的起始扇区号 ``Start`` 与所有分区的结束扇区号 ``End`` 比较，找出小于 ``/dev/sda4`` 起始扇区号的最大的结束扇区号，那就是要找的分区。在这个例子里是 ``127830015``， ``/dev/sda2``。

    我们想让 ``/dev/sda4`` 尽可能地往前移，输入起始位置前一个分区的结束扇区号**加一**，这个例子里是 ``127830016``。
    ```text
    /dev/sda4: 127830016,,,
    ```
    会打印变化后的分区表 ``New situation:``，检查无误后按两次 ``y`` 确认并移动数据。

<!-- TODO: 使用Diskgenius的方法 -->

做完上述内容后，分区的布局已经完成。要让新分区可启动，编辑原有的 fstab 和引导工具。

### 更新 fstab

我们需要从记录中删除已不存在的 ext4 分区，加入新的 Btrfs 分区。

???- tip "Arch 系发行版...？"
     使用 Arch 系发行版的 livecd 可以逃课。
     
     挂载包括EFI，swap的所有分区并让脚本识别它们。
     ```bash
     root@archiso ~ # mount /dev/sda1 /mnt/newroot/boot/efi 
     root@archiso ~ # swapon /dev/sda6

     root@archiso ~ # mv /mnt/newroot/etc/fstab /mnt/newroot/etc/fstab.bak
     root@archiso ~ # genfstab -U /mnt/newroot > /mnt/newroot/etc/fstab
     ```


     Debian 也干了...
     ```bash
     apt install arch-install-scripts
     ```

执行 ``blkid`` 以获取分区的 ``UUID``，找到新的 Btrfs 分区并记下 ``UUID``。
```bash
root@archiso ~ # blkid
# Example 这是一个例子，我们的分区不一定是 /dev/sda2 也不太可能会有相同的UUID。
...
/dev/sda2: UUID="ce58a65d-7b6f-486c-837f-962fed1604c1" UUID_SUB="bdfb85ad-1495-48b1-84d6-8acc9625f27f" BLOCK_SIZE="4096" TYPE="btrfs" PARTUUID="964fb3a3-4f56-4be8-969b-67e309df0786"
...
```
在这个例子中，``UUID`` 是 ``ce58a65d-7b6f-486c-837f-962fed1604c1``。

用喜欢的文本编辑器打开硬盘上 Linux 安装根目录的 ``etc/fstab`` （在这个例子里是 ``/mnt/newroot/etc/fstab`` ），把带有 ``ext4`` 的整行注释或删除，并加上以下
```
UUID=ce58a65d-7b6f-486c-837f-962fed1604c1	/			btrfs		defaults,subvol=/@			0 0

UUID=ce58a65d-7b6f-486c-837f-962fed1604c1	/home		btrfs		defaults,subvol=/@home		0 0

...
```
第二项是挂载点，第四项是挂载选项，填入在前面挂载时使用的挂载点与参数。


### 更新引导工具

如果有 EFI 分区，应该现在挂载。
```bash
root@archiso ~ # mount /dev/sda1 /mnt/newroot/boot/efi
```


大部分引导更新软件需要在 chroot 下运行。

???- tip "Arch 系发行版...？"
     使用 Arch 系发行版的 livecd 可以逃课。
     ```bash
     arch-chroot /mnt/newroot /bin/bash
     ```

     使用 ``arch-chroot`` 时 ``PATH``（环境变量）里没有 ``/sbin`` 和 ``/usr/sbin``，因为 Arch Linux 不使用这两条路径存放程序。在使用这两条路径存放管理程序的发行版（比如 Debian）上运行 ``arch-chroot`` 会造成一部分程序无法执行，解决方法很简单。
     ```bash
     (ch) root@archiso:/# source /etc/profile
     ```

在 chroot 前，应该先挂载内核虚拟文件系统。
```bash
export NR='/mnt/newroot'

mount --bind /dev $NR/dev
mount -t devpts devpts -o gid=5,mode=0620 $NR/dev/pts
mount -t proc proc $NR/proc
mount -t sysfs sysfs $NR/sys
```

chroot 内没有更新 DNS 的服务，为了访问互联网，手动复制一份 livecd 的过去。

```bash
cp /etc/resolv.conf "$NR"/etc/resolv.conf
```

chroot 到新的分区。

```bash
chroot "$NR" /bin/env -i PATH=/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin:/bin:/sbin HOME=/root TERM="$TERM" /bin/bash --login
```

<!-- TODO: systemd-boot, rEFInd -->

#### GNU GRUB

``grub-install`` 更新 GRUB 记录的分区 UUID 和配置文件位置（现在有可能在子卷下了）。

``grub-mkconfig`` 更新 GRUB 配置文件，一般在 ``/boot/grub/grub.cfg``。

```bash
grub-install
grub-mkconfig -o /boot/grub/grub.cfg
```

### 重启

按 ``Ctrl + D`` 组合键或者执行 ``exit`` 退出 chroot 环境，卸载所有硬盘的分区，重启。
```bash
(ch) root@livecd:/# exit
logout
root@livecd ~ # umount -R /mnt/newroot
root@livecd ~ # umount /mnt/newpart
root@livecd ~ # sync
root@livecd ~ # reboot
```
