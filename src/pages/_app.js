import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Alkye Test</title>  
      <meta name="author" content="Alkye" />
      <meta name="keywords" content="Photography, Learning, Article" />
    </Head>
    <Component {...pageProps} />
  </>
);
}
