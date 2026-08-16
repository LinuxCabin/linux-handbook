# Niri

![Niri](https://docs.akass.cn/niri/logo/niri-logo.svg)

[官方Wiki（英文，Github）](https://github.com/niri-wm/niri/wiki/) [翻译版Wiki](https://docs.akass.cn/niri/)

配置文件: `~/.config/niri/config.kdl`

## 概述

Niri是一个以滚动平铺为核心理念的Wayland合成器。它用Rust编写，将窗口在无限水平长条上按列布局，打开新窗口不会改变现有窗口大小，旨在提供流畅、有组织的工作体验，目前可稳定用于日常使用。

![Niri](https://www.phoronix.net/image.php?id=2026&image=niri_2604_2)


## 安装

在安装之前，我们建议您首先选择好适合的桌面外壳。

具体安装步骤，请参考[Niri的快速入门]（该指南中默认使用DMS作为桌面外壳，若您想要更换，请将其指令中的`dms`替换为其他选择）。

???+ tip "DMS福利"
    如果您选择DMS作为桌面外壳，您也可以直接通过其一键脚本连带安装Niri。详情见[桌面外壳](../desktop.md#_5)。

在安装Niri之后会出现一系列快捷键，我们建议您截图或拍照保存。由于Niri管理的窗口不适于直接使用鼠标拖动，因而您需要记忆一些关键快捷键来管理布局（当然，如果您有触控板，通过多指手势操作，不会部分快捷键也无妨）。

## 使用

### 屏幕共享

在Niri下，部分应用的屏幕共享功能可能失效。解决方法参照下方。

1. 安装`xdg-desktop-portal-hyprland`
2. 修改`/usr/share/xdg-desktop-portal/niri-portals.conf`

```
[preferred]
default=hyprland;gtk;
org.freedesktop.impl.portal.Access=gtk;
org.freedesktop.impl.portal.Notification=gtk;
org.freedesktop.impl.portal.Secret=gnome-keyring;
```

（来自[使用niri，飞书无法共享屏幕](https://forum.archlinuxcn.org/t/topic/15155)）

或者，您也可以试试[解决 Linux niri-wm 上腾讯会议的屏幕共享问题](https://forum.nju-aia.com/t/topic/196)。