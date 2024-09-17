import ColorModeContextProvider from "../context/ColorModeContext";
import Layout from "../components/Layout";
import "@fontsource/signika";
import "@fontsource/kanit";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ColorModeContextProvider>
      <Head>
        <title>Everything Football</title>
        <meta name="description" content="football app" />
        <link rel="icon" href="/ball.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ColorModeContextProvider>
  );
}

export default MyApp;
