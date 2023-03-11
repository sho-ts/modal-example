import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'the-new-css-reset';
import '../styles/global.css';

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Head>
        <title>Web Transition</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
