# Steam

Steam是由Valve于2003年推出的全球最大的数字游戏发行与社交平台之一。它起初只是Valve自家游戏的自动更新工具，现已发展成为一个集游戏购买、下载、社区互动、游戏直播等多种功能于一体的综合性平台。

## 安装

Steam在Linux上的安装有十分多样的方法。

### Flathub

Steam拥有[Flathub打包版本](https://flathub.org/zh-Hans/apps/com.valvesoftware.Steam)，能够快速安装。

!!! warning "已知问题"
    Steam的Flathub版本在启动时可能出现`udev-rules`错误。如果您不使用手柄，您可以忽略这条警告。如果您使用手柄，您需要使用包管理器安装`steam-devices`(Debian/RPM Fusion Nonfree/Arch)。

    其他问题，请查阅[Steam Flathub Wiki](https://github.com/flathub/com.valvesoftware.Steam/wiki)。

### 源安装

您也可以通过您的包管理器安装Steam。

#### Debian

```bash
sudo dpkg --add-architecture i386 #添加32位架构支持
sudo apt update
sudo apt install steam
```
#### Fedora

请您首先参照“发行版-红帽系-Fedora”添加RPM Fusion源。

```bash
sudo dnf install steam
```

#### Arch

```bash
sudo pacman -S steam
```

### 包安装

[Steam官网](https://store.steampowered.com/about/)提供了Debian的安装包。下载安装包后，您可以通过dpkg进行安装：

```
sudo dpkg -i 软件包名
```

