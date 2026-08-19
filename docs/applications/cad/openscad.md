# OpenSCAD

![openscad](https://openscad.org/assets/img/logo.png)

## 概述

OpenSCAD是一款以代码风格进行建模的设计工具，具有预览和渲染两种模式，对低端硬件友好。

## 安装

Debian系：
```bash
sudo apt install openscad
```

红帽系：
```bash
sudo dnf install openscad
```

Arch系：
```bash
sudo pacman -S openscad
```

## 使用

鉴于本文档的通用性，在此仅给出简单实现。

```openscad
cube(10, center=true);
```
以坐标轴为中心生成一个长宽高均为10的立方体。

## 更多

- [OpenSCAD Tech](https://openscad.tech)
- [OpenSCAD](https://openscad.org)
- [BOSL2](https://github.com/BelfrySCAD/BOSL2)
