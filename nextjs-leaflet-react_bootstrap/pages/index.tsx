import type { NextPage } from 'next'
import Head from 'next/head'
import Logo from '../components/Logo'
import HelloTessera from '../components/HelloTessera'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.App}>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.png"></link>
        <title>Tesselo - Showcase POC</title>
      </Head>
      
      <Logo />
      <HelloTessera />
    </div>
  )
}

export default Home
