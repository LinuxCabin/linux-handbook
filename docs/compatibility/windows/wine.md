# Wine

Wine （“Wine Is Not an Emulator” 的首字母缩写）是一个能够在多种 POSIX-compliant 操作系统（诸如 Linux，macOS 及 BSD 等）上运行 Windows 应用的兼容层。Wine 不是像虚拟机或者模拟器一样模仿内部的 Windows 逻辑，而是將 Windows API 调用翻译成为动态的 POSIX 调用，免除了性能和其他一些行为的内存占用，让你能够干净地集合 Windows 应用到你的桌面。

!!! warning "警告"
    Wine无法保证Windows应用能够完美运行。在使用Wine之前，我们建议您首先到Wine官网的[数据库](https://appdb.winehq.org/)查看所需应用的兼容状况。若兼容性问题较大，我们建议您使用虚拟机方式运行应用。

## 安装

### 原生安装

您可以通过您的包管理器安装Wine（包名`wine`）。

在安装Wine后，我们推荐您一并安装以下软件包（套件）：

- `winetricks`：用于补充Windows软件运行的所需依赖。
- `dxvk`(Debian) / `wine-dxvk`(Fedora)/ `dxvk-bin`(AUR)：DXVK补丁，提供Direct3D 8, 9, 10与11的支持。
- `vkd3d`(Debian/Fedora) / `vkd3d`与`lib32-vkd3d`(Arch)：VKD3D补丁，提供Direct3D 12支持
- `wine-mono`(Fedora/Arch)：Microsoft .NET支持
- `playonlinux`：Wine的GUI界面

安装好后，您可以通过Wine设置选择自己所需的Windows环境、管理Windows应用。或者，您也可以通过PlayOnLinux这样的图形化界面进行管理。

### Lutris

或者，想要更便捷的方法，您也可以使用[Lutris](https://flathub.org/zh-Hans/apps/net.lutris.Lutris)（包名`lutris`）进行安装。

!!! warning "警告"
    Lutris需要从Github下载依赖，在中国大陆网络环境可能遇到阻碍。

安装好Lutris后，首次启动时，Lutris会自动补全Proton, DXVK, VKD3D等依赖。安装好之后，您可以将Windows软件作为游戏添加至库中。

#### 反作弊

安装 Lutris 或者 Steam 后可以用 [ProtonPlus](https://flathub.org/zh-Hans/apps/com.vysp3r.ProtonPlus) 安装[晨曦酒庄 Proton](https://dawn.wine/dawn-winery/dwproton)（dw-proton）来获得对国内二游反作弊的更佳兼容，在兼容层设置内选用下载好的 dw-proton 即可。

> 来自[Li Pengsheng](https://docs.aflare.top/)

### CrossOver

或者，如果您有**钞**能力（写稿时永久授权售价为$494 USD），您可以使用[CrossOver](https://www.codeweavers.com/crossover)运行所需应用。CrossOver拥有商业支持，对Windows应用的兼容性相比较好。

## 已知问题

### 字体

在旧版本Wine中，中文字体可能出现“口口口”的显示问题。关于这个问题的解决方案也较为杂乱，您可以参考[这篇博客](https://www.cnblogs.com/jee-cai/p/14095217.html)，通过修改注册表或者WineTricks的方式补全中文字体。

在新版本Wine中，该问题已被基本修复。