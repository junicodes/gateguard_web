import Head from "next/head";
import Footer from '../Footer/Footer'
import Navbar from "../Navbar/Navbar";


const Layout = ({ children }) => {

    return (
        <>

            <div className="lg:container mx-auto">

                <Navbar />
                    
                {children}

            </div>
            
            <Footer />
        </> 
    )

}


export default Layout;