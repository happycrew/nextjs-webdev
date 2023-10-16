import Layout from '@/components/Layout';
import Head from 'next/head';
import '@/styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>NextJS APP</title>
    </Head>
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  </>
);

export default MyApp;
