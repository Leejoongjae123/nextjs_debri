import '../styles/globals.css'

import Link from 'next/link'
import styles from '../styles/_app.module.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Layout></Layout>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
