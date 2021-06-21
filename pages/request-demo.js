import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import {appName, appMeta, appNameSmall} from '../globalHelper'
import { useEffect } from "react";
import { useAppContext, useDispatchAppContext } from "../react-wrapper/Context/AppContext";


export default function Home() {

  //Use Context
    const appContext = useAppContext();
    const dispatchAppContext = useDispatchAppContext();

  //Use Effects
  useEffect(() => {
      //Dispatch Context Event
      dispatchAppContext({
          type: "CEILING_PRELODER",
          payload: false,
      });
  }, [appContext.ceilingPreloader]);

  return (
    <div className={styles.page}>

      <Head>
        <title>{appName} | Request Demo</title>
        <meta name="description" content={appMeta} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} 2xl:container mx-auto`}>
        Request Demo Page
      </main>
      
    </div>
  )
}
