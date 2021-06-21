import Head from 'next/head'
import styles from '../../styles/pages/Auth.module.scss'
import {appName, appMeta, appNameSmall} from '../../globalHelper'
import Login from '@/components/Auth/Login'

export default function Home() {
  return (
    <div className={styles.page}>

      <Head>
        <title>{appName} | Home</title>
        <meta name="description" content={appMeta} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.wrapper} 2xl:container mx-auto`}>
         <Login />
      </main>
      
    </div>
  )
}
