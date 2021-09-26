import Head from "next/head";
import { appWithTranslation } from "next-i18next";

import "../styles/main.css";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (

      <Layout>
        <Head>
          <title>KidsLoop</title>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        </Head>

        <Component {...pageProps} />


      </Layout>
  );
};

export default appWithTranslation(MyApp);
