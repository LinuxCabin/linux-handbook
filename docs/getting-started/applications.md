# 常用应用

在国产信创政策推动下，大多数日常应用已经推出了Linux原生版本。不过，部分应用可能仍然存在些许问题与功能缺失。我们会在本章列出一些应用以及推荐安装选项。

或者，您也可以通过发行版自带应用商店或第三方应用商店（如[星火应用商店](https://www.spark-app.store/)）进行下载

## 聊天应用

### QQ

- [官网](https://im.qq.com/index/#/linux)：功能完备，缺点是需手动更新。
- [Flathub](https://flathub.org/en/apps/com.qq.QQ)：Flathub版本存在剪贴板、文件拖拽等与宿主机应用联动问题。
- AUR、Nix等版本，较为完备，推荐对应发行版用户优先使用该方式。

???+ "解决方案"
    要解决这一问题，请使用Flatpak安装Flatseal后，找到对应软件，关闭“回退到X11”，并且打开允许访问全部文件。

### 微信

- [官网](https://linux.weixin.qq.com/)：功能完备，缺点是需手动更新
- [Flathub](https://flathub.org/en/apps/com.tencent.WeChat)：Flathub版本存在剪贴板、文件拖拽等与宿主机应用联动问题。
- AUR、Nix等版本，较为完备，推荐对应发行版用户优先使用该方式。

## 办公应用

### Office三件套

- [WPS Office](https://flathub.org/en/apps/com.wps.Office)、[WPS 365](https://flathub.org/en/apps/cn.wps.wps_365)：国产老牌三件套。
- [LibreOffice](https://flathub.org/en/apps/org.libreoffice.LibreOffice)：功能强大，广受赞誉。缺点是界面较为复杂。
- [ONLYOFFICE](https://flathub.org/en/apps/org.onlyoffice.desktopeditors)： 操作便捷，简单易上手。缺点是部分功能缺少。

### 钉钉

- [官网](https://www.dingtalk.com/download)（仅Debian）
- [Flathub](https://flathub.org/en/apps/com.dingtalk.DingTalk)
- AUR等版本，较为完备，推荐对应发行版用户优先使用该方式。

### 飞书

- [官网](https://www.feishu.cn/download)
- [Flathub](https://flathub.org/en/apps/cn.feishu.Feishu)
- AUR、Nix等版本，较为完备，推荐对应发行版用户优先使用该方式。

## 影音应用

### QQ音乐

官网不提供Linux客户端，仅有[Flatpak](https://flathub.org/en/apps/com.qq.QQmusic)版本。

### 网易云音乐

官网不提供Linux客户端，但提供[Web客户端版本](https://music.163.com/st/webplayer)，与客户端基本无异。

社区也有一些优秀的第三方客户端：

- [NetEase Cloud Music Gtk4](https://flathub.org/en/apps/com.github.gmg137.netease-cloud-music-gtk)：Gtk界面，功能强大。
- [Qcm](https://flathub.org/en/apps/io.github.hypengw.Qcm)：Material You设计，并且支持Jellyfin。
- [CloudMusicPlayer](https://flathub.org/en/apps/io.github.b1ngggg.CloudMusicPlayer)

对于桌面歌词，您可以使用[Desktop Lyric](https://github.com/tuberry/desktop-lyric)（GNOME用户可以直接使用[扩展](https://extensions.gnome.org/extension/4006/desktop-lyric/)）或者[Waylyrics](https://flathub.org/en/apps/io.github.waylyrics.Waylyrics)。

### 腾讯视频

腾讯视频在短暂推出Linux版后悄然下架，不过社区用户推出了[重制版](https://bbs.deepin.org.cn/zh/post/297854)（仅Debian）。

### 爱奇艺

官网不提供Linux客户端，不过社区用户推出了[社区版](https://bbs.deepin.org.cn/zh/post/297743)（仅Debian）。

