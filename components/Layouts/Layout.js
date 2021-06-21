import Head from "next/head";
import Footer from './Footer/Footer'
import Navbar from "./Navbar/Navbar";
import TopLoader from '@/components/static-components/TopLoader';
import { FindUrlPath } from "helpers/FindUrlPath";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"></link>
            </Head>
        
            <div className="2xl:container mx-auto">
                <TopLoader />
                <ToastContainer />
                <Navbar />

                {children}
            </div>

            {
                 FindUrlPath("defualt") ? <Footer /> : null
            }
        </> 
    )

}


export default Layout;