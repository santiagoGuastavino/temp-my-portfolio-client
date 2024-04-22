import "@/styles/globals.scss";
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    fetch("http://192.168.1.106:9000/wake");
    // fetch(`${process.env.NEXT_PUBLIC_DEFAULT_URL}/wake`);
  }, []);

  return (
    <>
      <Head>
        <title>Santiago Guastavino</title>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </Head>
      <main className={raleway.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
