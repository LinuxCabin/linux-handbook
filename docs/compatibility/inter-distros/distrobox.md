# Distrobox

[Distrobox](https://distrobox.it/)是用于管理镜像的工具，它整合了`podman`、`docker`与`lilipod`，通过虚拟化技术让你能够在容器中无缝运行其他任何Linux发行版，并且能够运行不同发行版所适配的应用。

## 安装

- Debian: `sudo apt install distrobox`
- Fedora: `sudo dnf install distrobox`
- Arch: `sudo pacman -S distrobox`

## 使用

### 换源

在使用之前，我们强烈推荐您为Podman换源。

```bash
sudo nano /etc/containers/registries.conf
```

在文件最下方追加以下内容（来自[Vanilla-Flavors](https://github.com/Vanilla-Flavors/china-image/blob/dev/includes.container/etc/containers/registries.conf.d/mirrors-china.conf)）。

```
# Docker Hub
[[registry]]
prefix = "docker.io"
location = "docker.io"

[[registry.mirror]]
location = "dockerproxy.net"

[[registry.mirror]]
location = "hub1.nat.tf"

[[registry.mirror]]
location = "dockerproxy.cool"

[[registry.mirror]]
location = "docker.kejilion.pro"

[[registry.mirror]]
location = "docker.1ms.run"


# GitHub Container Registry
[[registry]]
prefix = "ghcr.io"
location = "ghcr.io"

[[registry.mirror]]
location = "ghcr.nju.edu.cn"

[[registry.mirror]]
location = "ghcr.dockerproxy.net"

[[registry.mirror]]
location = "ghcr.1ms.run"
```

之后，无论是拉取来自`docker.io`还是`ghcr.io`的镜像，都不必改动镜像地址，直接输入原地址即可。

### 创建并进入容器

```bash
distrobox create --image 镜像地址 --name 名称
```

不过，我们不推荐您直接运行该命令来创建容器。在初次运行容器时，Distrobox会自动为其更新包并安装相应组件，但由于中国大陆的网络环境，您有可能会卡在`Installing basic packages...`这一步。因此，我们需要在容器创建时通过`--pre-init-hooks`参数提前换源。

```bash
distrobox create --image 镜像地址 --name 名称 \
--pre-init-hooks "换源指令"

# 例如：
# distrobox create --name debian-box --image debian:latest \
# --pre-init-hooks "sed -i 's/deb.debian.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apt/sources.list.d/debian.sources && apt update"
```

???+ info "常见发行版镜像地址"
    - Debian: `debian:latest`
    - Ubuntu: `ubuntu:latest`
    - Fedora: `fedora:latest`
    - Arch Linux: `archlinux:latest`

镜像拉取完成后，您可以通过如下命令进入容器：

```bash
distrobox enter 名称
```

或者，您也可以通过[Ptyxis](https://flathub.org/zh-Hans/apps/app.devsuite.Ptyxis)或GNOME 终端左上角加号来快捷进入。

???+ question "我是不是卡死了？"

    在初次运行容器时，您有可能会卡在`Installing basic packages...`这一步。
    
    这时，您可以通过Podman的日志来查看容器的运行状况。

    ```bash
    podman logs 名称
    ```

    大多数时候，容器是在正常安装软件包，稍等片刻即可。

    但是，如果日志中的最后一行是`+ /usr/bin/distrobox-host-exec -Y test`，您极有可能需要手动提前安装`distrobox-host-exec`的依赖`host-spawn`，并且在宿主机中安装`flatpak`。

    如果您已经创建了容器，请先将其移除。

    ```bash
    podman rm 名称
    ```

    ??? question "为什么不能直接打断再重新运行？"
        Distrobox在初次运行容器时会进行一系列的配置（如用户、挂载等），而`distrobox-host-exec`的配置只是其中的一步。如果贸然打断，下次打开容器可能会发生意想不到的错误，如`ioctl`异常等等。

    请在上文的`--pre-init-hooks`中加入如下指令（已使用转义字符替换）：

    ```bash    
    ARCH=\$(uname -m) && \
    VERSION=\$(curl -sL https://api.github.com/repos/1player/host-spawn/releases/latest | grep -oP '\"tag_name\": \"\K[^\"]+') && \
    curl -sL \"https://github.com/1player/host-spawn/releases/download/\${VERSION}/host-spawn-\${ARCH}\" -o /tmp/host-spawn && \
    sudo install -m 0755 /tmp/host-spawn /usr/bin/host-spawn

    # 例如：
    # distrobox create --name debian-box --image debian:latest \
    # --pre-init-hooks "sed -i 's/deb.debian.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apt/sources.list.d/debian.sources && apt update && \
    # ARCH=\$(uname -m) && \
    # VERSION=\$(curl -sL https://api.github.com/repos/1player/host-spawn/releases/latest | grep -oP '\"tag_name\": \"\K[^\"]+') && \
    # curl -sL \"https://github.com/1player/host-spawn/releases/download/\${VERSION}/host-spawn-\${ARCH}\" -o /tmp/host-spawn && \
    # sudo install -m 0755 /tmp/host-spawn /usr/bin/host-spawn"
    ```

### 常用命令

- 启动容器（不进入）：`distrobox start 名称`
- 删除容器：`distrobox rm 名称`
- 查看运行日志：`podman logs 名称`
- 删除已有镜像：`podman image rm 镜像地址`


