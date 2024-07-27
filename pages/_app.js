import '../styles/globals.css';

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
