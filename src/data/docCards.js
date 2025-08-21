// Colors: blue, green, purple, orange, red, teal

const DocCardData = [
	{
		title: 'Shadow Store',
		image: require('@site/static/img/shopping-cart.svg').default,
		description:
			'Learn how to install and manage the settings for Shadow Store, and all its addons.',
		docUrl: '/docs/shadowStore',
		color: 'blue',
	},
	{
		title: 'SPARK Vehicle Control',
		icon: '⚡',
		description:
			'Installation and configuration guide for SPARK Vehicle Control.',
		docUrl: '/docs/spark',
		color: 'red',
	},
	{
		title: 'Community Templates',
		image: require('@site/static/img/community.svg').default,
		description:
			'Details on how to install and manage both the Legacy and V2 Community Template.',
		docUrl: '/docs/communityTemplate-v2',
		color: 'teal',
	},
];

export default DocCardData;
