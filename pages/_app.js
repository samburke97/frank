import Layout from "../components/Layout";
import "../styles/index.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import TagManager from "react-gtm-module";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-KGWNW9K" });
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        <title>Because Frank</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Brisbane, Website Development, Social Media Management, Content Creation, Copywriting"
        />
        <meta name="author" content="Because Frank" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
