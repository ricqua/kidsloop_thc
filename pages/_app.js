import Head from "next/head";
import { appWithTranslation } from "next-i18next";

import "../styles/main.css";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (

      <Layout>
        <Head>
          <title>KidsLoop</title>
        </Head>

        <Component {...pageProps} />


      </Layout>
  );
};

export default appWithTranslation(MyApp);
