import Head from 'next/head'
import styles from '../../styles/pages/Auth.module.scss'
import {appName, appMeta, appNameSmall} from '../../globalHelper'
import ForgotPassword from '@/components/Auth/ForgotPassword'

export default function Home() {
  return (
    <div className={styles.page}>

      <Head>
        <title>{appName} | Forgot Password </title>
        <meta name="description" content={appMeta} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.wrapper} 2xl:container mx-auto`}>
         <ForgotPassword />
      </main>
      
    </div>
  )
}
