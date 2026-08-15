# VS Code / VSCodium

全称: Visual Studio Code

## 概述

Visual Studio Code是由微软开发的开源IDE，因其庞大的扩展市场与广泛的语言支持而闻名，多数的在线IDE基于VSCode二次开发。VSCodium为VSCode的自由版本，削减了微软提供的遥测等服务，不收集用户数据。

???+ question "VSCodium为什么被称作“自由版本”？"
    尽管微软将VSCode的核心代码开源，但诸如扩展市场、同步等功能仍然闭源且由微软掌控，仅仅在微软进行编译时被加入源代码。

![vscode.dev](https://code.visualstudio.com/assets/home/swimlane-anywhere-light.png)

## 安装

!!! warning "警告"
    我们**不推荐您安装该应用的Flatpak版本**。由于Flatpak的容器特性，宿主机的部分开发工具可能需要[特殊处理](https://github.com/flathub/com.visualstudio.code#usage)后才能在Flatpak容器内部使用。

### VSCode

微软官方提供了[Linux版的安装教程](https://code.visualstudio.com/docs/setup/linux)，该教程主要通过添加微软官方软件源的方式来进行安装。您也可以到[VSCode官网](https://code.visualstudio.com/)下载预编译包来安装。社区也构建了其[Flatpak版本](https://flathub.org/zh-Hans/apps/com.visualstudio.code)。

Arch用户可以通过AUR安装`visual-studio-code-bin`。

同时，微软还提供了[网页版VSCode](https://vscode.dev)，在功能上可能略有损失。

### VSCodium

您需要手动前往VSCodium的[Github Releases](https://github.com/VSCodium/vscodium/releases)页面下载安装包，或者使用[Flatpak](https://flathub.org/zh-Hans/apps/com.vscodium.codium)安装。

Arch用户可以通过AUR安装`vscodium-bin`。

## 使用

您可以按下`Ctrl+Shift+P`打开功能面板，进行打开终端、切换语言、预览Markdown等操作。

### 扩展

VSCode的扩展市场涵盖编程语言支持、界面语言支持、IDE插件、界面主题等等扩展（一切皆扩展），您可以根据自己的工作情况按需安装。

对于中文用户来说，您可能需要安装[中文（简体）界面语言包](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)。
