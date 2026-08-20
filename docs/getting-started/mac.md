# Mac设备（2018至今）

由于[T2芯片](https://support.apple.com/zh-cn/103265)和[Silicon](https://support.apple.com/zh-cn/116943)芯片，上述安装方法在Mac设备上很可能不适用。这里给出两种面向不同设备安装Linux的方法。

## Intel设备

参考[t2linux](https://wiki.t2linux.org/roadmap/)

[t2linux项目](https://github.com/t2linux)在Github给出了部分适配热门发行版的镜像。为简便安装流程，建议使用[CachyOS发行版](https://cachyos.org)，其内置了对T2芯片的支持，并在国内网络环境中表现较好。

选择好**对T2芯片适配**的镜像并[烧录](./before-installing.md#_6)后，移步至[安装系统](./install.md)继续安装流程。

!!! notice "提示"
    Mac设备的启动顺序选项需要通过开机时长按`option键`唤出。

## Silicon设备

参考[Asahi Linux](https://asahilinux.org/docs/)

!!! warning "警告"
    Asahi Linux项目对于Silicon设备的[支持](https://asahilinux.org/fedora/#device-support)有限，仅推荐M1/M2用户在**了解风险**的情况下尝试。

使用此方法之前，请先检查是否有45GB以上的空余空间以供Linux使用。

在`终端.app`中输入以下命令：`curl https://alx.sh | sh`

即可自动开始安装进程。
