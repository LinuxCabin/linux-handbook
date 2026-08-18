# 安装系统

在烧录好U盘后，请您关机后在要安装的设备上插入U盘，按照前文“开启安全启动”的方式进入BIOS，调整启动顺序 (Boot Order)，将您的U盘对应引导项调至最上方，保存BIOS并重启。

部分BIOS为全英文界面，并且操作方法因机器而异。在此我们依然建议您使用AI辅助操作或搜寻相关资料。
???+ note "BIOS本地化"
    在早期CPU中，只有联想的部分主板搭载了中文BIOS。在较新的机器中，大部分已经支持简体中文。

!!! warning "警告"
    BIOS是电脑的核心配置部分，如果您没有经验，我们建议您寻求AI或他人帮助，而不是自行修改！！！

## 引导系统

在重启系统后，会出现类似于终端的界面，这就是Grub，大多数Linux发行版均默认采用Grub进行引导。

![Grub](https://pic2.zhimg.com/v2-0c90038af490e905c1c7561142e26215_1440w.jpg)

您可以使用方向键选择引导选项。我们建议您选择包含`Safe Graphics` (不开启显卡硬件加速)，以及`Verify` (验证) 字样的较为靠上的选项，以保证图形界面的兼容性以及文件的完整性。如果没有，我们建议您选择最靠上的选项。

???+ note "一般情况黑屏卡死的处理方法"
    大多数这种情况是无法加载显卡所致，此时需要在一个启动项上按下e键，找到 `linux ……` 的行，在末尾加上 `nomodeset` 参数。
    若你是NVIDIA用户，也可以选择加入 `nouveau.modeset=0` 参数。

## 安装系统

由于各发行版的配置方式不同，我们建议您参照网络上的一些教学视频进行安装配置。

???+ note "提示"
    在安装前，我们建议您查看“发行版”章节对应发行版下的“注意事项”一节。

一些是一些较为热门的安装教程：

 - Ubuntu: [https://www.bilibili.com/video/BV1CG4y1h7bx](https://www.bilibili.com/video/BV1CG4y1h7bx)
 - Fedora: [https://www.bilibili.com/video/BV1ZRpdzaEQj](https://www.bilibili.com/video/BV1ZRpdzaEQj)
 - Arch Linux: [https://www.bilibili.com/video/BV1L2gxzVEgs](https://www.bilibili.com/video/BV1L2gxzVEgs)

或者，您也可以参照较为通用的安装方法：

### 大通套
 - 语言：简体中文 (Simplified Chinese)
 - 时区：Asia/Shanghai (或者其他任何国内城市)
 - 键盘布局：US或Chinese
 - 引导程序：建议选择GRUB（或rEFInd）

### 磁盘分区

如果您有足够勇气，想要彻底摆脱Windows，请您选择“全盘安装”，由操作系统管理您的分区。

或者，如果您想要双系统，请**一定不要选择全盘安装或是类似的选项！**，您应该选择带有“高级 (Advanced)”，“自定义（Custom）”，“手动（Manual）”或者是等字眼的选项。在安装时，请选择您上一章所腾出的磁盘空余。我们建议您将该空间由系统自动分区进行管理。

!!! warning "警告"
    无论您选择什么，请确保您已经备份该磁盘上所有的重要文件！！！

在选择EFI[引导](../concepts/operating_system/boot_loader.md) (/boot) 分区时，请选择设备上的ESP分区（通常位于分区图示的最左侧，是一个FAT32文件系统的不大的分区）。**如果您想要保留Windows，请一定不要勾选“格式化/boot”。**

### 应用安装

若安装过程中提示类似“您是否想要添加第三方软件源？”或是“您是否需要预装软件？”，我们建议您选择“是”。

### 安装时注意事项

在安装时，请确保您设备的电力供应。若安装出现卡住等状态，我们建议**不到万不得已不要强制关机**，可能是部分文件下载慢导致的。

若安装失败，请检查分区大小是否不足，自己的CPU是否支持（红帽系发行版正在淘汰x86-64-v1/v2指令集）。

## 其他安装方法

### ULLI

ULLI，USB-Less Linux Installer，解决Windows/Linux环境下没有外置存储用于烧录系统镜像的项目。

!!! warning "警告"
    我们仅推荐您在万不得已时使用这种方法。

访问[ULLI](https://rltvty.net/installlinux.html)项目官网，这里选择Windows版本。

解压后，选中其中的`run-ulli-windows.bat`文件，按下`Ctrl+Alt+C`组合键，再按下`Win+R`，在弹出的“运行”窗口中粘贴并执行。期间会弹出UAC授权弹窗，请点击“是”。

选定镜像后，中间文本框会显示镜像名称及大小，请核对是否与所选文件一致。确认无误后点击`Start Installation`继续。

接下来的弹窗是说明ULLI工具将怎样操作电脑上的分区。

- 如您有多个物理硬盘，请在`Target Disk`一栏中选中目标硬盘（默认为C盘所在硬盘）。
- 在`Linux Partition Size`中调整将要分配给Linux系统的分区大小。请在下方文本框检查可用空间，避免空间不足无法执行分配操作。在为Windows保留合理空间的同时，应为Linux分配至少24G以获得最佳体验。
- 最后，在`Planned Changes`和`Disk Layout After Changes`确认最终分区结果，您应能看到**[Unallocated - Linux]**和**LINUX_LIVE**两栏，其后是工具预计为其分配的空间大小。

确认无误后，滚动到页面底部点击确认即可开始。

!!! warning "警告"
    在工具执行期间，应保证充足的电力供应，避免后台运行其他软件占用磁盘资源。

    如安装过程中断，请参考下列解决方法：

    - 在磁盘管理工具中删除C盘后的`LINUX_LIVE`FAT32分区；

    - 通过[Bootice](https://bootice.com)等引导管理工具删除由工具创建的引导项，通常包含`Linux`字样。

若安装完成，会出现提示关机倒计时的弹窗，等待重启即可。


---

当系统出现“安装完成”等字样时，恭喜你！你已经成功迈入了Linux的世界！现在，重启电脑，拔下U盘，让我们进入系统吧！