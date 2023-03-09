// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ESME HUD Docs',
  tagline: 'испортс солюшнс.',
  url: 'https://hud-docs.esme.team',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'markovvii', // Usually your GitHub org/user name.
  projectName: 'esme-hud-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
//          editUrl:
//            'https://github.com/markovvii/mc-mirele-wiki/tree/main/',
        },
        blog: false,
//        blog: {
//          showReadingTime: true,
//          // Please change this to your repo.
//          // Remove this to remove the "edit this page" links.
//          editUrl:
//            'https://github.com/markovvii/mc-mirele-wiki/tree/main/',
//        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Документация ESME HUD',
        logo: {
          alt: 'Лого',
          src: 'img/axolotl.svg',
        },
        announcementBar: {
          id: 'announcementBar-1',
          content:
          `⭐️ Если вам нравится ESME HUD, то посетите наш <a target="_blank" rel="noopener noreferrer" href="https://esme.team/">сайт</a> и подпишитесь в <a target="_blank" rel="noopener noreferrer" href="https://vk.com/esmesports/">ВКонтакте ⭐️</a>`,
          isCloseable: false,
        },
        items: [
          {
            href: "https://esme.team/",
            position: "right",
            label: "💬 Наш сайт",
          },
          {
            href: "https://t.me/markoffkin_bot",
            position: "right",
            label: "💬 Телеграм",
          },
          {
            href: "https://discord.gg/j7PKU5WU6y",
            position: "right",
            label: "🔊 Дискорд",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
