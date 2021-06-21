
import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../../static-components/PrimaryBtn";
import styles from './Navbar.module.scss'
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import StyledImage from "../../static-components/StyledImage";
import { FindUrlPath } from "helpers/FindUrlPath";

const Navbar = () => {

    //State
    const [mobile, setMobile] = useState(false)

    //Router
    const router = useRouter();

    //Use Effects
    useEffect(() => {
        //Dispatch Context Event
        if(mobile) {
            setMobile(false)
        }
    }, [FindUrlPath('findurlpath')]);

    //Event
    const handleMobileMenu = () => {
        console.log("k", mobile)
        switch (mobile) {
            case false:
                setMobile(true)
                break;
            default:
                setMobile(false)
                break;
        }
    }

    return (
        <>
        <div className={`${styles.wrapper} bg-white h-16 w-full items-center animate__animated animate__fadeIn`}>
           <div className="flex justify-between mx-4 md:mx-10 pt-3">
               
                <div className="text-right">
                    <Link href="/">
                        <a className="leading-relaxed inline-block whitespace-no-wrap text-primaryFontColor">
                            <div className="logo">
                                <StyledImage src="/images/app-logo/gateguard-logo-brand.svg" width={143} height={35} />
                            </div>
                        </a>
                    </Link>
                </div>

                {
                    FindUrlPath("defualt") ?
                        <>
                            <div onClick={handleMobileMenu} className=" hidden:flex lg:hidden items-center p-2 h-12 bg-red-500 cursor-pointer">
                               <StyledImage src="/images/icons/menu-icon.png" width={30} height={30} />
                            </div>

                            <div className="hidden lg:flex items-center ml-24">
                                <Link href={FindUrlPath('findurlpath') == '/' ? '#features' : '/#features'}>
                                    <a className="leading-relaxed inline-block whitespace-no-wrap text-primaryFontColor px-4">
                                        <li className="nav-link hover:text-primaryGreen">
                                            Features
                                        </li>
                                    </a>
                                </Link>

                                <Link href="/about">
                                    <a className="leading-relaxed inline-block whitespace-no-wrap text-primaryFontColor px-4">
                                        <li className="nav-link hover:text-primaryGreen">
                                            About
                                        </li>
                                    </a>
                                </Link>

                                <Link href="/contact">
                                    <a className="leading-relaxed inline-block whitespace-no-wrap text-primaryFontColor px-4">
                                        <li className="nav-link hover:text-primaryGreen">
                                            Contact
                                        </li>
                                    </a>
                                </Link>
                            </div>

                            <div className="hidden lg:flex items-center">
                                <Link href="/help">
                                    <a className="leading-relaxed inline-block whitespace-no-wrap text-primaryFontColor px-4">
                                        <li className="nav-link hover:text-primaryGreen">
                                            Help
                                        </li>
                                    </a>
                                </Link>

                                <Link href="/auth/login">
                                    <a className="leading-relaxed inline-block whitespace-no-wrap text-primaryFontColor mx-4">
                                        <li className="nav-link hover:text-primaryGreen">
                                            Login
                                        </li>
                                    </a>
                                </Link>
                                <PrimaryBtn onEvent={() => router.push('/request-demo')} className="primary_btn text-sm text-white justify-center ml-4 lg:mt-0" label="Request Demo" />
                            </div>

                        </> : null
                }

           </div>
           
        </div>
        {
            mobile ?

            <div className={`block lg:hidden absolute bg-white z-50 w-full h-screen animate__animated animate__fadeIn`}>
                <ul className="pt-5 text-center">
                    <Link href={FindUrlPath('findurlpath') == '/' ? '#features' : '/#features'}>
                        <a className="leading-relaxed text-lg block whitespace-no-wrap text-primaryFontColor p-4">
                            <li className="nav-link hover:text-primaryGreen">
                                Features
                            </li>
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="leading-relaxed text-lg block whitespace-no-wrap text-primaryFontColor p-4">
                            <li className="nav-link hover:text-primaryGreen">
                                About
                            </li>
                        </a>
                    </Link>

                    <Link href="/contact">
                        <a className="leading-relaxed text-lg block whitespace-no-wrap text-primaryFontColor p-4">
                            <li className="nav-link hover:text-primaryGreen">
                                Contact
                            </li>
                        </a>
                    </Link>
                    <Link href="/help" >
                        <a className="leading-relaxed text-lg block whitespace-no-wrap text-primaryFontColor p-4">
                            <li className="nav-link hover:text-primaryGreen">
                                Help
                            </li>
                        </a>
                    </Link>
                    <Link href="/auth/login">
                        <a className="leading-relaxed text-lg block whitespace-no-wrap text-primaryFontColor p-4">
                            <li className="nav-link hover:text-primaryGreen">
                                Login
                            </li>
                        </a>
                    </Link>
                    <PrimaryBtn onEvent={() => router.push('/request-demo')} 
                    className="primary_btn text-sm text-white justify-center mx-auto mt-4" label="Request Demo" />
                </ul>
            </div> : null
        }
        </>
    )
}

export default Navbar;