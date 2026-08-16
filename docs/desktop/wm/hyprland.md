# Hyprland

![Hyprland](../../img/hyprland.svg)


[官方Wiki（英文）](https://wiki.hypr.land/)

配置文件: `~/.config/hypr/hyprland.lua`

## 概述

Hyprland 是一款在 Linux 社区，尤其是喜欢定制桌面环境的用户中非常热门的**动态平铺 Wayland 合成器**。它之所以特别，是因为它试图在强大的功能、炫酷的视觉效果和高度可定制性之间找到一个很好的平衡点。

![Hyprland](https://hypr.land/ricing_competitions/1/flicko.webp)

## 特性

Hyprland拥有相对惊艳的视觉效果，并支持动态平铺窗口，能够自动排列并充分利用屏幕空间。它支持多种平铺布局，如 dwindle（二分平铺）和 master（主从布局），并且可以为不同的工作区设置独立的布局，并通过自定义渲染器，能提供流畅的窗口动画、圆角等效果。

在美观的同时，Hyprland同时拥有极其强大的定制性，其修改的配置文件在保存时会自动重新热加载。且支持插件扩展，并提供了基于socket的IPC机制，方便其他程序与 Hyprland 交互，实现深度定制。

!!! warning "NVIDIA 注意事项"
    由于NVIDIA对Wayland的实现问题，Hyprland官方对NVIDIA显卡的是不受支持的 (unsupported)。虽然有大量用户成功使用，但其配置过程中可能会遇到各种问题。如果你使用 NVIDIA 显卡，建议先阅读官方的 [NVIDIA 专页（英文）](https://wiki.hypr.land/Nvidia/)。

## 安装

在安装之前，我们建议您首先选择好适合的桌面外壳。

我们建议您参照[Hyprland的官方Wiki（英文）](https://wiki.hypr.land/Getting-Started/Installation/)进行安装。在安装Hyprland后，您需要一并安装好桌面外壳。

???+ tip "DMS福利"
    如果您选择DMS作为桌面外壳，您可以直接通过其一键脚本连带安装Hyprland。详情见[桌面外壳](../desktop.md#_5)。