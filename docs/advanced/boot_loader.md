# 引导美化

## GRUB

一般来说，多数Linux发行版预装GRUB作为引导器。它非常强大和灵活，能够理解文件系统和内核可执行文件格式。

### 美化

[GNOME-LOOK.ORG](https://www.gnome-look.org/browse?cat=109)与[Github](https://github.com/topics/grub-theme)上均有丰富多样的GRUB主题。

一些主题拥有一键安装脚本，您也可以手动安装——在下载好压缩包后，您需要将其解压到文件夹中，并放置到GRUB的主题目录中。大多数发行版的目录为`/boot/grub/themes`，部分发行版为`/boot/grub2/themes`或其他目录。

之后，您需要编辑GRUB配置文件（`sudo nano /etc/default/grub`），找到以`#GRUB_THEME`开头的一行，将其替换为：
```bash
GRUB_THEME=/boot/grub/themes/主题文件夹/theme.txt
# 一般为theme.txt，部分主题可能不同
```

最后，运行`sudo upgrade-grub`来更新GRUB配置即可。

## rEFInd

rEFInd是作为已停止维护的rEFIt项目的分支而诞生，最初旨在解决非Mac电脑上的UEFI启动问题。它的最大亮点是自动检测能力，能自动识别出系统里的Windows、Linux、macOS等各种操作系统。由于其出色的外观和易用性，它在需要管理复杂多系统启动的用户中非常受欢迎。

!!! warning "适用性"
    rEFInd仅支持UEFI。

### 安装

您需要通过您的包管理器安装`refind` (Debian/Arch) / `rEFInd` (Fedora，注意大小写)。

在安装软件包之后，您需要运行`sudo refind-install`来将其安装到ESP。

安装之后，您需要关闭或手动配置[安全启动](../getting-started/os-basis.md#_3)来保证引导器正常运行。以下我们会示范如何使用shim配置。

首先，您需要通过您的包管理器安装`shim-signed`。

大部分发行版已经预置了签名过的shimx64.efi，您只需要替换以下指令`--shim`后的路径即可。

```bash
sudo refind install --shim /boot/efi/一般为发行版名称/shimx64.efi
# EFI目录可能存在差异
# 或者，您也可以使用/usr/share/shim-signed/shimx64.efi
```

重启电脑后，您会进入MOK Manager界面。

![Access Denied](https://www.091209.xyz/wp-content/uploads/2025/07/image-2.png)

![MOK management](https://www.091209.xyz/wp-content/uploads/2025/07/image-3.png)

请选择OK=>Enroll hash from disk，找到`refind_x64.efi`，OK=>Reboot重启即可。

更多选项，建议您参考[Arch Wiki](https://wiki.archlinuxcn.org/wiki/REFInd)。

!!! warning "警告"
    我们不建议您在安装rEFInd之后贸然卸载GRUB。rEFInd的识别能力有限，若您在安装系统时选择单独分区`/boot`则**可能无法直接通过vmlinuz绕过GRUB启动**。
    
    在部分发行版内，GRUB可能受包管理器保护。

    ??? note "卸载GRUB"
        此处以Fedora为例。要卸载GRUB，首先需要移除系统对GRUB包的保护。

        ```bash
        sudo rm /etc/dnf/protected.d/{shim,grub2*}.conf
        ```

        之后，移除GRUB。

        ```bash
        sudo dnf remove grub* shim*
        ```

### 美化

rEFInd的主题大多于[Github](https://github.com/topics/refind-theme)上发布。

大多数主题拥有一键安装脚本，并提供了手动安装教程。此处只讲解通用的手动安装方法。

首先，请在`/boot/efi/refind`下创建`themes`文件夹，并将主题压缩包解压到一个文件夹后放置于`themes`下。

之后，请编辑`/boot/efi/refind/refind.conf`，添加`include themes/主题文件夹名/theme.conf`行，并删除其他类似主题配置行。

要编辑主题的各项自定义选项，请编辑主题文件夹下的`theme.conf`。
