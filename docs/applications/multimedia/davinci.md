# DaVinci Resolve (Studio)

[DaVinci Resolve (Studio)](https://www.blackmagicdesign.com/products/davinciresolve)是由Blackmagic Design开发的专业级视频后期制作软件，是将剪辑、调色、视觉特效和音频后期整合于一身的一站式解决方案。

!!! warning "警告"
    尽管提供了Linux版本，DaVinci Resolve (Studio)对Linux支持仍然较差，存在软件依赖、编解码等严重问题。若您在使用中遇到问题，您可以参考这篇[安装指南（Fedora）](https://www.bilibili.com/opus/1183753618836160534)。

## 安装

在从官网下载安装程序后，请打开终端并执行以下指令。

```bash
# 解压
unzip ./DaVinci_Resolve_xxx_Linux.zip

# 赋予执行权限
chmod +x ./DaVinci_Resolve_xxx_Linux.run

# 运行安装程序
sudo ./DaVinci_Resolve_xxx_Linux.run -i
```

之后，DaVinci可能会弹窗要求安装部分依赖，使用包管理器安装即可。