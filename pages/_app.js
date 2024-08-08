import '../styles/globals.css';

// metadata
import Head from 'next/head';

// next analytics
import { SpeedInsights } from "@vercel/speed-insights/next"

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
  <Layout>
    <Head>

      {/* titulo del sitio */}
      <title>David Patiño | Full-Stack Developer</title>

      {/* Descripción del sitio */}
      <meta name="description" content="Portafolio personal de David Esteban Patiño Juspian, desarrollador fullstack."/>

      {/* Palabras clave */}
      <meta name="keywords" content="David Esteban Patiño Juspian, desarrollador fullstack, portafolio, sistemas y computación, desarrollo web"/>

      {/* Autor */}
      <meta name="author" content="David Esteban Patiño Juspian"/>

      {/* Viewport para dispositivos móviles */}
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <meta property="og:type" content="website" />
      <meta property="og:image" content="../public/PatsPortfolio.png" />
      <meta property="og:url" content="https://pat-s-life-portfolio.vercel.app/" />

    
    </Head>
    <SpeedInsights/>
    <AnimatePresence mode='wait'>
      <motion.div key={router.route} className='h-full'>
        <Transition />
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </Layout>
  )
}

export default MyApp;
