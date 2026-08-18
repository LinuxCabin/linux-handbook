# 常见指令与符号

本章会介绍部分Linux下的指令与符号。由于本教程主要面向入门者，因而不会过多介绍参数。

## 常见符号

- `$`: 用以表示[Shell](../concepts/linux/shell.md)环境，不需要进行输入。
- `#`: 用以表示注释，井号后的内容会被自动忽略。
- `~`: 用以代表用户目录，如 `~/file` 。
- `*`: 通配符，可代指“全部”，如 `dir1/*` 指 `dir1` 下全部文件、文件夹，`dir1/file*.file`指 `dir1` 文件夹下所有以 `file` 开头，`.file` 结尾的文件与文件夹。

## 常见指令

大多数Linux指令都附带了“帮助”文档，一般可以通过在命令后加`help`，`-h`或`--help`等来具体查看。

在Linux中，指令基本遵循以下格式：

```bash
command [options] [arguments]
```

- 指令（Command）：通常是一个可执行文件，我要“做什么”
- 选项（Options）：用于改变操作行为
- 参数（Arguments）：操作对象，可能跟随指令，可能跟随在选项后

有些抽象对吧？没关系，让我们跟着下面的例子来理解吧。


???+ tip "提示"
    您可以不用背透这些指令，但至少应该熟悉符号与指令对应的含义，以免执行部分危险指令。

    不过，后续教程的部分操作（如[引导美化](../advanced/boot_loader.md)）可能会用到这些指令。

    另外，如果您希望深入了解部分命令的完整使用方法，可以尝试[man](#man)或[info](#info)等命令（但不是所有命令都提供这样的文档）

???+ info "包管理器相关"
    包管理器相关指令，请查看[应用与工具](../applications/apps.md)一节。

### sudo

以超级管理员（root）身份运行某指令，后面可以接其他指令。

例如：

- `sudo apt upgrade` 以管理员身份更新（Debian）系统软件包。
- `sudo -i` 进入root用户Shell。（特殊用法）

???+ note "输入密码"
    在Linux终端中，输入的密码不会显示，也不会以类似`*`或`·`的形式表现出来，这是正常现象，直接输入密码即可。

???+ note "预装"
    在大多数发行版中，sudo为预装软件包。若没有找到，您可能需要通过包管理器自行安装。

???+ note "sudoers"
    若在使用`sudo`时，遇到权限不足提示，您需要将当前用户添加至`wheel`组中，或者编辑`/etc/sudoers`，找到`root    ALL=(ALL)       ALL`，在下方添加`用户名    ALL=(ALL)       ALL`。


### cd 

将[Shell](../concepts/linux/shell.md)的工作目录切换到某目录。

默认情况下，Shell的工作目录为 `/home` 下的对应用户文件夹，并会在左侧展示（部分Shell可能除外）。

在工作目录下对文件进行操作时，不需要输入绝对路径。比如，我要删除 `/home/me/file` ，在工作目录为 `/home/me` 时不需要完整输入，而只需要输入 `file`即可。

例如：`cd /home/me` 将工作目录切换到`/home/me`。

???+ note "Permission Denied"
    若尝试切换工作目录时出现权限不足，请进入root用户Shell后切换。

### ls

列出目录下的文件与文件夹。

例如：

- `ls` 列出工作目录下的文件、文件夹。
- `ls /home` 列出 `/home` 目录下的文件与文件夹。

### rm

删除文件、文件夹。

例如：

- `rm file` 删除目录下 `file` 文件。
- `rm -r dir` 删除目录下 `dir` 文件夹。（`-r` 指recursive，意为递归删除）

### cp

复制文件、文件夹，或创建副本。

例如：

- `cp file dir` 将目录下 `file` 文件复制到 `dir` 文件夹。
- `cp file1 file2` 将 `file1` 复制出名为 `file2` 的副本。
- `cp dir1 dir2 -r` 分两种情况：
    1. 若 `dir2` 存在，则 `dir1` 会被复制到 `dir2` 中。
    2. 若 `dir2` 不存在，则 `dir1` 会复制产生名为 `dir2` 的副本。

### mv

移动或重命名文件、文件夹。

例如：

- `mv file dir` 将目录下 `file` 文件移动到 `dir`。
- `mv file1 file2` 将 `file1` 重命名为 `file2`。
- `mv dir1 dir2` 分两种情况：
    1. 若 `dir2` 存在，则 `dir1` 会被移动到 `dir2` 中。
    2. 若 `dir2` 不存在，则 `dir1` 会被重命名为 `dir2` 。

### mkdir

创建文件夹。

例如：`mkdir dir` 在工作目录下创建名为 `dir` 的文件夹。

### systemctl

用于（在基于systemd的发行版中）管理系统服务。

例如：

- `sudo systemctl start xxx` 启动某服务
- `sudo systemctl stop xxx` 终止某服务
- `sudo systemctl enable xxx` 启用某服务（自启动，不会立即启动）
- `sudo systemctl disable xxx` 禁用某服务（不再自启动，不会立即终止）

### chmod

用于更改用户对文件的权限。

??? question "777、+x，这些都是什么？"
    在Linux中，文件权限分为r（读），w（写），x（执行）三类。由于chmod采用二进制表示权限，代表三种权限的数字分别为4，2，1。如果要表示权限的组合，只需要将数字相加即可。

    同时，文件权限通常以三位数表示，每一位分别代表拥有者、用户组与其他用户。
    
    例如：777代表所有人都可读取，更改，执行该文件，774代表仅所有者与用户组能够读取，更改，执行，其他用户仅可读取。

例如：

- `chmod 777 file` 使得所有人都可读取，更改，执行该文件。
- `chmod -R 777 dir` 递归目录，使得所有人都可读取，更改，执行该目录下的文件与文件夹。

chmod中间的数字表示权限。

chmod的用法较为复杂，您也可以参考[Runoob的教程](https://www.runoob.com/linux/linux-comm-chmod.html)。

### man

用于查看部分命令的使用手册

???+ question "我是否适合阅读man手册？"
    1. 有耐心面对纯英文的文档
    2. 具备一定的英语阅读能力
    3. 善于使用搜索引擎
    4. 您使用的软件提供了对应的man-page
    5. 您正在使用命令行程序

???+ question "好像有的命令在别人那里能搜索到，我搜不到，为什么？"
    不同发行版对man-page的处理略有差异，像[alpine linux](https://www.alpinelinux.org)
    这样的发行版将软件包的文档拆分为独立的`-doc`包。
    同时，对于基础软件包，他们可能直接以类似于`man-pages` (archlinux) 的形式提供。

???+ tip "中文man-page"
    部分软件包会提供多语言的man-page，您可以关注您所使用的发行版是否将其打包并提供。
    例如[archlinux](https://wiki.archlinuxcn.org/wiki/Man_%E6%89%8B%E5%86%8C#%E5%AE%89%E8%A3%85)提供了`man-pages-zh_cn`包

> man手册（即man-page）在类unix系统中是较为常用的本地手册，
> 提供绝大多是系统基础命令行软件的使用文档，
> 甚至编程时需要的api文档。

man命令的调用方式类似于
```bash
man [options] [section] page
```

> 使用中括号包裹的内容是可选的

其中
`[options]` 是以`-`开头的**选项**，
`[section]`则是不同页面的**段**，
`page`是您希望查看的**页面**

例如：

- `man -k abc` 用于搜索命令、api文档，以及对应页面存在的不同段
- `man 1 cp`或`man cp` 查看命令文档
- `man 3 strcmp` 查看c语言中`strcmp`函数的文档

> 如果您乐意钻研，我们强烈建议您学习基本的英语知识，阅读常用软件的man-page，这是您深入学习linux的一个重要方法

### info

用于查看部分命令的使用文档，类似于[man](#man)
> 不是所有程序都提供info文档，请善用搜索引擎

???+ question "我是否适合阅读info文档？"
    1. 有耐心面对纯英文的文档
    2. 具备一定的英语阅读能力
    3. 善于使用搜索引擎
    4. 您使用的软件提供了对应的texinfo文件
    5. 您正在使用命令行程序

例如：

- `info info`: 查看info自己的使用文档
- `info gcc`: 查看gcc命令的完整使用文档（gcc的man-page是不完整的，它会在**SEE ALSO**中指引您阅读info文档）

## 系统维护工具

### nano

???+ info "想要了解 nano？"
     nano 在**应用与工具**栏目中有独立的页面，内容涵盖了快捷键和使用方法。前往 [nano](../applications/editors/nano.md)。

nano（包名`nano`）是广受赞誉的终端文本编辑器，拥有简单易操作的界面，适合新手用来通过终端编辑系统配置文件。

例如：`sudo nano /etc/sudoers`指以超级管理员权限，用nano修改`/etc/sudoers`。

<!-- 这个例子不好。在arch系（和也许redhat系？）中你应该用visudo来编辑sudoers。-->

???+ note "权限"
    编辑部分配置文件时需要`sudo`提权。
