# nano

<!-- 这篇文档使用 GNU nano 编写！ -->

```text
  GNU nano 8.4             Welcome-to-GNU-nano

                :::
  iLE88Dj.  :jD88888Dj:
.LGitE888D.f8GjjjL8888E;        .d8888b.  888b    888 888     888
iE   :8888Et.     .G8888.      d88P  Y88b 8888b   888 888     888
;i    E888,        ,8888,      888    888 88888b  888 888     888
      D888,        :8888:      888        888Y88b 888 888     888
      D888,        :8888:      888  88888 888 Y88b888 888     888
      D888,        :8888:      888    888 888  Y88888 888     888
      D888,        :8888:      Y88b  d88P 888   Y8888 Y88b. .d88P
      888W,        :8888:       "Y8888P88 888    Y888  "Y88888P"
      W88W,        :8888:
      W88W:        :8888:      88888b.   8888b.  88888b.   .d88b.
      DGGD:        :8888:      888 "88b     "88b 888 "88b d88""88b
                   :8888:      888  888 .d888888 888  888 888  888
                   :W888:      888  888 888  888 888  888 Y88..88P
                   :8888:      888  888 "Y888888 888  888  "Y88P"
                    E888i
                    tW88D

^G Help      ^O Write Out  ^F Where Is  ^K Cut       ^T Execute
^X Exit      ^R Read File  ^\ Replace   ^U Paste     ^J Justify
```

<!-- ascii art from https://www.nano-editor.org/ . licensed under GPL-3.0 . -->

## 概述

GNU nano，简称 nano，是一款小巧易用的终端文本编辑器。

nano 提供撤销/重做、代码高亮、单词补全、查找与替换等基本功能，能够满足一般 Linux 用户的终端文本编辑需求，界面简单易操作，是笔者心目中“功能与复杂度完美平衡”的典例。

<!-- unix哲学，你崛起罢... -->

nano 是[自由软件](https://www.gnu.org/philosophy/free-sw.html)，是 [GNU 操作系统](https://www.gnu.org/) 的一部分。
nano 采用 [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0) 协议发布。

## 快捷键

在 nano 里我们这样表示快捷键：

**Ctrl** 是 `^`，`^x` 表示 **Ctrl** + 一个键*x*  
**Alt** 是 `M-`，`M-x` 表示 **Alt** + 一个键*x*  
<!-- **Shift** 是 `Sh-`，`Sh-x` 表示 **Shift** + 一个键*x*  -->

???+ note "示例"
     `^K` = Ctrl + K

     `^/` = Ctrl + /

     `M-6` = Alt + 6

<!--     `Sh-Tab` = Shift + Tab

     `Sh-^Del` = Shift + Ctrl + Del

我不确定要不要加入shift。如果这是wiki，我绝对会加，但是作为新手向，没几个快捷键用到shift。 -->

nano 窗口的底部会出现一些可用快捷键的提示。

??? info "一些常用的快捷键"

    **文件**

    - `^X`:  退出
    - `^R`:  打开
        - `^R` `^T`:  图形化打开
    - `^O`:  保存为
        - `^O` `^T`:  图形化保存
    
    **导航**

    - `^C`:  显示目前光标的位置
    - `^/`:  前往某一行
    - `^F`:  查找
    - `^A`/`^E`:  移直行首/行尾
    - `^Space`/`M-Space`: 向后/向前一个单词

    **编辑**

    - `^\`:  查找并替换
    - `M-A`:  进入/退出选区模式
    - `^K`/`M-6`:  剪切/拷贝
    - `^U`:  粘贴
    - `M-U`:  撤销
    - `M-Bsp`/`^Del`:  向前/向后删除一个单词 （注：`Bsp`是 Backspace，退格键）

    **帮助**

    - `^G`:  帮助

## 安装

大部分 Linux 发行版已经预装了 nano。

??? note "如果需要安装 nano ..."

    [Debian 系](../../distros/debian/graph.md)：
    ``sudo apt install nano``

    [Redhat 系](../../distros/rhel/graph.md)：
    ``sudo yum install nano``

    [Arch 系](../../distros/arch/archlinux.md)：
    ``sudo pacman -S nano``

    [Gentoo Linux](../../distros/gentoo.md)：
    ``sudo emerge nano``

## 使用

<!-- 不像emacs，这篇教程确实是《nano从入门到精通》（笑）-->

### 打开文档

打开终端，输入``nano``，再输入想修改或创建的文件的路径。
```bash
nano /path/to/your/file
```

或者，直接打开``nano``，按 `^R`，再按 `^T`，用方向键选中想打开的文档，按`回车键`。
```bash
nano
```

### 编辑文档

正在闪烁的是光标，使用`方向键`（上下左右）移动光标，在键盘上输入内容会出现在光标处。

#### 复制粘贴

按 `M-A` 进入选区模式，移动光标使选区覆盖想操作的文本。

按 `^K` 剪切选区内的文本；  
按 `M-6` 复制选取内的文本；  
按 `^U` 粘贴到光标的位置。

如果没有设置选区，会剪切或复制光标所在的一整行。

???+ info "从外部粘贴"
     如果要从其他软件粘贴（比如游览器），按**终端**设置的快捷键。这通常是 `Sh-^V`（ Shift + Ctrl + V ）。

#### 查找替换

##### 仅查找

按 `^F`，输入要查找的字符，按`回车键`。

如果找到了，字符会以黄色高亮。  
如果没找到，窗口底部会出现红色的 `not found` 字样。

##### 查找并替换

按 `^\`，输入要替换的字符，按`回车键`；再输入要替换成的字符，按`回车键`。  
nano 会依个询问您每处是否要替换，按 `Y` 替换此处，`N` 保留此处，`A` 替换每处且不再询问，`^C` 取消替换。

如果没找到，窗口底部会出现红色的 `not found` 字样。

### 保存文档

完成更改后，按 `^O`，确认要保存的路径，按`回车键`保存。

或者，按 `^O` 再按 `^T`，使用方向键移动到想保存为的文件，按`回车键`保存。

要退出 nano，按 `^X`。

???+ "可能导致退出不了的原因"
     如果有未保存的更改，nano 会询问您是否保存：按 `Y` 保存更改，按 `X` 放弃更改。

## 关于

[GNU nano 官方网站](https://nano-editor.org/)： `https://nano-editor.org/`

[GNU nano 在线文档](https://nano-editor.org/dist/latest/nano.html)： `https://nano-editor.org/dist/latest/nano.html`

[什么是自由软件？](https://www.gnu.org/philosophy/free-sw.html)： `https://www.gnu.org/philosophy/free-sw.html`