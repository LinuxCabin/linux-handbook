# 分类

欢迎来到桌面页面，我们在这里整理了主流的桌面环境，窗口管理器，dotfiles，旨在帮助您选择最适合你的图形化环境。

当前主流Linux桌面配置可以分为以下两类。

## 传统桌面

桌面环境（有时称为桌面管理器）是对图形化桌面的实现。通常由多个软件组成。一个桌面环境中的软件共享同一个图形用户界面。在一个典型的桌面环境中，这些软件提供给计算机用户窗口，文件夹，工具栏，壁纸、图标以及像拖放等图形化服务。不同桌面环境在设计和功能上的特性和理念，会赋予其与众不同的外观和使用体验。

???+ example "一些常见的DE"
    - KDE (K Desktop Environment): 贴近Windows操作逻辑，有高度的自定义性与丰富主题
    ![KDE](https://fedoraproject.org/assets/images/kde-edition/background_plasma.png)
    - GNOME: 贴近macOS界面，优雅、简洁，有多样的扩展（可能需要安装某些扩展、软件包来获得正常桌面体验）
    ![GNOME](https://fedoraproject.org/assets/images/workstation_framework.webp)
    - COSMIC: 拥有优秀的窗口管理机制，自定义性强
    ![COSMIC](https://fedoraproject.org/assets/images/spins/screenshot-cosmic.jpg)

## 平铺桌面

平铺桌面简单来说就是不允许窗口堆叠（如下图），只允许窗口铺展开摆放。

![Untiling](../img/untiling.png)

一套完整的平铺桌面主要由以下三部分组成。

### 窗口管理器

英文：Window Manager (WM)

窗口管理器是在图形用户界面中，控制窗口位置与外观的软件（管理窗口的放置、配色等等）。 许多窗口管理器是为了桌面环境编写，与桌面环境一同发布的，例如被GNOME使用的Mutter。同时也存在不少独立的窗口管理器，如Openbox、Awesome等。大部分窗口管理器是针对Linux、BSD等操作系统设计编写的，用户可以通过选择窗口管理器更改电脑的图形用户界面外观和使用方式。 

传送门：[ArchWiki](https://wiki.archlinuxcn.org/wiki/%E7%AA%97%E5%8F%A3%E7%AE%A1%E7%90%86%E5%99%A8)

### 桌面外壳

英文: Desktop Shell

狭义来看，桌面外壳是指在**平铺窗口管理器**中，提供用户界面的应用套件（例如GNOME预装应用等）。

???+ example "常见的桌面外壳"
    - DMS (Dank Material Shell): 目前最广为人知的桌面外壳，采用Material You设计理念，现代而优雅。
    ![DMS](https://danklinux.com/img/desktoplight.png)
    ??? info "安装教程"
        我们建议您使用[DankInstall](https://danklinux.com/docs/dankinstall)，即其一键脚本。该脚本不仅提供了桌面外壳的安装，还内置了Hyprland/Niri的安装功能，省心省力。

        ```bash
        sudo -v && curl -fsSL https://install.danklinux.com | sh -s -- \
        -c hyprland -t kitty --include-deps dms-greeter --replace-configs-all -y
        ```

    - Noctalia: 操作顺滑，可自定义性高。
    ![Noctalia](https://noctalia.dev/_app/immutable/assets/lemmy.D-o_kYQM.webp)
        [安装教程（英文）](https://docs.noctalia.dev/v5/getting-started/installation)
    ...

### Dotfiles

???+info "特别注意"
    此处的dotfiles特指一种窗口管理器的配置集合，如end-4，dms等类似的配置集

与DE（桌面环境）不同，WM（窗口管理器）通常不会给出一个默认的开箱即用配置，通常为了满足审美和操作便捷程度，就需要自定义WM的配置文件，然而，这并不是一个很小的工作量，甚至要求一定的bash和lua基础。而部分人本着贡献社区的理念，开源了他们调整好的WM配置文件，这就是dotfiles。dotfiles可以大大减少配置WM的工作量，并且获得一个相对不错的主题效果。

目前，较有名的dotfiles有dms、end-4、ml4w。
