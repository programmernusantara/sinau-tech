// @ts-check
// Docusaurus Configuration - SinTec
// Belajar App Development • IoT • AI

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SinTec',
  tagline: 'Belajar App Development, IoT, & AI',
  favicon: 'img/favicon.ico',

  // Site Info
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

  // Docs Only (Blog & Portfolio Removed)
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/programmernusantara/sinau-tech/tree/main/',
        },
        blog: false,        // Blog removed
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  // Theme Config
  themeConfig: ({
    image: 'img/sinau-social-card.jpg',
    navbar: {
      title: 'SinTec',
      logo: { alt: 'SinTec Logo', src: 'img/logo.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', label: 'Tutorial', position: 'left' },
        { href: 'https://github.com/programmernusantara', label: 'GitHub', position: 'right' },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Menu',
          items: [
            { label: 'Tutorial', to: '/docs/intro' },
          ],
        },
        {
          title: 'Komunitas',
          items: [
            { label: 'Discord', href: 'https://discordapp.com/invite/wildan_fq' },
          ],
        },
        {
          title: 'Sosial',
          items: [
            { label: 'GitHub', href: 'https://github.com/programmernusantara' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} SinTec · oleh Wildan FQ`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
