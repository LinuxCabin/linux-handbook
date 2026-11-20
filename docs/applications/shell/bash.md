# Bash

![bash](https://tiswww.case.edu/php/chet/img/bash-logo-web.png)

[官网](https://www.gnu.org/software/bash/)

[官方文档](https://www.gnu.org/software/bash/manual/bash.html)

**Bash的配置文件：`~/.bashrc`**

## 概述

Bash是一个古老的[Shell](./shell.md)，大多数发行版预装了Bash并作为默认 Shell，Bash符合POSIX标准，因此大多数遵循 POSIX 标准的脚本在两者之间可以通用。

## 安装

- Debian系列：`sudo apt install bash`
- 红帽系：`sudo dnf install bash`
- Arch系：`sudo pacman -S bash`

## 配置

### Starship

您可以使用[starship](https://starship.rs/zh-CN/)配置Bash。

???+ note "字体"
    您可以安装[Nerd Fonts字体](https://www.nerdfonts.com/)以解决字体乱码问题。

```bash
curl -sS https://starship.rs/install.sh | sh
```

在`~/.bashrc`的最后，添加以下内容：
```bash

eval "$(starship init bash)"

```

更多的配置推荐您阅读[Starship官方文档](https://starship.rs/zh-CN/guide/)。
