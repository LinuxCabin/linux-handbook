# QQ

- [官网](https://im.qq.com/index/#/linux)：功能完备，缺点是需手动更新。
- AUR: `yay -S linuxqq`
- [Flathub](https://flathub.org/zh-Hans/apps/com.qq.QQ)：Flathub版本存在剪贴板、文件拖拽等与宿主机应用联动问题。

???+ "解决方案"
    要解决这一问题，请使用Flatpak安装[Flatseal](https://flathub.org/zh-Hans/apps/com.github.tchx84.Flatseal)（用于修改Flatpak应用的权限、参数等）后，找到对应软件，关闭“回退到X11”，并且打开允许访问全部文件。


