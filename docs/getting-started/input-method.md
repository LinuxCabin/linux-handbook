# 输入法

Linux下的输入法框架主要有以下两种选择：

 - Fcitx (包名`fcitx5`): 轻量，启动快，建议KDE、Sway、Hyprland等用户使用  
 - IBus (包名`ibus`): 自定义功能有限，但与GNOME深度集成，建议GNOME用户使用

您可以通过您的包管理器安装这两种输入法框架之一。

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

### Fcitx

安装后，请打开Fcitx5配置，点击右侧加号、箭头来添加Rime或调整输入法顺序。若没有出现，请您重启系统。

若您是KDE用户，请打开KDE设置，搜索虚拟键盘，并选中“Fcitx5”。

若您是GNOME用户，您需要额外安装`gnome-tweaks`，在“优化-开机启动程序”中添加“Fcitx5”。我们同时建议您安装这个[GNOME扩展](https://extensions.gnome.org/extension/261/kimpanel/)。

若您是其他桌面环境用户，您也可以通过设置XDG自动启动或编辑配置文件的方式来使得Fcitx5开机自启。（WIP）


### IBus

IBus会自动与GNOME集成，所以GNOME用户无须进行额外操作。

若您是KDE用户，请打开KDE设置，搜索虚拟键盘，并选中“IBus”。

---

## 中文输入法框架

对于中文输入法框架，由于IBus默认的拼音输入差强人意，并且其他输入框架也大多字库不全或过时。因此，我们推荐您使用中州韵 (Rime)，其能够安装多种词库，并且有强大的输入引擎。

### 安装Rime

若您使用Fcitx，您需要安装：

```bash
fcitx5-chinese-addons fcitx5-rime
```

若您使用IBus，您需要安装：

```bash
ibus-rime
```

安装ibus-rime后，若您是GNOME桌面用户，请打开GNOME设置-键盘-输入源，添加`中文（Rime）`。若没有看到，请重启系统。

!!! warning "已知问题"
    `ibus-rime`在GNOME上经常出现输入法卡住无法调出或无法退出英文模式的状况。若出现，请打开状态栏中输入法的下拉菜单，并重新点击`中文（Rime）`。

### 安装Rime配方

在Rime中，不同的输入方案被称为配方。Rime的配方十分丰富，并且还支持粤语等方言输入配方。

对于简体中文的输入，我们推荐您使用[雾凇拼音](https://github.com/iDvel/rime-ice)。

您可以手动添加Rime配方，也可以通过其提供的Plum工具来添加。在安装配方后，请通过状态栏或在输入框中按“Ctrl+`”或F4来切换输入方案。

#### 使用Plum

以下我们会示范使用Plum安装雾凇拼音。

!!! warning "网络问题"
    Plum会从Github拉取对应配方仓库，所以该方法对网络环境有要求。

以下脚本来自雾凇拼音README.md。

```bash
# 需要安装 git 及 bash
# Windows 下 bash 命令被系统 WSL 占用，进入 git bash 环境再执行以下命令

# 1. 安装 plum
cd ~
git clone https://github.com/rime/plum.git plum

# 2. 安装雾凇拼音到默认客户端（Weasel，Squirrel，iBus-rime），更新词库只要执行这一步，3、4 步不需要。
# 如使用其他客户端请手动指定 rime_dir 变量为对应的用户目录。
# e.g. rime_dir="$HOME/.config/fcitx5/rime" bash rime-install iDvel/rime-ice
cd ~/plum
bash rime-install iDvel/rime-ice

# 3. 双拼用户额外执行，全拼用户跳过。替换「double_pinyin_flypy」为你使用的方案
bash rime-install iDvel/rime-ice:others/recipes/config:schema=double_pinyin_flypy

# 4. 如需万象语法模型，额外执行。替换「rime_ice」为你使用的方案
bash rime-install iDvel/rime-ice:others/recipes/grammar:schema=rime_ice

# 5. 重新部署

# 方案名称
# rime_ice（雾凇拼音、全拼）
# double_pinyin（自然码双拼）
# double_pinyin_flypy（小鹤双拼）
# double_pinyin_mspy（微软双拼）
# double_pinyin_sogou（搜狗双拼）
# double_pinyin_abc（智能 ABC 双拼）
# double_pinyin_jiajia（拼音加加双拼）
# double_pinyin_ziguang（紫光双拼）
```

#### 手动安装

手动安装适合无法访问Github的用户。

首先，您需要通过[加速链接](https://mirror.nju.edu.cn/github-release/iDvel/rime-ice/LatestRelease/full.zip)或[官方链接](https://github.com/iDvel/rime-ice/releases/latest/download/full.zip)下载雾凇拼音的最新构建。

之后，请您进入您的用户目录（IBus位于`~/.config/ibus/rime`，Fcitx5位于`~/.local/share/fcitx5/rime`），删除目录中所有内容，并将压缩包中的文件复制进去。

之后，您需要重新部署Rime（位于状态栏中），或者更简单，注销系统再重新登录。

???+ note "如何进行关闭注音、更改候选词数等设置？"
    Rime不提供GUI界面修改配置，因而所有配置均需要在配置文件中进行更改。

    对于候选词数，请找到用户目录下`default.yaml`中如下配置进行更改：

    ```yaml
    # 菜单
    menu:
    page_size: 5  # 候选词个数
    ```
    雾凇拼音的默认设置下，所有候选词都会被全拼注音。如果你的用户目录里有`rime_ice.schema.yaml`这个文件，打开，将`spelling_hints`和`always_show_comments`两行注释，像下面这样。

    ```yaml
    # 主翻译器，拼音
    translator:
    dictionary: rime_ice           # 挂载词库 rime_ice.dict.yaml
    #  spelling_hints: 8              # corrector.lua ：为了让错音错字提示的 Lua 同时适配全拼双拼，将拼音显示在 comment 中
    #  always_show_comments: true     # corrector.lua ：Rime 默认在 preedit 等于 comment 时取消显示 comment，这里强制一直显示，供 corrector.lua 做判断用。
    initial_quality: 1.2           # 拼音的权重应该比英文大
    ```

    （来自[每一个选项都被全拼注音，如何关闭？](https://github.com/orgs/rime/discussions/1366)）


    每次修改完配置文件，请重新部署Rime（位于状态栏中），或者更简单，注销系统再重新登录。

    更多配置项，您可以参考[Dvel的这篇博客](https://dvel.me/posts/rime-ice/)。