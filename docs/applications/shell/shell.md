# Shell 概述

Shell是用户与Linux内核直接对话的“窗口”，你可以将它理解为Windows的CMD（命令提示符）。用户通过在Shell输入指令达到操作系统的目的。

大多数Shell的配置文件包括环境变量、主题等内容，且位于用户目录下，为以`.`开头的隐藏文件，如`.bashrc`（Bash）、`.zshrc`（Zsh）。

!!! warning "消歧义"
    终端是Shell的图形化呈现。尽管有Ptyxis、Konsole等等终端，但其所调用、运行的依然是诸如Bash等等的Shell。

???+ example "常见的Linux Shell"
    - Bash: 大多数Linux发行版预装的Shell，兼容性强，支持广
    - Zsh: 自定义性强，有强大的自动补全功能，并兼容Bash语法
    - Fish: 用户友好，人性化设计，易配置