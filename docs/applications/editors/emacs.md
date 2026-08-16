# Emacs

![emacs](https://www.gnu.org/software/emacs/images/emacs.png)

## 概述

Emacs是一个[自由](https://www.gnu.org/philosophy/free-sw.html)的编辑器,采用[GPL-v3](https://www.gnu.org/licenses/gpl-3.0.en.html)发布,采用Elisp作为配置语言,Emacs功能强大(包括但不限于发邮件,使用irc聊天,阅读新闻和RSS订阅,玩俄罗斯方块),常被与vim/nvim比较,最早由Richard Stallman编写发布,Emacs是[自由软件运动](https://www.gnu.org/)的一部分。

## 安装

Debian系:
```bash
sudo apt install emacs
```

红帽系:
```bash
sudo dnf install emacs
```

Arch系:
```bash
sudo pacman -S emacs
```

## 使用(默认快捷键)

**Emacs的使用高度依赖C键(及Control键)和Meta键(及Alt键),下文用C与M代替**。

**由于Emacs的功能关于繁杂无法将所有快捷键列出,强烈建议您阅读官方文档**。

`C-x C-c` 退出Emacs  
`M-x` 输入命令  
`C-x C-s` 保存文件  
`C-s` 搜索关键词  
`C-p/n/b/f` 使光标上下左右的移动  
`C-a/e` 移动到行头或行尾  
`M-</>` 移动到文件头或文件尾  
`C-k` 删除光标后面的所有文本  
`C-/` 撤销操作(C-x u和C-_也可已,详情见官方文档9.4)  
`C-x C-f` 跳转到另一个文件(旧文件会被放入一个buffer中)  
`C-x b` 切换到另一个Buffer  
`C-x C-b` 打开Buffer列表(?获得帮助)  
`C-x o` 切换到另一个Window  
`C-x 0` 关闭Window  
`C-x k` 关闭一个Buffer  
`C-h C-f` Emacs常见问题解答  
`C-h r` 官方手册(需要安装info)  
`C-h t` 官方快速指南   

## 关于更多

受限于我们的专门性，我们建议您到其他专门性教程进行学习。

1. [Emacs轻奢之路](https://www.bilibili.com/video/BV1T64y1R7EL/)
2. [21天学会Emacs 2022年版本](https://www.bilibili.com/video/BV12P4y1j7EL/)
3. [Emacs高手修炼手册](https://www.bilibili.com/video/BV13g4y167Zn/)
4. [专业 Emacs 入门教程](https://www.zhihu.com/column/c_1440829147212279808)
5. [官方文档](https://www.gnu.org/software/emacs/manual/emacs.html)
