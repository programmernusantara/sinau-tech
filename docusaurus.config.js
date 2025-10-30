// @ts-check
// Docusaurus Configuration - Sinau Tech
// Belajar Komputer, Jaringan, Pemrograman, dan AI dari Dasar

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sinau Tech',
  tagline: 'Belajar Komputer Dengan Mudah',
  favicon: 'img/favicon.ico',

  // 🌐 Site Info
  url: 'https://programmernusantara.github.io',
  baseUrl: '/sinau-tech/',
  organizationName: 'programmernusantara',
  projectName: 'sinau-tech',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  future: {
    v4: true,
  },

  // 📘 Documentation & Blog Settings
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/programmernusantara/sinau-tech/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/programmernusantara/sinau-tech/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // 🎨 Theme Configuration
  themeConfig: ({
    image: 'img/sinau-social-card.jpg',
    navbar: {
      title: 'Sinau Tech',
      logo: {
        alt: 'Sinau Tech Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/programmernusantara',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Belajar',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Komunitas',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/wildan_fq',
            },
          ],
        },
        {
          title: 'Lainnya',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/programmernusantara',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Sinau Tech. Dibangun oleh Wildan FQ.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
