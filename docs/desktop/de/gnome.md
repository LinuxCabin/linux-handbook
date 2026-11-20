# GNOME

全称：GNU Network Object Model Environment

![GNOME](https://www.gnome.org/img/apple-touch-icon.png)

## 概述

GNOME桌面设计以简洁专注为核心理念，采用活动概览替代传统任务栏，实现优雅高效的交互，强调清晰与易用，整体风格现代且高度可定制，较为贴近macOS。

![GNOME桌面](https://www.gnome.org/img/laptop.webp)

## 安装

- Debian: `sudo apt install gnome`
- Fedora: `sudo dnf group install gnome-desktop`
- Arch: `sudo pacman -S gnome`

## 使用

???+ note "找不到应用栏？"
    GNOME默认隐藏应用栏，将鼠标置于屏幕左上角即可换出。以下“扩展”部分会提供优化任务栏逻辑用的扩展。

### gnome-tweaks

GNOME桌面下的窗口默认不带最小化、最大化按钮，并且不提供字体、鼠标等本应能够自定义选项，因此需要您使用包管理器安装`gnome-tweaks`来实现该效果。

安装好后的`gnome-tweaks`在应用列表中呈现为“优化”应用，您可以在其中自定义您的桌面。

最大化、最小化开关位于“窗口”分类下。

### 扩展

GNOME有十分丰富的[扩展商店](https://extensions.gnome.org/)，并且部分扩展对GNOME用户来说称得上必需品。

在初次使用扩展商店时，您需要安装浏览器扩展。或者，您也可以通过使用[Extension Manager](https://flathub.org/zh-Hans/apps/com.mattjakeman.ExtensionManager)应用下载安装并管理您的扩展，免去安装浏览器扩展的繁琐。

- [Chrome/Edge扩展](https://chromewebstore.google.com/detail/gnome-shell-%E9%9B%86%E6%88%90/gphhapmejobijbbhgpjhcjognlahblep)（需科学上网）
- [Firefox扩展](https://addons.mozilla.org/zh-CN/firefox/addon/gnome-shell-integration/)

???+ note "Chrome/Edge免科学上网方法"
    我们为您下载了其crx源文件，并将其放在了[网盘](https://fangapp.lanzout.com/i6KzF3xfzptg)。在下载文件后，我们建议您参照[此教程](https://zhuanlan.zhihu.com/p/361955238)以及下面的讨论区来进行安装。

以下是我们认为使用GNOME的**必备**扩展：

- [AppIndicator and KStatusNotifierItem Support](https://extensions.gnome.org/extension/615/appindicator-support/)（用于显示系统托盘图标）
- [Blur my Shell](https://extensions.gnome.org/extension/3193/blur-my-shell/)（用于桌面毛玻璃效果）
- [Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/)（将应用栏转为悬浮坞，与下面一个扩展二选一即可）
- [Dash to Panel](https://extensions.gnome.org/extension/1160/dash-to-panel/)（将应用栏转化为Windows样式）
- [Input Method Panel](https://extensions.gnome.org/extension/261/kimpanel/)（Fcitx5用户必装）

我们在此也推荐一些好用的扩展：

- [Desktop Lyric](https://extensions.gnome.org/extension/4006/desktop-lyric/)（桌面歌词，可与浏览器、音乐客户端联动）
- [GSConnect](https://extensions.gnome.org/extension/1319/gsconnect/)（手机连接，需配合KDE Connect使用）
- [Daily Bing Wallpaper and Accent Color](https://extensions.gnome.org/extension/8108/daily-bing-wallpaper/)（必应每日壁纸）

为了管理系统扩展，我们推荐您安装[Extension Manager](https://flathub.org/zh-Hans/apps/com.mattjakeman.ExtensionManager)（推荐）或者[Extensions](https://flathub.org/zh-Hans/apps/org.gnome.Extensions)（仅可调整设置项）。

### 主题

GNOME的主题通常需要在 [GNOME-LOOK.ORG](https://www.gnome-look.org/) 中下载。

主题的类别如下图：

![Theme Categories](https://itsfoss.com/content/images/wordpress/2017/10/ubuntu-17-10-changing-theme-800x450.jpeg)

（来自[How to Install and Change GNOME Theme in Linux](https://itsfoss.com/install-switch-themes-gnome-shell/)）

在下载好主题后，您需要将压缩包解压到文件夹并置于以下任意一个文件夹中（按需求选择，用户安装指仅为本用户安装，系统安装则为所有用户安装）：

- 用户安装：`~/.themes/`
- 系统安装：`/usr/share/themes/`（可能需要自行创建）

您可以通过前文安装的`gnome-tweaks`启用主题，也可以按照对应主题下的启用指南来启用。

如果在安装主题后无法选择启用主题，您可以安装扩展[User Themes](https://extensions.gnome.org/extension/19/user-themes/)来解决。

### 顽固图标

若您的GNOME应用栏中出现因卸载终端或其他原因导致的顽固图标，您可以进入`~/Desktop`、`~/.local/share/applications`、`/usr/share/applications`等目录，寻找并删除您不需要的图标所对应的`.desktop`文件。