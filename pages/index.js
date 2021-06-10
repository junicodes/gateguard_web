import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {appName, appMeta, appNameSmall} from '../globalHelper'
import TopWallpaper from '@/components/Home/TopWallpaper'
import Features from '@/components/Home/Features'
import FeatureDetails from '@/components/Home/FeatureDetails'

export default function Home() {
  return (
    <div className={styles.page}>

      <Head>
        <title>{appName} | Home</title>
        <meta name="description" content={appMeta} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <TopWallpaper />
          <Features />
          <section className={styles.featuresSection}>
             <FeatureDetails />
          </section>
      </main>
      
    </div>
  )
}
