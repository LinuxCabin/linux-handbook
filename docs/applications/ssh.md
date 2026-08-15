# SSH

???+info "注意！"
    SSH指ssh协议，也指ssh的客户端/服务端，且SSH实现种类较多，此处特指ssh客户端/服务端，且以最普及的openSSH为示例

## 概述

OpenSSH是SSH（Secure Shell）协议的免费开源实现。它通过对所有传输流量进行加密，为不安全的网络提供安全的远程登录、命令执行、文件传输及TCP端口转发（隧道），是跨平台管理远程系统的核心工具。

## 安装

大多数情况下，ssh已经被系统自带。

## 使用

**示例**：以example账户连接到10.0.0.1。

```bash
ssh example@10.0.0.1
```

**示例**：systemd环境下启动ssh服务。
```bash
sudo systemctl start ssh # 个别发行版为sshd
```

## 关于更多

请根据`man ssh`中的信息进行专门性学习。
