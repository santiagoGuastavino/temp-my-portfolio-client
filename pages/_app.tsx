import "@/styles/globals.scss";
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { Raleway } from "next/font/google";
import { http } from "@/config";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const getWake = async (): Promise<void> => {
    try {
      await http.get("/wake");
    } catch (error) {}
  };

  useEffect(() => {
    getWake();
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
