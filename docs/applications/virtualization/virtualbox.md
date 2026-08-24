# VirtualBox

![virtualbox_logo](../../img/applications/virtualization/virtualbox.svg){width=166}

Oracle VirtualBox（简称 VirtualBox）是一款虚拟机软件，它允许您在一个操作系统内部以虚拟机的形式运行另一个操作系统。

例如，在 Linux 上，可以用 VirtualBox 创建一个虚拟机，运行 Microsoft Windows。

VirtualBox 的***本体***是[自由软件](https://www.gnu.org/philosophy/free-sw.html)，采用 [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0) 发布。

**但是**，VirtualBox 的***扩展包***是[专有软件](https://www.gnu.org/proprietary/proprietary.html)。不过，您可以选择不安装扩展包。

## 安装

### 安装内核头文件

VirtualBox 使用*树外*内核模组来完成虚拟化。为了编译 VirtualBox 内核模组，需要先安装内核的头文件（header）。

- Debian 系
  ```bash
  sudo apt install linux-headers-generic
  ```

- 红帽系
  ```bash
  sudo yum install kernel-devel kernel-headers
  ```

- Arch 系
  ```bash
  sudo pacman -S linux-headers
  ```

### 安装 VirtualBox

- Debian 系
  ```bash
  sudo apt install virtualbox
  ```

??? info "如果使用 Debian 13 "Trixie" 或 12 "Bookworm"..."

    VirtualBox 的软件包并未正式包含在 Debian 的稳定版本中。然而，Debian Fast Track 会以“滚动更新”的方式向 Debian 稳定版用户提供 VirtualBox。

    要安装 VirtualBox，先启用 Debian Backports 源和 Debian Fast Track 源。

    用喜欢的文本编辑器创建并编辑 `/etc/apt/sources.list.d/debian-backports.sources` 文件，这里示例 GNU nano 。

    ```bash
    sudo nano /etc/apt/sources.list.d/debian-backports.sources
    ```

    输入以下内容：

    - **Debian GNU/Linux 13 "Trixie"**
      ```
      Types: deb deb-src
      URIs: http://deb.debian.org/debian
      Suites: trixie-backports
      Components: main contrib non-free non-free-firmware
      Enabled: yes
      Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg
      ```

    - **Debian GNU/Linux 12 "Bookworm"**
      ```
      Types: deb deb-src
      URIs: http://deb.debian.org/debian
      Suites: bookworm-backports bookworm-backports-sloppy
      Components: main contrib non-free non-free-firmware
      Enabled: yes
      Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg
      ```

    再创建并编辑 `/etc/apt/sources.list.d/fasttrack.sources` 文件，这里示例 GNU nano 。

    ```bash
    sudo nano /etc/apt/sources.list.d/fasttrack.sources
    ```

    输入以下内容：

    - **Debian GNU/Linux 13 "Trixie"**
      ```
      Types: deb deb-src
      URIs: https://fasttrack.debian.net/debian-fasttrack
      Suites: trixie-fasttrack trixie-backports-staging
      Components: main contrib non-free
      Signed-By: /usr/share/keyrings/fasttrack-archive-keyring.gpg
      ```

    - **Debian GNU/Linux 12 "Bookworm"**
      ```
      Types: deb deb-src
      URIs: https://fasttrack.debian.net/debian-fasttrack
      Suites: bookworm-fasttrack bookworm-backports-staging
      Components: main contrib non-free
      Signed-By: /etc/apt/trusted.gpg.d/fasttrack-archive-keyring.gpg
      ```

    还需要安装 Fast Track 的签名验证文件：
    ```bash
    sudo apt install fasttrack-archive-keyring
    ```

    最后，安装 VirtualBox 。
    ```bash
    sudo apt update
    sudo apt install virtualbox
    ```

    ???+ note "如果出现了依赖冲突..."
        指定从 Backports 源安装依赖：

        - **Debian GNU/Linux 13 "Trixie"**
          ```bash
          sudo apt install -t trixie-backports virtualbox
          ```

        - **Debian GNU/Linux 12 "Bookworm"**
          ```bash
          sudo apt install -t bookworm-backports-staging virtualbox
          ```

- 红帽系
  ```bash
  sudo yum install virtualbox
  ```

- Arch 系
  ```bash
  sudo pacman -S virtualbox
  ```

## 使用

### 将用户加入至 `vboxusers` 组

只有在 `vboxusers` 组内的用户才能使用 VirtualBox 虚拟机。

要将用户加入 `vboxusers` 组，执行以下命令：
```bash
sudo usermod -aG vboxusers $USER
```

如果以上命令因为找不到 `usermod` 而失败，使用以下命令：
```bash
sudo gpasswd -a $USER vboxusers
```

加入完成后，您需要重新登入（注销再登入）以使新的组别产生效果。

### 加载内核模块

VirtualBox 依赖 `vboxdrv` 内核模组实现虚拟化。

要使用 VirtualBox，必须加载这个内核模组：

```bash
sudo modprobe vboxdrv
```

## 更多

[VirtualBox 官方文档](https://www.virtualbox.org/manual/)

[Oracle 有关 VirtualBox 的文档](https://docs.oracle.com/en/virtualization/virtualbox/index.html)