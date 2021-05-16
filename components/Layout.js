import Head from 'next/head';
import Header from './Header';
import styles from '@/styles/Layout.module.css';
import Footer from './Footer';
import Showcase from './Showcase';
import { useRouter } from 'next/router';

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' description={description}></meta>
        <meta name='keywords' keywords={keywords}></meta>
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'DJ PROXIMATE | FIND DJ NEAR YOU',
  keywords: 'music, dj, songs, edm',
  description: 'Find DJ or Music Parties near you',
};
