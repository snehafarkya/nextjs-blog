import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

// this function is used to get the data from getSortedPostsData() and send it as a prop to Homee()
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <div className={utilStyles.contain}>
    <Layout home >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd }>
        <p >Great to see you here! I am Sneha Farkya, a BCA graduate from Medi-Caps University, Indore. I am a Frontend Developer and Technical Writer.

        In my role as a Front-end developer, I combine technical expertise with creativity. My passion for designing and developing user-friendly web applications has lead me to sharpen my skills in HTML, CSS, and JavaScript to provide dynamic, responsive user interfaces.
        </p>
        <p >You can connect with me here on <Link href="https://linktr.ee/sneha_farkya">Linktree</Link> </p>
          
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {/* using map method to fetch data */}
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
          
        </ul>
      </section>
    </Layout>
    </div>
  );
}