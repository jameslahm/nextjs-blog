import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/time';
import utilStyles from '../../styles/utils.module.css';

export default function FirstPort({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingX1}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date}></Date>
				</div>
				<br />
				<div
					dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
				></div>
			</article>
		</Layout>
	);
}

import { getAllPostIds, getPostData } from '../../lib/posts';
export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
