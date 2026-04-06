import styles from '@site/src/css/ThemePreview.module.css';

function hexToRgb(hex) {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);
	return [r, g, b];
}

function luminance([r, g, b]) {
	const c = [r, g, b].map((v) => {
		v /= 255;
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
	});
	return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}

function contrastColor(bg) {
	const rgb = hexToRgb(bg);
	return luminance(rgb) > 0.35 ? '#111111' : '#eeeeee';
}

const THEMES = [
	{
		name: 'light',
		bg: '#ffffff',
		s1: '#e5e6e6',
		s2: '#d6d7d7',
		p: '#570df8',
		se: '#f000b8',
		a: '#37cdbe',
		n: '#3d4451',
	},
	{
		name: 'dark',
		bg: '#1d232a',
		s1: '#191e24',
		s2: '#15191e',
		p: '#661ae6',
		se: '#d926a9',
		a: '#1fb2a6',
		n: '#191e24',
	},
	{
		name: 'cupcake',
		bg: '#faf7f5',
		s1: '#efeae6',
		s2: '#e7e2df',
		p: '#65c3c8',
		se: '#ef9fbc',
		a: '#eeaf3a',
		n: '#291334',
	},
	{
		name: 'bumblebee',
		bg: '#ffffff',
		s1: '#e5e6e6',
		s2: '#d6d7d7',
		p: '#e0a82e',
		se: '#f9d72f',
		a: '#181830',
		n: '#181830',
	},
	{
		name: 'emerald',
		bg: '#ffffff',
		s1: '#e5e6e6',
		s2: '#d6d7d7',
		p: '#66cc8a',
		se: '#377cfb',
		a: '#f68067',
		n: '#333c4d',
	},
	{
		name: 'corporate',
		bg: '#ffffff',
		s1: '#e5e6e6',
		s2: '#d6d7d7',
		p: '#4b6bfb',
		se: '#7b92b2',
		a: '#67cba0',
		n: '#181a2a',
	},
	{
		name: 'synthwave',
		bg: '#1a103c',
		s1: '#150e30',
		s2: '#100b26',
		p: '#e779c1',
		se: '#58c7f3',
		a: '#f3cc30',
		n: '#20134e',
	},
	{
		name: 'retro',
		bg: '#e4d8b4',
		s1: '#d8c9a3',
		s2: '#cbbf94',
		p: '#ef9995',
		se: '#a4cbb4',
		a: '#dc8850',
		n: '#2e282a',
	},
	{
		name: 'cyberpunk',
		bg: '#ffee00',
		s1: '#f5e400',
		s2: '#ebda00',
		p: '#ff7598',
		se: '#75d1f0',
		a: '#c07eec',
		n: '#423f00',
	},
	{
		name: 'valentine',
		bg: '#fae4ec',
		s1: '#f5d1e0',
		s2: '#efbfd4',
		p: '#e96d7b',
		se: '#a991f7',
		a: '#66b1b3',
		n: '#af4670',
	},
	{
		name: 'halloween',
		bg: '#212121',
		s1: '#191919',
		s2: '#141414',
		p: '#f28c18',
		se: '#6d3a9c',
		a: '#51a800',
		n: '#212121',
	},
	{
		name: 'garden',
		bg: '#e9e7e7',
		s1: '#dedad9',
		s2: '#d3cecd',
		p: '#5c7f67',
		se: '#ecb7a0',
		a: '#e7c9c5',
		n: '#100f0f',
	},
	{
		name: 'forest',
		bg: '#171212',
		s1: '#120e0e',
		s2: '#0e0b0b',
		p: '#1eb854',
		se: '#1fd65f',
		a: '#d99330',
		n: '#171212',
	},
	{
		name: 'aqua',
		bg: '#345da7',
		s1: '#2b4f97',
		s2: '#254487',
		p: '#09ecf3',
		se: '#966fb3',
		a: '#ffe999',
		n: '#1b1340',
	},
	{
		name: 'lofi',
		bg: '#ffffff',
		s1: '#e5e6e6',
		s2: '#d6d7d7',
		p: '#0d0d0d',
		se: '#1a1a1a',
		a: '#262626',
		n: '#000000',
	},
	{
		name: 'pastel',
		bg: '#ffffff',
		s1: '#e5e6e6',
		s2: '#d6d7d7',
		p: '#d1c1d7',
		se: '#f6cbd1',
		a: '#b4e9d6',
		n: '#70acc7',
	},
	{
		name: 'fantasy',
		bg: '#ffffff',
		s1: '#e5e6e6',
		s2: '#d6d7d7',
		p: '#6e0b75',
		se: '#007ebd',
		a: '#f3a212',
		n: '#1f2937',
	},
	{
		name: 'wireframe',
		bg: '#ffffff',
		s1: '#e5e6e6',
		s2: '#d6d7d7',
		p: '#b8b8b8',
		se: '#b8b8b8',
		a: '#b8b8b8',
		n: '#ebebeb',
	},
	{
		name: 'black',
		bg: '#000000',
		s1: '#0a0a0a',
		s2: '#141414',
		p: '#343232',
		se: '#343232',
		a: '#343232',
		n: '#000000',
	},
	{
		name: 'luxury',
		bg: '#09090b',
		s1: '#070709',
		s2: '#050507',
		p: '#ffffff',
		se: '#152747',
		a: '#513448',
		n: '#331800',
	},
	{
		name: 'dracula',
		bg: '#282a36',
		s1: '#20222e',
		s2: '#191b25',
		p: '#ff79c6',
		se: '#bd93f9',
		a: '#ffb86c',
		n: '#414558',
	},
	{
		name: 'cmyk',
		bg: '#ffffff',
		s1: '#e5e6e6',
		s2: '#d6d7d7',
		p: '#45aeee',
		se: '#e8488a',
		a: '#f5dc0e',
		n: '#404040',
	},
	{
		name: 'autumn',
		bg: '#f1f1f1',
		s1: '#e6e6e6',
		s2: '#d8d8d8',
		p: '#8c0327',
		se: '#d85251',
		a: '#d59b6a',
		n: '#826a5c',
	},
	{
		name: 'business',
		bg: '#1d232a',
		s1: '#191e24',
		s2: '#15191e',
		p: '#1c4f82',
		se: '#7c909a',
		a: '#e3bfac',
		n: '#111318',
	},
	{
		name: 'acid',
		bg: '#f9f9f9',
		s1: '#eeeeee',
		s2: '#e2e2e2',
		p: '#ff00f4',
		se: '#ff7400',
		a: '#00e8c6',
		n: '#343434',
	},
	{
		name: 'lemonade',
		bg: '#ffffff',
		s1: '#e5e6e6',
		s2: '#d6d7d7',
		p: '#519903',
		se: '#e9e92f',
		a: '#d99330',
		n: '#191919',
	},
	{
		name: 'night',
		bg: '#0f1729',
		s1: '#0b1021',
		s2: '#08091a',
		p: '#38bdf8',
		se: '#818cf8',
		a: '#f471b5',
		n: '#1e2939',
	},
	{
		name: 'coffee',
		bg: '#20161f',
		s1: '#180f18',
		s2: '#130c13',
		p: '#db924b',
		se: '#263e3f',
		a: '#10576d',
		n: '#120c12',
	},
	{
		name: 'winter',
		bg: '#ffffff',
		s1: '#e5e6e6',
		s2: '#d6d7d7',
		p: '#047aed',
		se: '#463aa1',
		a: '#c148ac',
		n: '#021431',
	},
	{
		name: 'dim',
		bg: '#2a303c',
		s1: '#242933',
		s2: '#1f232e',
		p: '#9fe88d',
		se: '#ff7d5c',
		a: '#c792e9',
		n: '#1c212b',
	},
	{
		name: 'nord',
		bg: '#eceff4',
		s1: '#e5e9f0',
		s2: '#d8dee9',
		p: '#5e81ac',
		se: '#81a1c1',
		a: '#88c0d0',
		n: '#4c566a',
	},
	{
		name: 'sunset',
		bg: '#f5f0e9',
		s1: '#ede6da',
		s2: '#e3dbcc',
		p: '#fd5f00',
		se: '#f5a623',
		a: '#0aa5c2',
		n: '#1a1a2e',
	},
];

export default function ThemePreview() {
	return (
		<div className={styles.grid}>
			{THEMES.map((t) => (
				<div
					key={t.name}
					className={styles.card}
					style={{ backgroundColor: t.bg }}
				>
					<div className={styles.sidebar}>
						<div
							className={styles.sidebarTop}
							style={{ backgroundColor: t.s1 }}
						/>
						<div
							className={styles.sidebarBottom}
							style={{ backgroundColor: t.s2 }}
						/>
					</div>
					<div className={styles.content}>
						<div className={styles.name} style={{ color: contrastColor(t.bg) }}>
							{t.name}
						</div>
						<div className={styles.swatches}>
							{[t.p, t.se, t.a, t.n].map((color, i) => (
								<div
									key={i}
									className={styles.swatch}
									style={{ backgroundColor: color }}
								>
									<span className={styles.swatchLabel}>A</span>
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
