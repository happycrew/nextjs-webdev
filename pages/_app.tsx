import Head from 'next/head';
import '../styles/globals.scss';
import Layout from '../components/Layout';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
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
