# 其他设备支持

## 音频

在Linux下，应用程序的音频输出由音频服务器来管理。常见的音频服务器有以下三种：

- PulseAudio：专注于消费级桌面音频，在很长时间以来作为默认音频中间件，旨在解决早期Linux音频系统缺陷。
- JACK：专业级声音服务，低延迟，灵活性高，适合音乐制作等专业场景。
- PipeWire：新一代多媒体框架，同时为音频和视频提供低延迟的录制、回放和路由，是面向所有级别用户的统一解决方案。

现代Linux发行版大多默认采用PipeWire作为音频服务器。

部分PulseAudio程序可能会在PipeWire下出现播放异常的情况，若出现此类情况，您可能需要安装`pipewire-pulse`来提供兼容层。

## 蓝牙

在Linux下，蓝牙功能主要由BlueZ（包名`bluez`）负责。

### 蓝牙耳机

在Linux下，蓝牙耳机的音频输出会被分为音频模式与通话模式。在耳机麦克风开启的情况下，系统会自动切换到通话模式，此时耳机的声音会变得浑浊发闷，这是正常现象。若要切换耳机输出模式，您可以进入对应桌面环境设置中的音频页面来切换输出设备。一般来说，“模拟耳机”代表音频模式，而“免提”则为通话模式。

蓝牙音频的音质取决于所使用的编解码器。PipeWire原生支持SBC、AAC、LDAC 等多种编解码器（其中 LDAC、LHDC 等属高清编码），并允许用户通过修改配置文件来调整编解码器的优先级。通过创建或编辑WirePlumber（包名`wireplumber`，PipeWire 的会话管理器）的蓝牙配置文件，可以强制启用高清编码并优化连接体验。

```bash
mkdir -p ~/.config/wireplumber/bluetooth.lua.d/
nano ~/.config/wireplumber/bluetooth.lua.d/51-bluez-config.lua
```

写入以下内容：

```json
monitor.bluez.properties = {
    bluez5.enable-sbc-xq = true   //启用SBC-XQ，请确保设备支持
    bluez5.enable-msbc = true   //启用mSBC，请确保设备支持
    bluez5.enable-hw-volume = true   //启用硬件音量控制，也就是通过耳机按键调整的是耳机硬件音量而非调整系统层面
    bluez5.codecs = [ sbc sbc_xq aac ldac aptx aptx_hd ]   //编解码器请按照设备的兼容性进行修改
 }
```

## 性能调控

您可以安装`power-profiles-daemon`来实现类似于Windows上的电源管理方案功能，特别适合于出厂具有功耗性能调控功能的笔记本电脑（如联想的Fn+Q）。主流的桌面环境（如KDE、GNOME）已经预置了方案调整入口。您也可以通过以下指令调整。

```bash
# 启动服务
sudo systemctl enable --now power-profiles-daemon

# 查看当前方案
powerprofilesctl get

# 修改方案
powerprofilesctl set power-saver
# power-saver（省电）、balance（平衡）、performance（性能）
```

部分发行版可能会改用`tuned-ppd`来管理电源方案。与`power-profiles-daemon`一样，主流桌面环境（如KDE、GNOME）也已经预置了方案调整入口。您也可以通过以下指令调整。
```bash

# 列出所有方案
tuned-adm list

# 查看当前方案
tuned-adm active

# 切换方案
tuned-adm profile throughput-performance
# 一般PC只需要使用powersave（省电）、balanced（平衡）与throughput-performance（性能）即可，其他选项可自行查看随附的说明

# 由系统推荐方案
tuned-adm recommend

# 关闭调优
tuned-adm off

```