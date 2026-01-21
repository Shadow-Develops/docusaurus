import { themes as prismThemes } from 'prism-react-renderer';

export default {
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
	onBrokenAnchors: 'warn',

	markdown: {
		format: 'detect',
		mermaid: true,
		hooks: {
			onBrokenMarkdownImages: 'warn',
			onBrokenMarkdownLinks: 'warn',
		},
	},

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					routeBasePath: '/',
					sidebarPath: './sidebars.js',
					editUrl: 'https://github.com/Shadow-Develops/docusaurus/tree/main',
					showLastUpdateTime: true,
				},
				pages: {
					editUrl: 'https://github.com/Shadow-Develops/docusaurus/tree/main',
					showLastUpdateTime: true,
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			},
		],
	],

	themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],

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
							to: '/shadowStore',
						},
						{
							label: 'License System',
							to: '/licenseSystem',
						},
						{
							label: 'SPARK',
							to: '/spark/getting-started',
						},
						{
							label: 'Legacy Products',
							to: '/legacy',
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
		liveCodeBlock: {
			playgroundPosition: 'top',
		},
	},
};
