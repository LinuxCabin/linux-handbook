# Python开发套件

## Python3

### 安装

除个别极简发行版外（如Arch），大多数发行版已自带。

Arch系：
```bash
sudo pacman -S python
```

### 使用

Linux里面一般以`python3`命令使用Python。

???+ tip "通过`python`使用"
    如果你想要用 `python` 这个命令， 可以装一个 `python-is-python3`, 来用软链接骗过操作系统(开个玩笑)。

    - Debian: `sudo apt install python-is-python3 -y`
    - Fedora: `sudo dnf install python-is-python3 -y`

## 库

Python拥有规模庞大的PyPi库。通常，我们使用`pip`进行安装。但在Linux下，`pip`不一定会随着Python预装，因此需要使用包管理器安装。

- Debian: `sudo apt install python3-pip`
- Fedora: `sudo dnf install python3-pip`
- Arch: `sudo pacman -S python-pip`

!!! warning "系统依赖"
    使用Pip安装部分库时，可能会出现如下警告:
    ```
    error: externally-managed-environment

    × This environment is externally managed
    ╰─> To install Python packages system-wide, try 'pacman -S
        python-xyz', where xyz is the package you are trying to
        install.

        If you wish to install a non-Arch-packaged Python package,
        create a virtual environment using 'python -m venv path/to/venv'.
        Then use path/to/venv/bin/python and path/to/venv/bin/pip.

        If you wish to install a non-Arch packaged Python application,
        it may be easiest to use 'pipx install xyz', which will manage a
        virtual environment for you. Make sure you have python-pipx
        installed via pacman.

    note: If you believe this is a mistake, please contact your Python installation or OS distribution provider. You can override this, at the risk of breaking your Python installation or OS, by passing --break-system-packages.
    hint: See PEP 668 for the detailed specification.
    ```
    由于系统的部分组件依赖Python的依赖，因而外来库可能破坏系统本身的依赖关系。

    这个时候，我们建议您使用`venv`创建虚拟环境，或者寻找发行版的软件源是否有对应的库可供安装（一般包名为`python3-库`或`python-库`）。
