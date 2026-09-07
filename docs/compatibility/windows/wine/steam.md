# Steam

Steam是由Valve于2003年推出的全球最大的数字游戏发行与社交平台之一。它起初只是Valve自家游戏的自动更新工具，现已发展成为一个集游戏购买、下载、社区互动、游戏直播等多种功能于一体的综合性平台。

!!! warning "兼容性"

    在开始之前，我们建议您查阅如下数据库来了解游戏兼容性:

    - [Can We Tux?](https://tux.red/)
    - [Are We Anti-Cheat Yet?（英文）](https://areweanticheatyet.com/)
    - [Can I Play on Linux?（英文）](https://caniplayonlinux.com/)
    - [ProtonDB（英文）](https://www.protondb.com/)

## 安装

Steam在Linux上的安装有十分多样的方法。

### Flathub

Steam拥有[Flathub打包版本](https://flathub.org/zh-Hans/apps/com.valvesoftware.Steam)，能够快速安装。

!!! warning "已知问题"
    Steam的Flathub版本在启动时可能出现`udev-rules`错误。如果您不使用手柄，您可以忽略这条警告。如果您使用手柄，您需要使用包管理器安装`steam-devices`(Debian/RPM Fusion Nonfree/Arch)。

    其他问题，请查阅[Steam Flathub Wiki（英文）](https://github.com/flathub/com.valvesoftware.Steam/wiki)。

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

[Steam官网](https://store.steampowered.com/about/)提供了Debian的安装包。下载安装包后，您可以通过apt或dpkg进行安装：

```
sudo dpkg -i 软件包名
# 或 sudo apt install 软件包名
```

## Proton

Linux上的Steam通过Proton来运行Windows游戏。Proton基于Wine，并集合了DXVK、VKD3D等补丁，使得图形兼容性大幅提升的同时保证了性能损耗的最小。

不同的Proton大版本具有不同的特性，例如部分早期版本对中文支持不完善，会出现“方块字”问题，又或是窗口边框样式简陋等等。要自行选择Proton版本，请在库中选择对应游戏，打开属性-兼容性，勾选“强制使用特定 Steam Play 兼容性工具”，并选择合适的Proton版本。

### Proton GE

而Proton GE是Proton的社区版本，在原版Proton的基础上加入了多种补丁与媒体支持，使得游戏体验更加舒适流畅。以下我们将阐释如何安装Proton GE。

#### Flatpak

如果您的Steam是通过Flatpak安装的，您只需要安装Flatpak补丁即可。

```bash
flatpak install com.valvesoftware.Steam.CompatibilityTool.Proton-GE
```

#### ProtonPlus

您也可以通过[ProtonPlus](https://flathub.org/zh-Hans/apps/com.vysp3r.ProtonPlus)来管理您的Proton。要安装Proton GE，您只需打开下拉框选择版本（建议最新）即可。

???+ note "反作弊"
    安装 Lutris 或者 Steam 后可以用 [ProtonPlus](https://flathub.org/zh-Hans/apps/com.vysp3r.ProtonPlus) 安装[晨曦酒庄 Proton](https://dawn.wine/dawn-winery/dwproton)（dw-proton）来获得对国内二游反作弊的更佳兼容，在兼容层设置内选用下载好的 dw-proton 即可。

!!! warning "网络条件"
    本方法需要通过Github获取Proton GE，因而对网络条件有一定要求。

#### 手动安装

1. 从[Github Releases](https://github.com/GloriousEggroll/proton-ge-custom/releases)获取其发行版本的压缩包
2. 创建并进入`~/.steam/steam/compatibilitytools.d`目录
3. 解压tar包到此目录: `tar -xf GE-Proton*.tar.gz -C ~/.steam/steam/compatibilitytools.d/`

!!! warning "网络条件"
    本方法需要通过Github获取Proton GE，因而对网络条件有一定要求。

---

安装Proton GE后，请按照上述操作应用Proton GE。

## 运行Windows软件

Steam也可以用于运行Windows软件。但我们并**不建议**通过这种方式来运行，而是使用Lutris。

要添加Windows软件，您可以选择上方状态栏的游戏-添加非Steam游戏-浏览，选择对应的安装程序。

安装好程序后，要打开应用，请更改设置-目标：

- Flatpak版本：`~/.var/app/com.valvesoftware.Steam/data/Steam/steamapps/compatdata/游戏Id/pfx/drive_c/` 在该目录下找到安装路径的可执行文件
- 包版本：`~/.local/share/Steam/steamapps/compatdata/游戏Id/pfx/drive_c/` 在该目录下找到安装路径的可执行文件

