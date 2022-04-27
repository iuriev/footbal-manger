import Head from "next/head";
import Layout from "../components/Layout";
import '../styles/globals.scss';
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps } : AppProps) => (
  <Layout>
    <Head>
      <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
      />
        <title>Football Manager</title>
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default MyApp;
