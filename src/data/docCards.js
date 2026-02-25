/*
 * Color Variants:
 *   blue      green     purple    orange    red       teal
 *   pink      indigo    yellow    cyan      rose      amber
 *   lime      emerald   sky       violet    fuchsia   slate
 */

export default [
	{
		title: 'Shadow Store',
		image: require('@site/static/img/shopping-cart.svg').default,
		description:
			'Learn how to install and manage the settings for Shadow Store, and all its addons.',
		docUrl: '/shadowStore',
		color: 'blue',
	},
	{
		title: 'License System',
		image: require('@site/static/img/licenseManage.svg').default,
		description:
			'Learn how to install and manage the settings for Shadow License System.',
		docUrl: '/licenseSystem',
		color: 'blue',
	},
	{
		title: 'CDN Manager',
		icon: '🖼️',
		description: 'Learn how to setup and manage the CDN Manager.',
		docUrl: '/cdnManager',
		color: 'amber',
	},
	{
		title: 'Shadow Status',
		icon: '🛜',
		description: "Learn how to setup and run your Github Page's Status page.",
		docUrl: '/shadowStatus',
		color: 'lime',
	},
	{
		title: 'Community Template',
		image: require('@site/static/img/community.svg').default,
		description:
			'Learn how to install and manage the settings for your Community Template.',
		docUrl: '/communityTemplate',
		color: 'teal',
	},
	{
		title: 'Shopify Bot',
		icon: '🏪',
		description:
			'Learn how to install and integrate the Shopify Bot with your Discord & Shopify.',
		docUrl: '/shopifyBot',
		color: 'green',
	},
	{
		title: 'Personal Landing',
		icon: '🏠',
		description: 'Learn how to setup and run your Personal Landing page.',
		docUrl: '/personalLanding',
		color: 'purple',
	},
	{
		title: 'SPARK Vehicle Control',
		icon: '⚡',
		description:
			'Installation and configuration guide for SPARK Vehicle Control.',
		docUrl: '/spark/getting-started',
		color: 'red',
	},
	{
		title: 'Legacy Products',
		image: require('@site/static/img/history.svg').default,
		description:
			'All legacy or deprecated products for those that still own them.',
		docUrl: '/legacy',
		color: 'slate',
	},
];
