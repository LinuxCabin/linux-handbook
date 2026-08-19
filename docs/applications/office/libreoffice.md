# LibreOffice

[LibreOffice](https://www.libreoffice.org/)是一款免费、开源的办公套件，包含Writer（文档）、Calc（表格）、Impress（演示）等组件。它跨平台支持Windows、macOS和Linux，兼容Microsoft Office格式，由全球社区驱动，持续更新，是替代商业办公软件的首选之一。缺点是界面较为复杂。

## 安装

- Debian系: `sudo apt install libreoffice`
- 红帽系: `sudo dnf install libreoffice`
- Arch系: 
    ```bash
    # 稳定版本
    sudo pacman -S libreoffice-still

    # 前沿版本
    sudo pacman -S libreoffice-fresh 
    ```
- [Flatpak版本](https://flathub.org/zh-Hans/apps/org.libreoffice.LibreOffice): `sudo flatpak install org.libreoffice.LibreOffice`
