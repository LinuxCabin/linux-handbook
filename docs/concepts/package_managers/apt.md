# Apt

全称：Advanced Packaging Tool

## 解释

apt是大部分Debian系的软件包管理器，由Debian团队在dpkg的基础上创建。

apt有多种变体，如apt-get、aptitude（用于缓解依赖地狱）等。

## 实践

以下是一些较为常见的apt指令。

1. `sudo apt install xxx` 安装某个软件包（可列举多个）
2. `sudo apt remove xxx` 卸载某个软件包（可列举多个）
3. `sudo apt update` 更新软件仓库缓存
4. `sudo apt upgrade` 升级系统软件包
5. `sudo apt autoremove` 自动删除部分不需要的软件包

---

不常用指令

1. `sudo apt purge xxx` 彻底删除某个软件包（可列举多个）
2. `sudo apt search xxx` 搜索某软件包
3. `sudo apt moo` 彩蛋

更详细可以参考[Runoob的教程](https://www.runoob.com/linux/linux-comm-apt.html)。