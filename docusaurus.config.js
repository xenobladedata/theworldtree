// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The World Tree',
  tagline: 'Adenine would love this place',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://worldtree.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xenobladedata', // Usually your GitHub org/user name.
  projectName: 'worldtree', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
	defaultLocale: 'en',
	locales: ['en'],
  },

  presets: [
	[
	  'classic',
	  /** @type {import('@docusaurus/preset-classic').Options} */
	  ({
		docs: {
			routeBasePath: '/',
		  sidebarPath: require.resolve('./sidebars.js'),
		  // Please change this to your repo.
		  // Remove this to remove the "edit this page" links.
		  editUrl:
			'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
		},
		blog: false/*{
		  showReadingTime: true,
		  // Please change this to your repo.
		  // Remove this to remove the "edit this page" links.
		  editUrl:
			'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
		}*/,
		theme: {
		  customCss: require.resolve('./src/css/custom.css'),
		},
	  }),
	],
  ],

  themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
	({
	  // Replace with your project's social card
	  image: 'img/docusaurus-social-card.jpg',
	  navbar: {
		title: 'The World Tree',
		logo: {
		  alt: 'Adenine would love this place',
		  src: 'img/icons/xc1_icon.svg',
		},
		items: [
		  {
			href: 'https://github.com/facebook/docusaurus',
			label: 'GitHub',
			position: 'right',
		  },
		],
	  },
	  footer: {
		style: 'dark',
		copyright: `Copyright © ${new Date().getFullYear()} The World Tree Contributors. Built with Docusaurus.`,
	  },
	  prism: {
		theme: lightCodeTheme,
		darkTheme: darkCodeTheme,
	  },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      }
	}),
};

module.exports = config;
