import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';

import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData =await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export default function Post({postData}) {
  return (
  <div className={utilStyles.contain}>
  <Layout>
    <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <div className={utilStyles.social}>
          <button className={utilStyles.buttons}>
            <Link className={utilStyles.link} href="https://twitter.com/sneha_farkya">Twitter</Link> 
          </button>
          <button className={utilStyles.buttons}>
            <Link className={utilStyles.link}  href="https://linkedin.com/in/sneha-farkya">Linkedin</Link> 
          </button>
          <button className={utilStyles.buttons}>
            <Link className={utilStyles.link}  href="https://github.com/snehafarkya">Github</Link> 
          </button>
          <button className={utilStyles.buttons}>
            <Link className={utilStyles.link}  href="https://snehafarkya.hashnode.dev/">Hashnode</Link> 
          </button>
        </div>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div className={utilStyles.text} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
  </Layout>;
  </div>
  )
}