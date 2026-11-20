# Sway

**Sway的配置文件在`/etc/sway`下，其名称为`config`，应复制到`~/.config/sway`下**。

![sway](https://swaywm.org/logo.png)

[官网](https://swaywm.org/)

[官方视频](https://swaywm.org/intro.webm)

[官方文档](https://github.com/swaywm/sway/wiki)

**注意：Sway 官方不为 NVIDIA 闭源驱动提供支持，使用时需要以 `--unsupported-gpu` 启动**

## 概述

Sway是一个平铺窗口管理器，采用Wayland显示协议，采用[MIT许可证](https://github.com/swaywm/sway?tab=MIT-1-ov-file)发布，常被认为是i3的Wayland版本，[i3](https://hb.linuxcabin.top/desktop/wm/i3/)的配置文件几乎可以直接替代，具体可看官方文档。

## 安装

- Debian系：`sudo apt install sway`
- 红帽系：`sudo dnf install sway`
- Arch系：`sudo pacman -S sway`

## 使用（快捷键）

**Sway的Mod键为Super键（即Win键，Alt左边的键），如果您不喜欢，您可以将配置文件开头的Mod4改为Mod1，可使Mod键变为Alt键**

- Mod+Return 打开终端（默认终端为Foot）
- Mod+Shift+q 关闭窗口
- Mod+d 打开一个启动器（默认为wmenu）
- Mod+Shift+c 重新加载配置文件
- Mod+h/j/k/l 切换窗口焦点（左/下/上/右）
- Mod+f 全屏窗口
- Mod+1~10 切换到工作区
- Mod+Shift+1~10 将窗口切换到另一个工作区

## 配置


您可以使用以下语法配置Mod+一个键打开一个软件：

`bindsym $mod+一个键 exec 软件名称`

您可以使用以下语法配置壁纸（前提是您安装了 swaybg；feh 等在 X11 下常用的壁纸软件在 Wayland 下无法使用）

`output 显示器名称 bg 壁纸存放地址 stretch`

`exec swaybg -i 壁纸存放地址 -m fill`

建议您通过`man sway`和`man swaybg`查看帮助



