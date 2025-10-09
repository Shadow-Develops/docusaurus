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

	future: {
		v4: true,
	},

	url: 'https://docs.shadowdevs.com',
	baseUrl: '/',

	organizationName: 'Shadow-Develops',
	projectName: 'docusaurus',
	trailingSlash: false,

	onBrokenLinks: 'throw',

	markdown: {
		format: 'detect',
		hooks: {
			onBrokenMarkdownImages: 'warn',
			onBrokenMarkdownLinks: 'warn',
		},
	},

	themes: ['@docusaurus/theme-live-codeblock'],

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.js',
					editUrl: 'https://github.com/Shadow-Develops/docusaurus/tree/main',
					showLastUpdateTime: true,
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			},
		],
	],

	themeConfig: {
		image: 'img/Banner.png',
		colorMode: {
			defaultMode: 'dark',
			disableSwitch: true,
		},
		docs: {
			sidebar: {
				hideable: true,
				autoCollapseCategories: true,
			},
		},
		navbar: {
			hideOnScroll: true,
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
					sidebarId: 'licenseSystem',
					position: 'left',
					label: 'License System',
				},
				{
					type: 'docSidebar',
					sidebarId: 'spark',
					position: 'left',
					label: 'SPARK',
				},
				{
					href: 'https://shadowdevs.com',
					position: 'right',
					className: 'header-home-link',
					'aria-label': 'Home Site',
				},
				{
					href: 'https://github.com/Shadow-Develops/docusaurus',
					position: 'right',
					className: 'header-github-link',
					'aria-label': 'GitHub repository',
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
							label: 'License System',
							to: '/docs/licenseSystem',
						},
						{
							label: 'SPARK',
							to: '/docs/spark/getting-started',
						},
						{
							label: 'Community Templates',
							to: '/docs/communityTemplates/v2',
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
			copyright: `Copyright © ${new Date().getFullYear()} <a href="https://shadowdevs.com">Shadow Development</a>. <i>Built with Docusaurus.</i>`,
		},
		prism: {
			additionalLanguages: ['PHP', 'powershell', 'bash', 'diff', 'json', 'lua'],
			theme: prismThemes.okaidia,
			darkTheme: prismThemes.okaidia,
		},
		algolia: {
			appId: 'KQKEAMJ226',
			apiKey: '7b567461cbc62aa7760dc71c12047400',
			indexName: 'Shadow Docs',

			contextualSearch: true,
		},
	},
};

export default config;
