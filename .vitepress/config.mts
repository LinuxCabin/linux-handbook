import { defineConfig } from '@lando/vitepress-theme-default-plus/config';
import mkdocsAdmonitions from './mkdocs-admonitions.mjs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'docs',

  lang: 'zh-CN',
  title: 'LinuxCabin Handbook',
  description: '给新手的Linux手册',

  markdown: {
    config: (md) => md.use(mkdocsAdmonitions),
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '开始', link: '/getting-started/purpose', activeMatch: '^/getting-started/' },
      { text: '发行版', link: '/distros/distro', activeMatch: '^/distros/' },
      { text: '桌面', link: '/desktop/desktop', activeMatch: '^/desktop/' },
      { text: '兼容性', link: '/compatibility/windows/wine/wine', activeMatch: '^/compatibility/' },
      { text: '应用与工具', link: '/applications/apps', activeMatch: '^/applications/' },
      { text: '进阶', link: '/advanced/lvm', activeMatch: '^/advanced/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/getting-started/': [
        {
          text: '开始',
          items: [
            { text: '手册目的', link: '/getting-started/purpose' },
            { text: '操作系统基础', link: '/getting-started/os-basis' },
            { text: '安装前的准备', link: '/getting-started/before-installing' },
            { text: '安装 Linux', link: '/getting-started/install' },
            {
              text: '详细安装过程',
              items: [
                { text: 'Debian', link: '/getting-started/installation-by-distro/debian' },
                { text: 'Fedora', link: '/getting-started/installation-by-distro/fedora' }
              ]
            },
            { text: '安装后的配置', link: '/getting-started/post-installation' },
            {
              text: '设备支持',
              items: [
                { text: '驱动', link: '/getting-started/devices/drivers' },
                { text: 'Mac 设备', link: '/getting-started/devices/mac' },
                { text: '其他设备', link: '/getting-started/devices/others' }
              ]
            },
            { text: '输入法', link: '/getting-started/input-method' },
            { text: '常用命令', link: '/getting-started/common-command' },
            { text: '网络', link: '/getting-started/network' }
          ]
        }
      ],

      '/distros/': [
        {
          text: '发行版',
          items: [
            { text: '发行版概览', link: '/distros/distro' },
            {
              text: 'Debian 系',
              items: [
                { text: '发行版关系图', link: '/distros/debian/graph' },
                { text: 'Debian', link: '/distros/debian/debian' },
                { text: 'Ubuntu', link: '/distros/debian/ubuntu' },
                { text: 'Linux Mint', link: '/distros/debian/linuxmint' },
                { text: 'Deepin', link: '/distros/debian/deepin' }
              ]
            },
            {
              text: 'Red Hat 系',
              items: [
                { text: '发行版关系图', link: '/distros/rhel/graph' },
                { text: 'Fedora', link: '/distros/rhel/fedora' },
                { text: 'RHEL', link: '/distros/rhel/rhel' },
                { text: 'Rocky Linux', link: '/distros/rhel/rocky' },
                { text: 'AlmaLinux', link: '/distros/rhel/almalinux' }
              ]
            },
            {
              text: 'Arch 系',
              items: [
                { text: 'Arch Linux', link: '/distros/arch/archlinux' },
                { text: 'Artix Linux', link: '/distros/arch/artixlinux' },
                { text: 'CachyOS', link: '/distros/arch/cachy' },
                { text: 'EndeavourOS', link: '/distros/arch/endeavoros' }
              ]
            },
            {
              text: 'SUSE 系',
              items: [
                { text: 'SUSE', link: '/distros/suse/suse' },
                { text: 'openSUSE', link: '/distros/suse/opensuse' }
              ]
            },
            { text: 'NixOS', link: '/distros/nixos' },
            { text: 'Gentoo', link: '/distros/gentoo' }
          ]
        }
      ],

      '/desktop/': [
        {
          text: '桌面',
          items: [
            { text: '桌面概览', link: '/desktop/desktop' },
            {
              text: '桌面环境',
              items: [
                { text: 'KDE Plasma', link: '/desktop/de/kde' },
                { text: 'GNOME', link: '/desktop/de/gnome' },
                { text: 'Xfce', link: '/desktop/de/xfce' }
              ]
            },
            {
              text: '窗口管理器',
              items: [
                { text: 'Hyprland', link: '/desktop/wm/hyprland' },
                { text: 'Niri', link: '/desktop/wm/niri' },
                { text: 'i3', link: '/desktop/wm/i3' },
                { text: 'Sway', link: '/desktop/wm/sway' },
                { text: 'Openbox', link: '/desktop/wm/openbox' }
              ]
            },
            {
              text: 'Dotfiles',
              items: [
                { text: 'DMS', link: '/desktop/dotfiles/dms' },
                { text: 'end-4', link: '/desktop/dotfiles/end-4' },
                { text: 'ML4W', link: '/desktop/dotfiles/ml4w' }
              ]
            }
          ]
        }
      ],

      '/compatibility/': [
        {
          text: '兼容性',
          items: [
            {
              text: 'Windows 兼容',
              items: [
                {
                  text: 'Wine 及其衍生方案',
                  items: [
                    { text: 'Wine', link: '/compatibility/windows/wine/wine' },
                    { text: 'Bottles', link: '/compatibility/windows/wine/bottles' },
                    { text: 'Steam', link: '/compatibility/windows/wine/steam' },
                    { text: 'Adobe 应用', link: '/compatibility/windows/wine/adobe_on_wine' }
                  ]
                },
                { text: '虚拟机', link: '/compatibility/windows/vm' }
              ]
            },
            {
              text: '跨发行版',
              items: [
                { text: 'Distrobox', link: '/compatibility/inter-distros/distrobox' }
              ]
            }
          ]
        }
      ],

      '/applications/': [
        {
          text: '应用与工具',
          items: [
            { text: '应用概览', link: '/applications/apps' },
            {
              text: '即时通讯',
              items: [
                { text: 'QQ', link: '/applications/im/qq' },
                { text: '微信', link: '/applications/im/wechat' },
                { text: 'Matrix', link: '/applications/im/matrix' }
              ]
            },
            {
              text: '办公与协作',
              items: [
                { text: '钉钉', link: '/applications/office/dingtalk' },
                { text: '飞书', link: '/applications/office/feishu' },
                { text: 'LibreOffice', link: '/applications/office/libreoffice' },
                { text: 'ONLYOFFICE', link: '/applications/office/onlyoffice' },
                { text: 'WPS Office', link: '/applications/office/wps' }
              ]
            },
            {
              text: '娱乐',
              items: [
                { text: 'QQ 音乐', link: '/applications/entertainment/qqmusic' },
                { text: '网易云音乐', link: '/applications/entertainment/ncm' },
                { text: '腾讯视频', link: '/applications/entertainment/tencent' },
                { text: '爱奇艺', link: '/applications/entertainment/iqiyi' }
              ]
            },
            {
              text: '编辑器',
              items: [
                { text: 'Nano', link: '/applications/editors/nano' },
                { text: 'Emacs', link: '/applications/editors/emacs' },
                { text: 'Vim', link: '/applications/editors/vim' },
                { text: 'VS Code', link: '/applications/editors/vscode' }
              ]
            },
            {
              text: '多媒体处理',
              items: [
                { text: 'GIMP', link: '/applications/multimedia/gimp' },
                { text: 'Krita', link: '/applications/multimedia/krita' },
                { text: 'OBS Studio', link: '/applications/multimedia/obs_studio' },
                { text: 'Kdenlive', link: '/applications/multimedia/kdenlive' },
                { text: 'DaVinci Resolve', link: '/applications/multimedia/davinci' },
                { text: 'VLC', link: '/applications/multimedia/vlc' },
                { text: '其他', link: '/applications/multimedia/others' }
              ]
            },
            {
              text: '编程与开发',
              items: [
                { text: 'Git', link: '/applications/programming/git' },
                { text: 'SSH', link: '/applications/programming/ssh' },
                { text: 'Python', link: '/applications/programming/python' },
                { text: 'Miniconda', link: '/applications/programming/miniconda' },
                { text: 'C/C++', link: '/applications/programming/cpp' }
              ]
            },
            {
              text: '工程制图',
              items: [
                { text: 'ZWCAD', link: '/applications/cad/zwcad' },
                { text: 'FreeCAD', link: '/applications/cad/freecad' },
                { text: 'OpenSCAD', link: '/applications/cad/openscad' }
              ]
            },
            {
              text: 'AI',
              items: [
                { text: 'OpenClaw', link: '/applications/ai/openclaw' },
                { text: 'OpenCode', link: '/applications/ai/opencode' }
              ]
            },
            {
              text: 'Shell',
              items: [
                { text: 'Shell', link: '/applications/shell/shell' },
                { text: 'Bash', link: '/applications/shell/bash' },
                { text: 'Zsh', link: '/applications/shell/zsh' },
                { text: 'Fish', link: '/applications/shell/fish' }
              ]
            },
            {
              text: '游戏引擎',
              items: [
                { text: 'Godot', link: '/applications/gameengine/godot' }
              ]
            },
            {
              text: '系统维护',
              items: [
                { text: 'GParted', link: '/applications/maintenance/gparted' }
              ]
            },
            {
              text: '其他',
              items: [
                { text: 'Fastfetch', link: '/applications/other/fastfetch' }
              ]
            }
          ]
        }
      ],

      '/advanced/': [
        {
          text: '进阶',
          items: [
            { text: 'LVM', link: '/advanced/lvm' },
            {
              text: 'Btrfs',
              items: [
                { text: 'Btrfs', link: '/advanced/btrfs/btrfs' },
                { text: '在 Btrfs 上安装 Linux', link: '/advanced/btrfs/linux_on_btrfs' },
                { text: '迁移到 Btrfs', link: '/advanced/btrfs/migrating_to_btrfs' }
              ]
            },
            { text: 'Swap', link: '/advanced/swap' },
            { text: '引导加载器', link: '/advanced/boot_loader' },
            {
              text: '命令',
              items: [
                { text: 'dd', link: '/advanced/command/dd' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'codeberg', link: 'https://codeberg.org/LinuxCabin/linux-handbook' }
    ]
  }
})