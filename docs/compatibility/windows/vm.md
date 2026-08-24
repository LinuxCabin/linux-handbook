# 虚拟机

## 概述

虚拟机（Virtual Machine）指一种特殊的软件，可以在计算机系统中建立一种环境，用户可以基于虚拟机这个软件所建立的特殊环境来运行其它软件。虚拟机通过系统的软件模拟功能具有完整硬件系统功能。

简单来说，就是运行在一个完全隔离环境中的完整计算机系统，能提供物理计算机的功能。 

在Linux中，你可能要使用一些wine无法兼容的Windows独占软件，但当你无法放弃或者没有平替时，又该如何使用？此时，虚拟机便是最好的解决方案。

???+ info "在Linux上主流的Windows虚拟机方案"
    - VirtualBox：图形化最完善，最开箱即用，性能提升需要搭配KVM使用，但KVM支持不够完善
    - VMware：与VirtualBox类似
    - QEMU：最强大，完美支持KVM，支持直通，但需要使用大量CLI，virt-manager逻辑复杂，上手难度大
    - KVM：内核模块，一般不直接使用
    - WinBoat：用容器化完整安装Windows，但暂无图形加速，且项目处于早期阶段

    一般情况下，QEMU和VirtualBox是常见选择。

---

## QEMU方案

### 安装

Debian系：
```bash
sudo apt install qemu-system qemu-utils
```

红帽系：
```bash
sudo dnf install qemu
```

Arch系：
```bash
sudo pacman -S qemu-full  #或 qemu-base，qemu-desktop
```

!!! warning "注意事项"
    Debian系： `qemu-system` 包含系统级模拟， `qemu-utils` 包含 `qemu-img` 等磁盘管理工具。若需完整模拟器支持，可安装 `qemu-system-*` 。

    红帽系：也可通过安装 `@virtualization` 来一次性安装QEMU、KVM及管理工具。

    Arch系： `qemu-full` 是功能最全的包， `qemu-base` 是不含GUI的精简版； `qemu-desktop` 默认只包含x86_64模拟。

### 使用（CLI）

首先，在使用QEMU前，我们需要创建一个QEMU磁盘文件

```bash
# 此处示例为qcow2格式，64G大小
qemu-img create -f qcow2 [磁盘文件路径]/windows_disk.qcow2 64G
```

然后使用以下参数从iso启动

```bash
qemu-system-x86_64 \  # 指定为x86_64的模拟
  -enable-kvm \  # 使用KVM以加速
  -cpu host \  # 将主机的 CPU 型号和特性直接传递给虚拟机，以获得最佳性能
  -smp 4 \  # 分配 4 个 CPU 核心给虚拟机
  -m 4096 \  # 分配4096MB（4GB）内存给虚拟机，可使用参数4G
  -device usb-tablet \  # 解决鼠标坐标错位的关键。它模拟一个USB绘图板（或触控屏），使用绝对坐标定位，这样鼠标指针在宿主机和虚拟机内就能完全同步
  -drive file=[磁盘文件路径]/windows_disk.qcow2,if=virtio,format=qcow2 \  # 需指向创建的QEMU磁盘文件路径
  -cdrom [Window镜像路径]/windows.iso \  # 需指向Windows ISO安装文件
  -boot order=d \  # 设置从光驱启动
  -nic user,model=virtio-net-pci \  # 网络，此处使用virt-IO
```

安装完成后，可以删去 `-cdrom` 和 `-boot` 行。

### 关于更多

因本手册专业性限制，建议另寻专门性教程进行学习

- [QEMU官方文档（英文）](https://qemu.readthedocs.io/en/master/)

---

## VirtualBox方案

### 安装

Debian 系：
```bash
sudo apt install linux-headers-generic
sudo apt install virtualbox
```

#### 红帽系：
```bash
sudo dnf install kernel-devel kernel-headers
sudo dnf install virtualbox
```

#### Arch 系：
```bash
sudo pacman -S linux-headers
sudo pacman -S virtualbox
```

!!! info "安装过程"
    有关更详细的安装过程和安装中可能出现的问题，请参见 [VirtualBox](../../applications/virtualization/virtualbox.md) 页面。

### 使用

按照图形化指引进行即可。
