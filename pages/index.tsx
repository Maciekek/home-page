import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello!</title>
        <meta name="description" content="Maciej's home page" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <main className={styles.main}>
        <h1>Hello!</h1>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
