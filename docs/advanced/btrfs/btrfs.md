# Btrfs

![Markdown Logo](../../../img/Btrfs_logo.svg){width=300}

英文：B-tree filesystem（btrfs）

## 概述

Btrfs即B-tree文件系统，通常念成Butter FS，Better FS或B-tree FS，一种支持写入时复制（CoW），以B-tree为核心数据结构的文件系统，运行在Linux操作系统。

???+ note "写时复制 (CoW)"
    写时复制指将修改的数据块单独存储到CoW分区，以实现备份的作用。具体原理可参考下图。

<<<<<<<< HEAD:docs/advanced/btrfs.md
    ![CoW 示意图](../img/CoW.png)
========
    ![CoW 示意图](../../../img/CoW.png)
>>>>>>>> 2899bb7 (added guide on installing linux with btrfs subvol linux_on_btrfs.md):docs/concepts/file_system/btrfs/btrfs.md

Btrfs有以下常见功能：

- 子卷（一个或多个单独可挂载基于每个物流分区）
- 快照（只读和可写，写复制，子卷复制）
- 就地转换（带回滚）ext3/4与ReiserFS
- 压缩（全自动透明压缩）

## 实践

### 文件系统修复

Btrfs已经成为了大多数发行版安装程序的默认选项，而其存在稳定性风险，因此掌握修复指令尤为重要。

要检查文件系统，您需要输入`sudo btrfs check 设备文件`，而要修复文件系统，请输入`sudo btrfs check --repair 设备文件`。

!!! warning "警告"
    在修复前，请务必确保已经备份好重要文件！！！

### 子卷

子卷相当于将单个分区进一步细分管理，其拥有独立的文件与目录结构，能够灵活挂载访问。

- 创建子卷：`sudo btrfs subvolume create 子卷路径`
- 删除子卷：`sudo btrfs subvolume delete 子卷路径`
- 列出子卷：`sudo btrfs subvolume list 子卷路径`
- 查看子卷信息：`sudo btrfs subvolume show 子卷路径`

### 压缩

压缩对于应用程序来说是透明的，可以节省硬盘空间。
Btrfs 支持 ``zlib``，``lzo``， ``zstd`` 压缩算法。

使用 ``compress=算法[:等级]`` 参数挂载 Btrfs 卷以启用压缩，等级越高压缩越强。

如果不知道选哪个，建议使用默认等级（3）的 ``zstd`` 。

???- note "例子"
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
    禁用写时复制会禁用数据校验，Btrfs 将无法验证其完整性。不应该在生产环境中开启。

在新的文件或文件夹上禁用写时复制：
```bash
chattr +C /path/to/something
```
这个命令对文件夹中已有的文件无效。
