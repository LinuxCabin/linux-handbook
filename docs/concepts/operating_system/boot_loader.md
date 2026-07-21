# 引导

英文：Boot Loader

## 概述

引导是计算机启动时，BIOS/UEFI用来寻找并启动操作系统的程序。通常情况下，引导文件为efi格式，并统一存储在ESP分区（一般来说是磁盘分区图最靠左的不大的FAT32分区）中。

???+ note "一般ESP分区的结构"
    ```
    /boot
    ├── efi
    │   └── EFI
    │       ├── BOOT  # Windows的引导
    │       │   ├── BOOTIA32.EFI
    │       │   ├── BOOTX64.EFI
    │       │   ├── fbia32.efi
    │       │   └── fbx64.efi
    │       └── fedora  # Linux的引导
    │           ├── BOOTIA32.CSV
    │           ├── bootuuid.cfg
    │           ├── BOOTX64.CSV
    │           ├── grub.cfg
    │           ├── grubia32.efi
    │           ├── grubx64.efi
    │           ├── mmia32.efi
    │           ├── mmx64.efi
    │           ├── shim.efi
    │           ├── shimia32.efi
    │           └── shimx64.efi
    └── grub2 # GRUB配置
         ├── bootuuid.cfg
         ├── grub.cfg
         └── grubenv


