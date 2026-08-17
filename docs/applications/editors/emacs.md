# Emacs

![emacs](https://www.gnu.org/software/emacs/images/emacs.png)

## 概述

Emacs 是一个文本编辑器，采用 Emacs Lisp 作为配置语言。作为 Lisp 解释器，Emacs 功能强大 (包括但不限于发邮件，使用irc聊天，阅读新闻和RSS订阅，玩俄罗斯方块) 。

Emacs 是[自由](https://www.gnu.org/philosophy/free-sw.html)软件，采用[GPL-v3](https://www.gnu.org/licenses/gpl-3.0.html)发布。Emacs 是[自由软件运动](https://www.gnu.org/)的一部分。

## 安装

Debian系：
```bash
sudo apt install emacs
```

???- info "如果正在使用 Wayland..."
     默认的 `emacs-gtk` 在 Wayland 下可能会导致各种问题。使用 `emacs-pgtk`：
     ```bash
     sudo apt install emacs emacs-gtk- emacs-pgtk+ --purge
     ```

红帽系：
```bash
sudo dnf install emacs
```

Arch系：
```bash
sudo pacman -S emacs
```

虽然不建议，Emacs 可以使用 [Flatpak](../../concepts/package_managers/flatpak.md) 安装
```bash
flatpak install org.gnu.emacs
```

## 使用

### 快捷键

???+ note "Emacs 风味的组合键描述"
     - `C`-`...`： `C` 是 Ctrl
     - `M`-`...`： `M` 是 Alt
     - `s`-`...`： `s` 是 Super，或者在大多数键盘上，Windows
     - `...`-`SPC`： `SPC` 是 space，空格

     最后一项是基础键，前面的全都是修饰键。 `C`-`c` 是 Ctrl + C； `M`-`c` 是 Alt + C； `C`-`M`-`c` 是 Ctrl + Alt + C ...
     
     你可能想问 Shift 去哪里了？没有 Shift！在 Emacs 里我们用已经“被大写”的字符来代替 Shift。比如
     
     - `M`-`<`： Alt + Shift + ,
     - `M`-`,`： Alt + ,

**文件**
`C-x C-c` 退出Emacs  
`C-x C-s` 保存文件

**光标**
`C-p/n/b/f` 或 `<up>/<down>/<left>/<right>` 使光标上下左右移动

`M-{/}` 纵向移动一个段落
`M-b/f` 横向移动一个单词
`C-a/e` 移动到行头或行尾  
`M-</>` 移动到文件头或文件尾  

**删除，撤销**
`C-k` 删除光标后面的所有文本
`C-d` 向后删除
`C-/` 或 `C-x` `u` 撤销操作

**搜索**
`C-s` 搜索关键词（向后）
`C-r` 搜索关键词（向前）
`M-%` 查找并替换

**命令**
`M-x` 输入命令

**多任务**
`C-x C-f` 打开一个文件
`C-x b` 切换到最近的Buffer  
`C-x C-b` 打开Buffer列表（?获得帮助）
`C-x o` 切换到另一个Window  
`C-x 0` 关闭Window  
`C-x k` 关闭一个Buffer

**文档**
`C-h C-f` Emacs常见问题解答  
`C-h r` 官方手册（需要安装info）
`C-h t` 官方快速指南

???+ info "注意"
     显然这些不是所有的官方配置快捷键，事实上用户可以自己更改快捷键，受限于篇幅和难度这里不多赘述。请参阅 [#关于更多](#_14)。


### 一篇简短的 Emacs 入门教程

???+ note "注意"
     这篇文章的标题不是 “emacs：从入门到精通”，本篇文章只介绍 Emacs 作为文本编辑器最基础的部分。如果读者想要一篇综合的，完整的教程，请参阅 [#关于更多](#_14)

虽然非常强大，Emacs 出了名地难以学习。下面是一篇入门级教程，通过对本文源代码的编辑来阐述 Emacs 的基础部分。

#### 下载并打开这篇文章

???- info "我不熟悉 Markdown ..."
     没有关系！我们不要求读者理解 Markdown 的语法。

用终端运行以下命令：
```bash
# 下载
curl https://codeberg.org/LinuxCabin/linux-handbook/raw/branch/main/docs/applications/editors/emacs.md --output emacs.md
# 打开
emacs emacs.md
```
如果看到 Emacs 打开并载入了这篇文档，恭喜你，你的 Emacs 安装没有问题！

#### 移动光标

屏幕上闪烁的“小黑方框”就是我们的光标。我们用上下左右键来移动光标。

你应该会感到一格一格移动光标很慢，不妨试试下面的快速移动方法。

- 纵向移动一个段落：`M`-`{` , `M`-`}`
- 横向移动一个单词：`M`-`b` , `M`-`f`

???- tip "更多组合键"
     - 移动到行首或行尾：`C`-`a` , `C`-`e`
     - 移动到整个文件的开头和末尾：`M`-`<` , `M`-`>`

现在试试把光标移到这一行吧。按住下箭头，或者感到足够勇敢，按几次 `M`-`}`。

#### 写入，删除与撤销

和 GNU Nano 很相似，直接打字就可以在 Emacs 里写东西，按退格键就可以删除。

现在把光标移到这一行下面，写下 `Hello world!`





delete this

试试 `C`-`<backspace>`，这个组合键能删除一整个单词，用它删掉 `delete this`

d e l e t e t h i s

把光标移到 ``d e l e t ...`` 这一行，按下 `C`-`a` `C`-`k`，这个组合键能删除一整行。

按下 `C-/`，它能撤销刚刚做的更改（比如删除）。

???- tip "更多组合键"
     用 `C`-`d` 或 `<delete>` 就能向后删除，用 `C`-`<delete>` 向后删除一个单词。

#### 选中，拷贝和粘贴

想象我们在图形化的编辑器里。要选中一段文字，我们会把鼠标指针移到这段文字的头部，按下鼠标，再把指针移到尾部

在 Emacs 里也是这样的，只不过我们用键盘移动光标到头部，按一下 `C`-`SPC`，再移动光标到尾部。试试看吧：

选中这句文字。




???+ tips "提示"
     [#移动光标](#_6) 的内容可以在这里用哦


连续按两下 `C`-`SPC` 以退出选区。

`C`-`w` 是剪切，`C`-`y` 是粘贴。现在选中上面那段文字，按下 `C`-`w`，再按下 `C`-`y` 试试。

`M`-`w` 是拷贝。把 `C`-`w` 换成 `M`-`w`，重复上面的步骤试试。


#### 查找与替换

##### 查找

- 向后查找：`C`-`s`
- 向前查找：`C`-`r`

现在试试向前查找 ``backspace`` 吧。按 `C`-`r`，输入 ``backspace``，回车。

???- tip "回到搜索前的位置..."
     按 `C`-`u` `C`-`SPC` 就可以回到上一个标记的位置。搜索会留下标记，所以可以回到上一个搜索前的位置。

##### 替换

下面的 Emacs 有拼写错误，我们使用 `M`-`%` 查找并替换它。按下 `M`-`%` ，输入 ``Eamcs`` ，再输入 ``Emacs``  ，输入 ``y`` 确认替换。

???- tip "如果不想逐个确认..."
     Eamcs 有一个命令，叫 ``replace-string``，但是默认不绑定至任何键位。如果要运行它，我们先按 `M`-`x` ，再手动输入 `replace-string`。

#### 保存和退出

我们已经做好了所有更改，是时候保存了。按下 `C`-`x` `C`-`s` ，Emacs 就会保存未更改的内容。

如果要退出 Emacs，按下 `C`-`x` `C`-`c`。

???+ tip "退出且不保存"
     当未保存但是按了退出键时，Emacs 会问你需不需要保存，此时输入 ``n`` 就可以不保存并退出。

##### 重置所有内容

Emacs 的 ``revert-buffer`` 命令能删除所有没保存的内容，但是默认不绑定至任何键位。先按 `M`-`x` ，手动输入 ``revert-buffer`` 来执行它。




## 关于更多

受限于我们的专门性，我们不能提供详尽的教程。如果对 GNU Emacs 感到有兴趣，可以前往其他专业性教程进行学习。

- 社区文档
	- [Emacs轻奢之路](https://www.bilibili.com/video/BV1T64y1R7EL/)
	- [21天学会Emacs 2022年版本](https://www.bilibili.com/video/BV12P4y1j7EL/)
	- [Emacs高手修炼手册](https://www.bilibili.com/video/BV13g4y167Zn/)
	- [专业 Emacs 入门教程](https://www.zhihu.com/column/c_1440829147212279808)
	- [Emacs Lisp 简明教程](https://smacs.github.io/elisp/)

- [官方文档](https://www.gnu.org/software/emacs/manual/emacs.html)

- [什么是自由软件](https://www.fsf.org/about/what-is-free-software)