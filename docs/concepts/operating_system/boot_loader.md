# 引导

英文：Boot Loader

## 概述

引导是计算机启动时，[BIOS/UEFI](./bios.md)用来寻找并启动操作系统的程序。通常情况下，引导文件为efi格式，并统一存储在ESP分区（一般来说是磁盘分区图最靠左的不大的FAT32分区）中。

大多数Linux发行版使用GRUB作为引导。要美化引导，请参阅[引导美化](../../advanced/boot_loader.md)。

???+ note "一般ESP分区的结构"
    **ESP目录结构可能因挂载点不同存在差异，请自行替换下方教程路径。**

    ```
    /boot
    ├── efi
    │   ├── BOOT  # Windows的引导
    │   │   ├── BOOTIA32.EFI
    │   │   ├── BOOTX64.EFI
    │   │   ├── fbia32.efi
    │   │   └── fbx64.efi
    │   └── fedora  # Linux的引导
    │       ├── BOOTIA32.CSV
    │       ├── bootuuid.cfg
    │       ├── BOOTX64.CSV
    │       ├── grub.cfg
    │       ├── grubia32.efi
    │       ├── grubx64.efi
    │       ├── mmia32.efi
    │       ├── mmx64.efi
    │       ├── shim.efi
    │       ├── shimia32.efi
    │       └── shimx64.efi
    └── grub # GRUB配置，部分发行版为grub2
         ├── bootuuid.cfg
         ├── grub.cfg
         └── grubenv
    ```