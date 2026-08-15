# 贡献指南

## 安装必要依赖

请确保您的电脑已经安装了最新版的Python，并被添加到PATH中。

在clone仓库后，请您执行来安装必要的库：

```
pip install -r requirements.txt
```

### venv虚拟环境

为防止Python 3安装的依赖污染系统环境导致系统不稳定，建议您创建venv虚拟环境。

#### 直接使用Python

```
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

#### uv
```
uv venv
source .venv/bin/activate
uv pip install -r requirements.txt
```

### 构建

> 如果您使用[虚拟环境](#venv虚拟环境)，请不要退出此环境

我们的文章全部位于/docs目录下。如果您添加了之前不存在的章节，请您修改`mkdocs.yml`下的`nav`（照葫芦画瓢就行）来使得您的内容显示在侧边栏导航。

如果您要预览内容，我们建议您执行以下指令来查看网页显示效果：

```
mkdocs serve
```

如果您的内容难以分类，你可以在 `pending` 目录下新建一个目录，然后存放你的文档，管理员会将它放到正确的地方。
