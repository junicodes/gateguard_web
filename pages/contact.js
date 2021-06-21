import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.css'
import {appName, appMeta, appNameSmall} from '../globalHelper'
import { useEffect } from "react";
import TopWallpaper from '@/components/About/TopWallpaper'
import InfoScreen from '@/components/About/InfoScreen'
import FeatureDetailsOne from '@/components/Home/FeatureDetailsOne'
import FeatureDetailsTwo from '@/components/Home/FeatureDetailsTwo'
import FeatureDetailsThree from '@/components/Home/FeatureDetailsThree'
import FeatureDetailsFour from '@/components/Home/BottomInfo'
import { useAppContext, useDispatchAppContext } from "../react-wrapper/Context/AppContext";
import ImagePreview from '@/components/About/ImagePreview';
import MeetTheTeam from '@/components/About/MeetTheTeam';
import ContactForm from '@/components/General/ContactForm';


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
        <title>{appName} | Contact Us</title>
        <meta name="description" content={appMeta} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} 2xl:container mx-auto`}>
          <TopWallpaper title="Contact Us"
           note="A fully packaged estate management platform for residential and corporate gated communities. This module increases your security without hassle." />
          <ContactForm />
          <FeatureDetailsFour />
      </main>
      
    </div>
  )
}
