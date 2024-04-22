import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_DEFAULT_URL}/wake`);
  }, []);

  return (
    <>
      <Head>
        <title>Santiago Guastavino</title>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
