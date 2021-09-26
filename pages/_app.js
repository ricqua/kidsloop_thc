import Head from "next/head";
import { appWithTranslation } from "next-i18next";

import "../styles/main.css";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (

      <Layout>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie-edge" />
          
          <meta property="og:url" content="https://siamlocalize.com/" />
          <meta
            name="application-name"
            content="Siamlocalize - China/Thailand localizatoin services"
          />
          <meta
            name="msapplication-tooltip"
            content="Siamlocalize - China/Thailand localizatoin services"
          />
          <meta
            id="meta_og_title"
            property="og:title"
            content="Siamlocalize - China/Thailand localizatoin services"
          />
          <meta
            name="description"
            content="Siamlocalize - China/Thailand localizatoin services"
          />
          <meta
            property="og:description"
            content="Siamlocalize - China/Thailand localizatoin services"
          />
          <meta
            id="meta_og_image"
            property="og:image"
            content="/images/OG_Images/Siamlocalize_og_facebook(1200x630px).png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="keywords" content="" />
          <link rel="canonical" href="https://siamlocalize.com/" />

          <meta
            name="description"
            content="SiamLocalise is a translation and content localisation agency with a strong presence in the Thai and Chinese markets."
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="apple-mobile-web-app-title" content="Siamlocalize" />
          <meta name="application-name" content="Siamlocalize" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff"></meta>

          <title>KidsLoop</title>
        </Head>

        <Component {...pageProps} />


      </Layout>
  );
};

export default appWithTranslation(MyApp);
