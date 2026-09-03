# 在 Proton (Wine) 上运行 Adobe 软件

感谢 [Phiality](https://github.com/PhialsBasement) 的[补丁](https://github.com/ValveSoftware/wine/pull/310)，在 [Wine 兼容层](../compatibility/windows/wine.md) 上运行 Adobe 软件变得可能。

在这篇教程里，我们使用 Adobe Photoshop 2021 作为演示。

## 需要的文件

我们显然需要两个文件，修改好的 Proton 和 Photoshop 。

[修改好的 Proton 分支](https://github.com/PhialsBasement/wine-adobe-installers)可以在[这里](https://github.com/PhialsBasement/wine-adobe-installers/releases/download/proton-10.0-adobe/proton-wine-adobe-linux-x86_64.tar.xz)下载：
``
https://github.com/PhialsBasement/wine-adobe-installers/releases/download/proton-10.0-adobe/proton-wine-adobe-linux-x86_64.tar.xz
``

至于 Adobe Photoshop 2021 安装文件... 
我不想被 DMCA，你需要自己找资源。也许去 Internet Archive 那里看看？

## 安装

### 解压 Adobe Photoshop 安装文件
```bash
# 前往安装文件压缩包的位置，一般是 Downloads 文件夹
cd ~/Downloads

# 解压安装文件，你的文件名可能与此处不同
unzip 'Adobe Photoshop 2021 v22.5.1.441 (x64) Multilingual.zip'
```

### 解压 Wine
```bash
# 创建放置 Wine 的文件夹
mkdir -p ~/adobe-wine

# 前往 Wine 压缩包的位置，一般是 Downloads 文件夹
cd ~/Downloads

# 解压 Wine 到刚才创建的文件夹
tar xf proton-wine-adobe-linux-x86_64.tar.xz -C ~/adobe-wine
```

### 启动 Adobe Photoshop 安装程序
```bash
# 设置环境变量：为了方便管理和避免冲突，将 Wine 的数据存放在别的地方
export WINEPREFIX=~/.adobe-prefix

# 安装 Adobe Photoshop
~/adobe-wine/bin/wine ~/Downloads/'Adobe Photoshop 2021 v22.5.1.441 (x64) Multilingual'/Set-up.exe
```

## 使用

### 启动 Adobe Photoshop
```bash
# 用和安装时相同的数据位置
export WINEPREFIX=~/.adobe-prefix

# 启动 Adobe Photoshop
~/adobe-wine/bin/wine photoshop
```

#### 启动脚本
如果觉得繁琐，可以写一个 shell 脚本并放入 PATH 中。
```bash
nano ~/.local/bin/adobeps
```

在里面写入：
```bash
#!/bin/sh
export WINEPREFIX=~/.adobe-prefix
~/adobe-wine/bin/wine photoshop
```

赋予执行权限。
```bash
chmod 755 ~/.local/bin/adobeps
```

现在，在终端或者桌面环境的启动菜单里打开 `adobeps` 就可以启动 Photoshop 了。

## 有关更多

- [原补丁 Pull Request](https://github.com/ValveSoftware/wine/pull/310)

- [修改的 Wine 分支仓库](https://github.com/PhialsBasement/wine-adobe-installers)
