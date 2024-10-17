import '../styles/global.css'
import Head from "next/head";
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ButtonW from '../components/ButtonW';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-violet-100' >
      <Head>
        <title>Galeria de Arte</title>
        <meta name="description" content="Galeria de Arte" />
        <link rel="icon" href="/logopng.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <ButtonW/>
      <Footer/>
      
    </div>
  )
}

export default MyApp