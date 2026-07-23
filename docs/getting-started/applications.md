# 常用应用

在国产信创政策推动下，大多数日常应用已经推出了Linux原生版本。不过，部分应用可能仍然存在些许问题与功能缺失。我们会在本章列出一些应用以及推荐安装选项。

或者，您也可以通过发行版自带应用商店或第三方应用商店（如[星火应用商店](https://www.spark-app.store/)）进行下载。

## 聊天应用

### QQ

- [官网](https://im.qq.com/index/#/linux)：功能完备，缺点是需手动更新。
- [Flathub](https://flathub.org/zh-Hans/apps/com.qq.QQ)：Flathub版本存在剪贴板、文件拖拽等与宿主机应用联动问题。
- AUR、Nix等版本，较为完备，推荐对应发行版用户优先使用该方式。

???+ "解决方案"
    要解决这一问题，请使用Flatpak安装Flatseal后，找到对应软件，关闭“回退到X11”，并且打开允许访问全部文件。

### 微信

- [官网](https://linux.weixin.qq.com/)：功能完备，缺点是需手动更新
- [Flathub](https://flathub.org/zh-Hans/apps/com.tencent.WeChat)：Flathub版本存在剪贴板、文件拖拽等与宿主机应用联动问题。
- AUR、Nix等版本，较为完备，推荐对应发行版用户优先使用该方式。

## 办公应用

### Office三件套

- [WPS Office](https://flathub.org/zh-Hans/apps/com.wps.Office)、[WPS 365](https://flathub.org/zh-Hans/apps/cn.wps.wps_365)：国产老牌三件套。
- [LibreOffice](https://flathub.org/zh-Hans/apps/org.libreoffice.LibreOffice)：功能强大，广受赞誉。缺点是界面较为复杂。
- [ONLYOFFICE](https://flathub.org/zh-Hans/apps/org.onlyoffice.desktopeditors)： 操作便捷，简单易上手。缺点是部分功能缺少。

### 钉钉

- [官网](https://www.dingtalk.com/download)（仅Debian）
- [Flathub](https://flathub.org/zh-Hans/apps/com.dingtalk.DingTalk)
- AUR等版本，较为完备，推荐对应发行版用户优先使用该方式。

### 飞书

- [官网](https://www.feishu.cn/download)
- [Flathub](https://flathub.org/zh-Hans/apps/cn.feishu.Feishu)
- AUR、Nix等版本，较为完备，推荐对应发行版用户优先使用该方式。

## 影音应用

### QQ音乐

官网不提供Linux客户端，仅有[Flatpak](https://flathub.org/zh-Hans/apps/com.qq.QQmusic)版本。

### 网易云音乐

官网不提供Linux客户端，但提供[Web客户端版本](https://music.163.com/st/webplayer)，与客户端基本无异。

社区也有一些优秀的第三方客户端：

- [NetEase Cloud Music Gtk4](https://flathub.org/zh-Hans/apps/com.github.gmg137.netease-cloud-music-gtk)：Gtk界面，功能强大。
- [Qcm](https://flathub.org/zh-Hans/apps/io.github.hypengw.Qcm)：Material You设计，并且支持Jellyfin。
- [CloudMusicPlayer](https://flathub.org/zh-Hans/apps/io.github.b1ngggg.CloudMusicPlayer)

对于桌面歌词，您可以使用[Desktop Lyric](https://github.com/tuberry/desktop-lyric)（GNOME用户可以直接使用[扩展](https://extensions.gnome.org/extension/4006/desktop-lyric/)）或者[Waylyrics](https://flathub.org/zh-Hans/apps/io.github.waylyrics.Waylyrics)。

### 腾讯视频

腾讯视频在短暂推出Linux版后悄然下架，不过社区用户推出了[重制版](https://bbs.deepin.org.cn/zh/post/297854)（仅Debian）。

### 爱奇艺

官网不提供Linux客户端，不过社区用户推出了[社区版](https://bbs.deepin.org.cn/zh/post/297743)（仅Debian）。

## 专业领域应用

### 图片编辑

#### GIMP

[GIMP](https://flathub.org/zh-Hans/apps/org.gimp.GIMP)（全称GNU Image Manipulation Program，GNU图像处理程序，包名`gimp`），是一款自由、开源、跨平台的位图图像编辑器，常被看作Adobe Photoshop最强大的免费开源替代品。

### 剪辑

#### Kdenlive

[Kdenlive](https://flathub.org/zh-Hans/apps/org.kde.kdenlive)（全称KDE Non-Linear Video Editor，包名`kdenlive`）是免费开源、跨平台的视频编辑器，对Linux支持十分完善。支持多轨道剪辑、丰富特效和广泛格式。具备代理剪辑、自动字幕、多机位、关键帧动画等功能，界面可定制，性能优化，适合从个人到专业的创作需求。

!!! warning "警告"
    Kdenlive的学习成本较高，需要时间上手。

#### DaVinci Resolve (Studio)

[DaVinci Resolve (Studio)](https://www.blackmagicdesign.com/products/davinciresolve)是由Blackmagic Design开发的专业级视频后期制作软件，是将剪辑、调色、视觉特效和音频后期整合于一身的一站式解决方案。

!!! warning "警告"
    尽管提供了Linux版本，DaVinci Resolve (Studio)对Linux支持仍然较差，存在软件依赖、编解码等严重问题。若您在使用中遇到问题，您可以参考这篇[安装指南（Fedora）](https://www.091209.xyz/2026/03/25/davinci-fedora/)。

#### 其他选项

- [Shotcut](https://flathub.org/zh-Hans/apps/org.shotcut.Shotcut)：一款基于MLT框架、免费开源的跨平台视频编辑器。它支持4K分辨率和数百种格式的直接编辑，并提供GPU加速功能。
- [OpenShot](https://flathub.org/zh-Hans/apps/org.openshot.OpenShot)：界面友好，上手简单的入门级非线性编辑器，适合轻量剪辑。
- [Blender VSE](https://flathub.org/zh-Hans/apps/org.blender.Blender)：集成于强大3D软件中的视频序列编辑器，适合专业人士。