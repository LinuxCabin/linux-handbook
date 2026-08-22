# 交换空间

交换空间 (Swap) 是Linux下解决内存不足的方案，类似于Windows上的虚拟内存。在物理内存（RAM）不足时，系统会将部分内存页转移至存储于磁盘中的交换空间中。

???+ question "什么是物理内存？"
    物理内存简单来说就是内存条/内存颗粒所提供的内存，也可以说是厂商在售卖机器时所宣称的内存。

交换空间的大小主要参照物理内存的大小来决定。但这并不是唯一决定因素，您可以按照自己的需求进行调整（比如自己的游戏吃内存就酌情调大），以下表格[来源于Red Hat](https://docs.redhat.com/zh-cn/documentation/red_hat_enterprise_linux/9/html/managing_storage_devices/recommended-system-swap-space_getting-started-with-swap)，**仅供参考**。

| 系统中的 RAM 量          | 推荐的 swap 空间          | 允许休眠时推荐的 swap 空间 |
|--------------------------|---------------------------|----------------------------|
| 小于 2 GiB               | RAM 量的 2 倍             | RAM 量的 3 倍              |
| 2 GiB – 8 GiB            | 与 RAM 量相等             | RAM 量的 2 倍              |
| 8 GiB – 64 GiB           | 至少 4 GiB                | RAM 量的 1.5 倍            |
| 大于 64 GiB              | 至少 4 GiB（视工作负载）  | 不推荐休眠                 |

Swap主要分为交换文件与交换分区两类来源。

## 交换文件

顾名思义，交换文件就是指以文件的形式作为交换空间。通常来说，交换文件名为Swapfile，并置于根目录下。Swapfile与分区方式相比自由度更高，容易调整大小。以下我们会介绍如何配置Swapfile。

```bash
# 创建Swapfile，请自行修改count大小（bs*count即为其MB大小，1GB=1024MB）
# 为保证兼容性，不建议调整bs，不建议使用fallocate
sudo dd if=/dev/zero of=/swapfile bs=1M count=4096

# 设置权限
sudo chmod 600 /swapfile
# 验证权限（如果成功，输出应为 -rw-------）
ls -lh /swapfile

# 设置为Swap格式
sudo mkswap /swapfile

# 临时启用Swapfile
sudo swapon /swapfile

# 修改/etc/fstab，设置开机自动挂载
sudo nano /etc/fstab
```

???+ tip "Btrfs特殊处理"
    如果你使用的是Btrfs，在创建Swapfile**之前**，请执行以下指令，否则会无法启用Swapfile。
    ```bash
    # 创建空文件
    sudo truncate -s 0 /swapfile

    # 禁用CoW
    sudo chattr +C /swapfile
    
    # 禁用压缩
    sudo btrfs property set /swapfile compression none
    ```

之后，在`/etc/fstab`追加`/swapfile  none  swap  sw  0  0`即可。

### 扩展Swapfile

在这之后，如果您想要扩大您的Swapfile，您可以执行如下指令。

```bash
# 禁用Swapfile
sudo swapoff /swapfile

# 删除原有Swapfile
sudo rm -f /swapfile

# 再次创建Swapfile，请自行修改count大小（bs*count即为其MB大小，1GB=1024MB）
# 为保证兼容性，不建议调整bs
sudo dd if=/dev/zero of=/swapfile bs=1M count=4096

# 设置权限
sudo chmod 600 /swapfile
# 验证权限（如果成功，输出应为 -rw-------）
ls -lh /swapfile

# 设置为Swap格式
sudo mkswap /swapfile

# 启用Swapfile
sudo swapon /swapfile

```

如果您的Swapfile路径没有改变，您就不需要额外修改`/etc/fstab`。

## 交换分区

或者，您也可以通过在磁盘上划出交换分区的方式来设置交换空间。

首先，请您使用GParted或其他分区工具，在磁盘上腾出一块空闲分区，并将其格式化为Linux Swap Partition。

之后，请运行如下指令。

```bash
# 临时启用Swap
sudo swapon 分区路径

# 查看分区的UUID，请记录下此处的UUID
sudo blkid 分区路径

# 修改/etc/fstab，设置开机自动挂载
sudo nano /etc/fstab
```

之后，在`/etc/fstab`追加`UUID=XXX  none  swap  sw  0  0`即可。

## zram

zram是一种虚拟内存压缩功能，能够使得Linux更好利用RAM。zram的最主要用途即为作交换空间。

我们建议使用`zram-generator`来简化配置流程。

- Debian: `sudo apt install systemd-zram-generator`
- Fedora: `sudo dnf install zram-generator zram-generator-defaults`
- Arch: `sudo pacman -S zram-generator`

???+ tip "Fedora用户福利"
    如果您是Fedora用户，根据[Fedora Wiki](https://fedoraproject.org/wiki/Changes/SwapOnZRAM#Overview_of_the_Feature)，`zram-generator-defaults`已经包含了默认配置。如果您不需要自定义配置，您可以跳过以下步骤。

之后，编辑配置文件：

```bash
sudo nano /etc/systemd/zram-generator.conf
```

并写入：（如下为zram大小为内存的二分之一，最大4096MiB，使用zstd压缩）

```conf
[zram0]
zram-size = min(ram / 2, 4096)
compression-algorithm = zstd
```

之后，重启系统即可。

## Swappiness

Swappiness用于控制系统在内存不足时将数据从物理内存移动到交换空间的积极程度。Swappiness的值范围是0到100，值越高，系统越倾向于使用交换空间。

Swappiness的默认值为60，而对于桌面Linux来说，Swappiness调整为10即可。您也可以根据自己的硬件配置自行调整。

您可以使用`cat /proc/sys/vm/swappiness`来查看您的Swappiness。

修改Swappiness分为临时修改与永久修改。

### 临时修改

```bash
sudo sysctl vm.swappiness=值
```

### 永久修改

```bash
# 编辑/etc/sysctl.d/99-swappiness.conf
sudo nano /etc/sysctl.d/99-swappiness.conf
```

??? question "为什么不建议直接编辑/etc/sysctl.conf？"
    互联网上的部分教程会推荐您直接修改`/etc/sysctl.conf`，但这事实上是在较老版本的发行版中的做法。在现代Linux中，`man sysctl.d`的SYNOPSIS部分已经删除了`/etc/sysctl.conf`，并且明确将`/etc/sysctl.d/*.conf`放置在第一位上。

并修改或追加`vm.swappiness=值`，之后运行`sudo sysctl --system`来使其生效。
