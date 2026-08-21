# Matrix

Matrix是一个去中心化的聊天**协议**。它原生支持端到端加密，允许自托管，并且广泛被Linux开发者使用（如Fedora、OpenSUSE），十分适合用于日常或工作交流。

Matrix家服务器通过其联邦设计进行互通，类似电子邮件，您完全可以跨服务器交流。

## 安装

Matrix具有[多个客户端](https://matrix.org/ecosystem/clients/)（国内无法访问），此处仅介绍Linux端。以下软件均可以在Flathub获取。

- [Element](https://element.io/): 与Matrix联系紧密，使用广泛，但速度较慢。

???+ note "Element已知问题"
    在GNOME桌面上，Element的Flatpak版本在启动时可能会出现Keyring问题，您可以参照[该Issue](https://github.com/flathub/im.riot.Riot/issues/528)，在Flatseal中找到Element，并在Session Bus-调用中添加`org.freedesktop.secrets`。

    Element在初次启动时会自动连接matrix.org，导致其启动过程极其缓慢。您可以参照[该Issue](https://github.com/element-hq/element-web/issues/11655)，修改`~/.config/Element/config.json`（如果是Flatpak版本，则为`~/.var/app/im.riot.Riot/config/Element/config.json`）：

    ```json
    {
        "default_server_config": {
            "m.homeserver": {
            "base_url": "https://mozilla.org" //或者替换为任何一个家服务器
            }
        }
    }
    ```

- [Fluffychat](https://fluffychat.im/): Material You设计，操作逻辑可能不适配桌面端。
- [Nheko](https://nheko-reborn.github.io/): 速度快，界面较简陋。
- [Fractal](https://flathub.org/zh-Hans/apps/org.gnome.Fractal): 由GNOME开发。
- [Neochat](https://apps.kde.org/neochat/): 由KDE开发。

您可以选择其中任何一个安装使用。

## 注册

在注册Matrix之前，您首先需要选择一个家服务器（Homeserver）。在相应家服务器注册完成后，您的所有资料将全部储存于该服务器，不可再迁移。

???+ info "常用家服务器"
    - mozilla.org: 由Mozilla提供，需要Mozilla账号注册，国内访问良好
    - gitter.im: 由Gitter提供，需要Github注册，国内访问良好
    - matrix.org: 由Matrix官方提供，国内无法连接

    [此网站](https://servers.joinmatrix.org/)收录了大量其他Matrix家服务器，您可以自由选择。或者，您可以自行搭建。

    ??? tip "测速"
        如果您想要对家服务器进行测速比较，请不要直接使用`:`后面的网址测速，而应访问`家服务器地址/.well-known/matrix/server`，并使用该文件中的地址测速。该文件中的地址即为Matrix家服务器的源地址。

注册完成之后，客户端会提醒您生成恢复密钥，请**务必妥善保管，否则您将会丢失您的所有聊天数据！**

在这之后，请您保管好您的Matrix用户名（形如`@username:example.com`），这是您的唯一用户标识，不可以再更改。