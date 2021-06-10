import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {appName, appMeta, appNameSmall} from '../globalHelper'
import TopWallpaper from '@/components/Home/TopWallpaper'
import Features from '@/components/Home/Features'
import GoogleLogin from 'react-google-login';
import LinkedIn from "linkedin-login-for-react";

export default function Home() {

    console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)
    const handleGoogleLogin = (response) => {
        console.log(response);

        console.log(response.tokenObj.id_token)
    }

    const handleLinkedinLogin = (error, code, redirectUri) => {
      if (error) {
        // signin failed
        console.log(error)
      } else {
        // Obtain authorization token from linkedin api
        // see https://developer.linkedin.com/docs/oauth2 for more info
        console.log(code, redirectUri)
      }
    }
    

  return (
      
    <div className={styles.page}>

      <Head>
        <title>{appName} | Login With Google Test</title>
        <meta name="description" content={appMeta} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main + " flex justify-center"}>
         <div className="mx-2">
          <GoogleLogin
              clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={handleGoogleLogin}
              onFailure={handleGoogleLogin}
              cookiePolicy={'single_host_origin'}
          />
         </div>
         <div className="mx-2">
          <LinkedIn
            clientId="xxx"
            callback={handleLinkedinLogin}
            className={styles.linkedin}
            scope={["r_liteprofile","r_emailaddress"]}
            text={<><div> <img width="200" height="200" src="/images/linkedin.png" /></div></>}
          />
        </div>
      </main>
      
    </div>
  )
}