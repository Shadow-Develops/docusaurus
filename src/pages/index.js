import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import DocCardData from '@site/src/data/docCards';

function DocCard({ icon, image, title, description, docUrl, color }) {
	return (
		<div className={clsx('col col--4', styles.docCardWrapper)}>
			<Link to={docUrl} className={styles.docCardLink}>
				<div className={clsx(styles.docCard, styles[`docCard--${color}`])}>
					<div className={styles.docCardHeader}>
						<div className={styles.docCardIcon}>
							{image ? (
								typeof image === 'string' ? (
									<img
										src={image}
										alt={title}
										className={styles.docCardImage}
									/>
								) : (
									React.createElement(image, {
										className: styles.docCardImage,
										role: 'img',
										'aria-label': title,
									})
								)
							) : (
								icon
							)}
						</div>
						<Heading as='h3' className={styles.docCardTitle}>
							{title}
						</Heading>
					</div>
					<div className={styles.docCardBody}>
						<p className={styles.docCardDescription}>{description}</p>
					</div>
					<div className={styles.docCardFooter}>
						<span className={styles.docCardArrow}>Read more →</span>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout description={siteConfig.tagline}>
			<main className={styles.docCardsSection}>
				<div className='container'>
					<div className={styles.docCardsHeader}>
						<Heading as='h2' className={styles.docCardsTitle}>
							{siteConfig.title}
						</Heading>
						<p className={styles.docCardsSubtitle}>{siteConfig.tagline}</p>
					</div>
					<div className='row'>
						{DocCardData.map((props, idx) => (
							<DocCard key={idx} {...props} />
						))}
					</div>
				</div>
			</main>
		</Layout>
	);
}
