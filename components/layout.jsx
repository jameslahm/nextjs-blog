import styles from './layout.module.css';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Jameslahm';
export const siteTitle = "Jameslahm's Blog";

function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Jameslahm's blog" />
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<img
							src="/images/profile.jpg"
							alt={name}
							className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
						/>
						<h1 className={utilStyles.heading2X1}>{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<a>
								<img
									src="/images/profile.jpg"
									alt={name}
									className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
								/>
							</a>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/">
								<a className={utilStyles.colorInherit}>
									{name}
								</a>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>Back to Home</a>
					</Link>
				</div>
			)}
		</div>
	);
}

export default Layout;
