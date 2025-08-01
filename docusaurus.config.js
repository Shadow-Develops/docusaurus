// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Shadow Devs Docs',
	tagline:
		"Official Documentation for Shadow Development's products, services, and similar! Details on installation, answers to FAQs, and such can be found here.",
	favicon: 'img/favicon.ico',

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: 'https://docs.shadowdevs.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'Shadow-Develops', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.
	trailingSlash: false,

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
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
					sidebarPath: './sidebars.js',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/Shadow-Develops/docusaurus/',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			image: 'img/Banner.png',
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: true,
			},
			navbar: {
				title: 'Shadow Dev Docs',
				logo: {
					alt: 'My Site Logo',
					src: 'img/Logo.png',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'shadowStore',
						position: 'left',
						label: 'Shadow Store',
					},
					{
						type: 'docSidebar',
						sidebarId: 'communityTemplate',
						position: 'left',
						label: 'Community Templates',
					},
					{
						href: 'https://shadowdevs.com',
						label: 'Home Site',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Shadow Store',
								to: '/docs/shadowStore',
							},
							{
								label: 'Community Templates',
								to: '/docs/communityTemplate-v2',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Discord',
								href: 'https://discord.gg/shadowdevs',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/Shadow-Develops',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} <a href="/">Shadow Development</a>. <i>Built with Docusaurus.</i>`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};

export default config;
