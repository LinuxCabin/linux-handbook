# Fish

![fish](https://fishshell.com/assets/img/Terminal_Logo_CRT_4.svg)

[官网](https://fishshell.com/)

[官方文档](https://fishshell.com/docs/current/index.html)

[Fish语言教程](https://fishshell.com/docs/current/tutorial.html)

**默认配置文件在`~/.config/fish`下,其名称为`config.fish`**

## 概述

Fish是一个[Shell](https://hb.linuxcabin.top/concepts/linux/shell/),它有着功能丰富,开箱即用,脚本编写简便的特点。

**但它不兼容[POSIX标准](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html),这意味着Bash无法运行Fish的脚本，反之亦然**。

## 安装

- Debian系: `sudo apt install fish`
- 红帽系: `sudo dnf install fish`
- Arch系: `sudo pacman -S fish`

## 使用

- 进入Fish:
  
  `fish`

- 退出fish
  
  `exit`

- 将Fish作为默认Shell
  
  1.将Fish加入Slhel列表
	  
  `command -v fish | sudo tee -a /etc/shells`
  
  2.更改默认Shell
	  
  `chsh -s "$(command -v fish)"`

- 当您在Fish输入命令时,光标后会有一个暗灰色建议,如果您同意这个建议,您可以按右方向键或`ctrl-f`

- 当您在Fish输入命令时,您可以按Tab键列出所有选项,您可以使用方向键选择选项,使用回车键补全

- 使用`ctrl-a`或`ctrl-e`移动到命令的头部或尾部

- 使用`ctrl-k`删除光标后的所有内容

- 使用`ctrl-c`中断命令

- 使用`alt-c`将光标后面的第一个字母大写

- 使用`alt-u`将光标后面的所有字母大写

**Fish默认使用Emacs快捷键,您可以使用`fish_vi_key_bindings`切换到vi模式,使用`fish_default_key_bindings`,切换回去**。

## 配置

- 您可以在config-fish添加以下文本关闭Fish的欢迎信息:
  
  `set -U fish_greeting`

- 您可以使用以下语法设置别名
  
  `alias 别名="原本的命令"`
  
  `abbr -a 别名="原本的命令"`
  


