# OBS Studio
<!-- TODO: L75, L115 -->

![Markdown Logo](https://obsproject.com/assets/images/new_icon_small-r.png)

全称：Open Broadcaster Software，开源广播软件（直译）

## 概述

OBS Studio 同时是一款视频录制器和一款推流器。它还有“合成器”的功能，允许将多个输入源合并到同一个输出中——然后发送到视频流服务器或保存为文件。

OBS Studio 完全免费，灵活可定制，还有庞大的插件库和社区支持。

## 安装
可以通过 [Flatpak](../../concepts/package_managers/flatpak.md) 和 Snap 安装 OBS Stuio，也可以通过传统包管理器直接安装 OBS Studio。

???+ note "一键安装..."
    在应用商店（如果有的话）里搜一下 ``OBS Studio``。如果搜到了，最安全的方法是安装应用商店里的那个，因为通常来说发行版会管理好一切，开箱即用。

### Flatpak（推荐）
```bash
flatpak install com.obsproject.Studio
```

### Snap
```bash
sudo snap install obs-studio
```

### 包管理器
- Debian系：
    ```bash
    sudo apt install obs-studio
    ```
- Redhat系：
    ```bash
    sudo yum install obs-studio
    ```

## 配置

### 录制屏幕
在 **来源** 中，点击 **+** 号，选择 **屏幕采集(Pipewire)** ，点击 **OK** 。

???+ info "如果收到了弹窗..."
     桌面管理器可能会问您诸如 “是否允许该应用录制屏幕” 的问题，选择允许。这是安全的，只有 OBS Studio 能看见屏幕上的内容。

现在您应该可以在新弹出的窗口上看到目前屏幕的内容，再点击一次 **OK** 来保存设定。

### 视频质量
OBS Studio 默认输出 1080p ，（视您的硬件）最高 6000 kbps 的视频。

#### 更改输出分辨率
若要更改输出分辨率，点击右下角的 **设置**，在设置的左侧栏目中点击 **视频**，将右侧的 **输出分辨率** 改为想要的值，点击右下角的 **完成**。

#### 更改输出比特率
前往 **设置**，点击左侧栏目的 **输出**，将右侧的 **视频比特率** 改为想要的值，点击右下角的 **完成**。

### 快捷键

前往 **设置**，左侧栏目的 **快捷键**，点击项目后的输入框，在键盘和/或鼠标（是的，可以绑定鼠标侧键）按下你想要设置的键。
???+ note "不工作？"
     如果快捷键在 OBS 窗口外不工作，很有可能您使用 Wayland 显示服务器。OBS 无法在后台访问键盘，这是 Wayland 为了安全而作出的限制。有利用 Wayland 原生接口的插件，参阅 [**Wayland 下的快捷键**](#wayland) 章节。

## 使用

点击 **开始录制** 或 **开始直播** ，在完成后点击** 停止录制** 或 **停止直播** 。

如想暂停录制，点击 **停止录制** *旁边* 的暂停键以暂停。再点一下以继续录制，或点击** 停止录制** 来结束。

## 高级

### 硬件加速（ AMD / Intel ）

<!-- so nvidia fk u
我没有nv显卡，无法测试。-->

如果 OBS Studio 使用传统包管理器安装，安装 ``ffmpeg`` 。
```bash
sudo apt install ffmpeg
# 或
sudo yum install ffmpeg
```
您可能需要重启电脑。

如果 OBS Studio 使用 Flatpak 或 Snap 安装，不用任何操作，依赖已经被管理好了。

??? question "可是我看不到硬件加速的选项耶？"
     把输出模式改成 **高级** ，在 **直播** 和 **录像** 的视频编码器里选择 **"FFmpeg VAAPI"** 开头的选项。

### Wayland 下的快捷键

<!-- 裸金属运行的obs需要手动编译该插件，受限于coc无法提供教程 -->

如果 OBS Studio 使用 Flatpak 安装，安装 ``com.obsproject.Studio.Plugin.WaylandHotkeys`` 。

```bash
flatpak install com.obsproject.Studio.Plugin.WaylandHotkeys
```

安装完成后启动 OBS Studio，您应该会看到一个设置快捷键的弹窗。

!!! info "注意"
    OBS 内置的快捷键设置没有效果，应该去系统设置里更改快捷键。

???+ note "添加，更改，移除快捷键"
     **GNOME**

     打开系统设置，导航至 **应用程序** - **OBS Studio** ，点击 **全局快捷键** 。

     **KDE Plasma**

     打开系统设置，导航至 **键盘** - **快捷键**，在列表里选择 **OBS Studio** 。

<!-- TODO: 我需要使用中文操作系统的人帮我验证翻译名。-->

## 关于更多

- [官方网站](https://obsproject.com/)： ``https://obsproject.com/``
- [官方文档](https://docs.obsproject.com/)： ``https://docs.obsproject.com/``
- 社区文档
    - [OBS Studio 完全新手指南](https://www.obs.com.cn/post/140.html)： ``https://www.obs.com.cn/post/140.html``    ***这不是官网！OBS Studio 没有“中文官网”！**
