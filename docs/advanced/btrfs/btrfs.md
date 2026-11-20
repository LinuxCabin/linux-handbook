# Btrfs

![Markdown Logo](../../img/Btrfs_logo.svg){width=300}

英文：B-tree filesystem（btrfs）

## 概述

Btrfs即B-tree文件系统，通常念成Butter FS，Better FS或B-tree FS，一种支持写入时复制（CoW），以B-tree为核心数据结构的文件系统，运行在Linux操作系统。

???+ note "写时复制（CoW）"
    写时复制指修改数据时先把新数据写入空闲数据块并切换引用，原数据块保持不变，因此可以保留旧版本用于备份。具体原理可参考下图。

    ![CoW 示意图](../../img/CoW.png)

Btrfs有以下常见功能：

- 子卷（同一 Btrfs 文件系统内可独立挂载的区域）
- 快照（只读与可写，写时复制，子卷复制）
- 就地转换（支持回滚）：可从 ext3/4 与 ReiserFS 转换
- 压缩（全自动透明压缩）

## 实践

!!! question "我对Btrfs的需求是否是“伪需求”？"
    我们不推荐任何人以追新为目的使用Btrfs。请仔细阅读以下内容。

    !!! info "我想使用 Btrfs，因为..."
        可以将 Linux 根目录下的不同文件夹（例如 ``/home`` ``/var`` ``/srv`` ...）挂载到不同的 Btrfs 子卷。相比传统使用 ext4 的布局，Btrfs 子卷共享同一文件系统的存储空间，不会为未使用的空间预留容量而造成浪费，从而使单一挂载点不易“爆满”。Btrfs 的快照功能还允许在不复制物理数据的前提下备份。

    !!! warning "我不该使用 Btrfs，因为..."
        Btrfs 的 RAID 功能非常不稳定，请不要使用 Btrfs 自带的 RAID 功能。同时，因为 Btrfs 采用写时复制（CoW），在反复修改大文件（如 数据库、BitTorrent）时会产生严重的碎片，在机械硬盘上尤其明显。
        因此，不应该在下载机、存储优先的服务器上使用 Btrfs。XFS, ZFS 是更成熟的选择。

!!! warning "警告"
    本栏目下的所有内容面向对 Linux 已有所经验的用户，对分区表、Linux 文件系统、引导的了解是硬性要求。不建议任何第一次安装和使用 Linux 的用户参照此指南。误操作可能导致数据损失。


### 文件系统修复

Btrfs已经成为了大多数发行版安装程序的默认选项，但它存在稳定性风险，因此掌握修复指令尤为重要。

要检查文件系统，您需要输入`sudo btrfs check 设备文件`，而要修复文件系统，请输入`sudo btrfs check --repair 设备文件`。

!!! warning "警告"
    在修复前，请务必确保已经备份好重要文件！

### 子卷

子卷相当于将单个分区进一步细分管理，其拥有独立的文件与目录结构，能够灵活挂载访问。

- 创建子卷：`sudo btrfs subvolume create 子卷路径`
- 删除子卷：`sudo btrfs subvolume delete 子卷路径`
- 列出子卷：`sudo btrfs subvolume list 子卷路径`
- 查看子卷信息：`sudo btrfs subvolume show 子卷路径`

### 压缩

压缩对于应用程序来说是透明的，可以节省硬盘空间。
Btrfs 支持 ``zlib``、``lzo``、``zstd`` 压缩算法。

使用 ``compress=算法[:等级]`` 参数挂载 Btrfs 卷以启用压缩，等级越高压缩越强。

如果不知道选哪个，建议使用默认等级（3）的 ``zstd``。

??? note "例子"
    挂载 ``/dev/sda3`` 到 ``/home``，采用默认级 ``zstd`` 压缩。
    ```bash
    mount /dev/sda3 /home -o compress=zstd
    ```
    
    挂载 ``/dev/sdb1`` 中的 ``/@data`` 子卷到 ``/srv``，采用 3 级 ``zlib`` 压缩。
    ```bash
    mount /dev/sdb1 /srv -o subvol=@data,compress=zlib:3
    ```


### 禁用写时复制

!!! warning "警告"
    禁用写时复制会禁用数据校验，Btrfs 将无法验证其完整性。不建议在生产环境中禁用写时复制。

在新的文件或文件夹上禁用写时复制：
```bash
chattr +C /path/to/something
```
这个命令对文件夹中已有的文件无效。
