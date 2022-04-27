import type { NextPage } from 'next'
import Head from 'next/head'
import Logo from '../components/Logo/Logo'
import Toolbar from '../components/Toolbar/Toolbar'

const Home: NextPage = () => {
  return (
    <div className={styles.App}>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.png"></link>
        <title>Tesselo - Showcase POC</title>
      </Head>
      
      <Toolbar />
      <Logo className='pb-5' alt='tesselo-logo' width='200' height='80'/>
      <HelloTessera />
    </div>
  )
}

export default Home
