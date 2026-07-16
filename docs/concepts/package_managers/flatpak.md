# Flatpak

## 解释

Flatpak是Linux新一代跨平台软件安装解决方案。它通过沙箱设计，将软件与宿主机隔离，从而保证兼容性与安全性

!!! warning "已知问题"
    Flatpak与宿主机互通目前不够完善，例如QQ的剪贴板问题等。

    要解决这一问题，请使用Flatpak安装Flatseal后，找到对应软件，关闭“回退到X11”。
    
    不过尽管如此，大多数软件的表现均与包管理器版本无较大差别。

## 实践

在您使用Flatpak之前，请确保您已经使用您的系统包管理器安装了`flatpak`包，并添加了Flathub软件源。

???+ info "Flathub缓存"
    国内目前仅USTC与SJTUG有Flathub缓存。

     - USTC: https://mirrors.ustc.edu.cn/help/flathub.html
    
     - MirrorZ: https://help.mirrors.cernet.edu.cn/flathub


以下是一些较为常见的Flatpak指令。

1. `flatpak install xxx` 安装某个Flatpak包（可列举多个）
2. `flatpak remove xxx` 卸载某个Flatpak包（可列举多个）
3. `flatpak update (xxx)` 升级全部/某个Flatpak包

我们此处不列出关于构建、修改应用权限等指令，您可以运行 `flatpak --help` 来查看。推荐使用Flatseal管理应用权限。

建议参考来自Linux中国的[Flatpak 新手指南](https://zhuanlan.zhihu.com/p/55299546)。