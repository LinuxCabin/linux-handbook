# 应用

在国产信创政策推动下，大多数日常应用已经推出了Linux原生版本。不过，部分应用可能仍然存在些许问题与功能缺失。我们会在本章列出一些应用以及推荐安装选项。

或者，您也可以通过发行版自带应用商店或第三方应用商店（如[星火应用商店](https://www.spark-app.store/)）进行下载。

## 安装注意事项

### 软件包选择
  - Debian 系: Debian, Mint, Ubuntu, Kubuntu等 => `deb`
  - 红帽系: Fedora, RHEL, Rocky等 => `rpm`
  - Arch 系: 通常不需要用包(`pacman`)安装
### 安装软件包

> 某些桌面环境支持双击安装包进行安装。

#### Debian 系
使用 `apt` 或 `dpkg` 装 `deb` 包

```bash
# 这里比如说我下载了一个 Wechat
sudo apt install ./WeChatLinux_x86_64.deb -y
# 必须要写 ./ 说明是当前目录的
# 或者也可以用dpkg
sudo dpkg -i ./WeChatLinux_x86_64.deb
```
#### 红帽系
使用 `dnf` 装 `rpm` 包

```bash
sudo dnf install ./WeChatLinux_x86_64.rpm -y
```

#### Arch 系

使用 `pacman` 装 `pacman` 包

```bash
sudo pacman -U pacman包
```
