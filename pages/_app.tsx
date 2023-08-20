import '../styles/global.css'
import Head from "next/head";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Art Gallery</title>
        <meta name="description" content="Art Gallery" />
        <link rel="icon" href="/logopng.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp