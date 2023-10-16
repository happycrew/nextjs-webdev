import Layout from '@/components/Layout';
import Head from 'next/head';
import '@/styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>NextJS APP</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  </>
);

export default MyApp;
