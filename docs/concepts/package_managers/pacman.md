# Pacman

全称：Package Manager

## 解释

pacman是大部分Arch系的软件包管理器。

!!! warning "警告"
    Arch 严禁“部分升级”（Partial Upgrade）。请勿在未同步升级全系统的情况下单独安装或更新某个软件，否则极易导致系统依赖断裂造成所谓的 **“滚挂”** ！此外，推荐配置 **AUR (Arch User Repository)** 并配合 yay 或 paru 等助手使用，可以提升使用体验。

## 实践

以下是一些较为常见的pacman指令。

1. `sudo pacman -S` 安装某个软件包（可列举多个）
2. `sudo pacman -Rs` 卸载某个软件包及其依赖（可列举多个）
3. `sudo pacman -Syu` 升级系统软件包（请不要颠倒参数顺序！）
4. `sudo pacman -Scc` 清空包缓存

---

不常用指令

1. `sudo pacman -Ss` 搜索某软件包

更详细可以参考[Linux命令手册](https://www.linux-man.cn/linux/command/pacman/)。