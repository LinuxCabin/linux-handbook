# Dnf

全称：Dandified Yum
包格式：dnf

## 解释

dnf是大部分红帽系的软件包管理器，在rpm的基础上创建。

与先前的yum相比，dnf具有性能高，速度快的特点。

## 实践

以下是一些较为常见的dnf指令。

1. `sudo dnf install xxx` 安装某个软件包（可列举多个）
2. `sudo dnf remove xxx` 卸载某个软件包（可列举多个）
3. `sudo dnf upgrade 或 update` 升级系统软件包
4. `sudo dnf autoremove` 自动删除部分不需要的软件包
5. `sudo dnf makecache` 创建软件仓库缓存
6. `sudo dnf copr enable xxx` 启用某COPR仓库
7. `sudo dnf copr disable xxx` 禁用某COPR仓库

---

不常用指令

1. `sudo dnf system-upgrade download --releasever=xx` 升级系统至某一版本
2. `sudo dnf system-upgrade reboot` （在上一指令的基础上）重启进行升级
3. `sudo dnf group install xxx` 安装某一软件包组
4. `sudo dnf search xxx` 搜索某软件包

更详细可以参考[Runoob的教程](https://www.runoob.com/linux/linux-comm-dnf.html)。