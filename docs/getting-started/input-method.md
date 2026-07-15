# 输入法

Linux下的输入法框架主要有以下两种选择：
 - fcitx5 (包名`fcitx5`): 轻量，启动快，建议KDE、Sway、Hyprland等用户使用
  
 - ibus (包名`ibus`): 自定义功能有限，但与GNOME深度集成，建议GNOME用户使用

您可以通过您的包管理器安装这两种输入法框架。

!!! warning "已知问题"
    由于Wayland显示协议的原因，部分输入法在Electron应用中可能会出现无法输入的状况。我们建议您目前先继续该教程。但是若出现该问题，您可以尝试以下解决方案：
    
    - 方案一：在终端中编辑`/etc/environment`（可输入`sudo nano /etc/environment`），添加如下行：

    ```
    GTK_IM_MODULE=fcitx
    QT_IM_MODULE=fcitx
    XMODIFIERS=@im=fcitx
    SDL_IM_MODULE=fcitx
    ```

    - 方案二：编辑`~/.config/electron-flags.conf`（可在终端中输入`nano ~/.config/electron-flags.conf`），添加如下行：

    ```
    --enable-features=WaylandWindowDecorations
    --ozone-platform-hint=auto
    --enable-wayland-ime
    ```

    或者，您可以参考这篇[知乎教程](https://zhuanlan.zhihu.com/p/690062589)。

## 中文输入法框架

对于中文输入法框架，由于ibus默认的拼音输入差强人意，并且其他输入框架也大多字库不全或过时。因此，我们推荐您使用中州韵 (Rime)，其能够安装多种词库，并且有强大的输入引擎。

### fcitx

若您使用fcitx，请安装以下包：

```bash
fcitx5 fcitx5-chinese-addons fcitx5-rime
```

安装后，请打开fcitx5配置，点击右侧加号、箭头来添加Rime或调整输入法顺序。若没有出现，请您重启系统。

若您是KDE用户，请打开KDE设置，搜索虚拟键盘，并选中“fcitx5”。

若您是GNOME用户，您需要额外安装`gnome-tweaks`，在“优化-开机启动程序”中添加“fcitx5”。我们同时建议您安装这个[GNOME扩展](https://extensions.gnome.org/extension/261/kimpanel/)。

若您是其他桌面环境用户，您也可以通过设置XDG自动启动或编辑配置文件的方式来使得fcitx5开机自启。（WIP）


### ibus

若您使用ibus，请安装以下包：

```bash
ibus ibus-rime
```

安装后，若您是GNOME桌面用户，请打开GNOME设置-键盘-输入源，添加`中文（Rime）`。若没有看到，请重启系统。

!!! warning "已知问题"
    `ibus-rime`在GNOME上经常出现输入法卡住无法调出或无法退出英文模式的状况。若出现，请打开状态栏中输入法的下拉菜单，并重新点击`中文（Rime）`。

若您是KDE用户，请打开KDE设置，搜索虚拟键盘，并选中“ibus”。
