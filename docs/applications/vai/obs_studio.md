# OBS Studio

![md Logo](https://obsproject.com/assets/images/new_icon_small-r.png)

## 概述

全称：Open Broadcaster Software，开源广播软件（直译）
OBS Studio 同时是一款视频录制器和一款推流器。它还有“合成器”的功能，允许将多个输入源合并到同一个输出中————然后发送到视频流服务器或保存为文件。

OBS Studio 完全免费，灵活可定制，还有庞大的插件库和社区支持。

## 安装
可以通过 Flatpak，Snap 等安装 OBS Stuio，也可以通过包管理器直接安装 OBS Studio。

!!! info "注意"
    应该先在发行版提供的应用商店里搜一下 ``OBS Studio``。如果搜到了，最安全的方法是安装应用商店里的那个，因为通常来说发行版会管理好一切，开箱即用。

### Flatpak（推荐）
```bash
flatpak install com.obsproject.Studio
```

### Snap（在 Ubuntu 下推荐）
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
我们需要添加一个屏幕捕捉源。在 OBS 窗口下方的 **来源** 中，点击 **+** 号，选择 **屏幕采集(Pipewire)** ，点击 **OK** 。电脑可能会问您诸如 “是否允许该应用录制屏幕” 的问题，选择允许。现在您应该可以在新弹出的窗口上看到目前屏幕的内容，点击 **OK** 来保存设定。

### 视频质量
OBS Studio 默认输出 1080p ，最高 2500 kbps 的视频。若要更改输出画质，前往 OBS 窗口的右下角，点击 **设置**，在弹出的窗口的左侧栏目中点击 **视频**，将右侧的 **输出分辨率** 改为想要的值。再点击左侧栏目的 **输出**，将右侧的 **视频比特率** 改为想要的值，点击右下角的 **完成**。

## 使用

点击**开始录制**或**开始直播**，在完成后点击**停止录制**或**停止直播**。

如想暂停录制，点击 **停止录制** *旁边* 的暂停键以暂停。再点一下以继续录制，或点击**停止录制**来结束。

## 关于更多

- [官方网站](https://obsproject.com/)