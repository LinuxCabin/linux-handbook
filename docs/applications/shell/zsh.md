# Zsh

## 概述

Zsh是一款拥有高度自定义性的[Shell](../../concepts/linux/shell.md)，它具有强大的自动补全、语法高亮，并且由于Oh My Zsh的支持，拥有海量主题与插件，特别适合用于美化。

## 安装

### Zsh

以下命令用于安装Zsh与部分推荐扩展。

Debian系:
```bash
sudo apt install zsh zsh-autosuggestions zsh-syntax-highlighting
```

红帽系
```bash
sudo dnf install zsh zsh-autosuggestions zsh-syntax-highlighting
```

Arch系
```bash
sudo pacman -S zsh zsh-autosuggestions zsh-syntax-highlighting
```

安装好后，您可以运行`chsh -s /bin/zsh`来设置Zsh为默认终端。

???+info "注意"
    部分发行版源的`zsh`包，在初次运行`zsh`时，会询问您想要如何配置`.zshrc`（Zsh的配置文件）。我们建议您输入2来选择`(2)  Populate your ~/.zshrc with the configuration recommended by the system administrator and exit (you will need to edit the file by hand, if so desired).`（默认推荐配置）。

### Oh My Zsh

[Oh My Zsh](https://ohmyz.sh/)能够用于管理`.zshrc`配置文件，简化Zsh的配置过程，并通过丰富的插件和主题生态，极大地提升终端的使用效率和视觉体验。

在安装之前，您首先需要使用包管理器安装Git（包名`git`）。

#### 一键安装

运行以下一键安装脚本即可。

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
# 或者
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```
!!! warning "网络问题"
    该脚本与 https://install.ohmyz.sh 的脚本本质相同，均需要从Github克隆Zsh仓库，因此可能需要较好的网络环境。

#### 手动安装

若您因为网络原因无法使用一键安装，您可以采用手动安装。

```bash
# 克隆仓库（使用gh-proxy以规避网络问题）
git clone https://gh-proxy.com/https://github.com/ohmyzsh/ohmyzsh ~/.oh-my-zsh
# 或者使用Gitee（需要登录）
# git clone https://gitee.com/mirrors/ohmyzsh ~/.oh-my-zsh
# 备份.zshrc
mv ~/.zshrc ~/.zshrc.orig
# 使用Oh My Zsh提供的模板
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
# 应用Oh My Zsh
zsh
```

## 主题

大部分Zsh主题可以在[Github](https://github.com/topics/zsh-theme)上找到，同时，Oh My Zsh也拥有大量的[预置主题](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)。大部分主题均提供了安装脚本，此处我们以[Powerlevel10k](https://github.com/romkatv/powerlevel10k)为例。

??? note "字体"
    Powerlevel10k需要安装以下字体（链接已加速）来确保呈现效果:

    - [MesloLGS NF Regular.ttf](https://gh-proxy.com/https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)
    - [MesloLGS NF Bold.ttf](https://gh-proxy.com/https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf)
    - [MesloLGS NF Italic.ttf](https://gh-proxy.com/https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf)
    - [MesloLGS NF Bold Italic.ttf](https://gh-proxy.com/https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf)

    下载字体后，双击通过桌面环境自带的字体应用安装即可。同时，您可能需要[配置对应终端的字体（Github）](https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k)。


```bash
# 克隆仓库
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ~/powerlevel10k
# 写入.zshrc
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
```
