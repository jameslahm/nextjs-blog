import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/time'
import Link from 'next/link'

export default function Home({allPostsData}) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Sed porro dicta a cum cumque recusandae nemo voluptates
					consectetur iusto blanditiis, voluptate tenetur totam
					inventore omnis itaque quam et, reprehenderit placeat!
				</p>
				<p>
					This is a sample website - You can learn at{' '}
					<a href="/">Here</a>
				</p>
			</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(({id,date,title})=>(
              <li className={utilStyles.listItem} key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
            <a>{title}</a>
                </Link>
                <br/>
                <small className={utilStyles.lightText}>
                  <Date dateString={date}></Date>
                </small>
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
	);
}

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps(){
  const allPostsData=getSortedPostsData()
  return {
    props:{
      allPostsData
    }
  }
}