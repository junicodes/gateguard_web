
import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../../static-components/PrimaryBtn";
import styles from './Navbar.module.scss'
import { useRouter } from 'next/router';
import StyledImage from "../../static-components/StyledImage";

const Navbar = () => {

    //Router
    const router = useRouter();

    //Event
    const handleGetStartedClick = async (e) => {
        e.preventDefault()
        dispatchAppContext({
            type: 'CEILING_PRELODER',
            payload: true
        })
        router.push('/auth/get-started')
    }

    return (
        <div className={`${styles.wrapper} bg-white h-16 w-full items-center`}>
           <div className="flex justify-between md:mx-10 mt-3">
               
                <div className="text-right">
                    <Link href="/">
                        <a className="leading-relaxed inline-block whitespace-no-wrap text-primaryFontColor">
                            <div className="logo">
                                <StyledImage src="/images/app-logo/gateguard-logo-brand.svg" width={143} height={35} />
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="hidden lg:flex items-center ml-24">
                    <Link href="#features">
                        <a className="leading-relaxed inline-block whitespace-no-wrap text-primaryFontColor px-4">
                            <li className="nav-link">
                                Features
                            </li>
                        </a>
                    </Link>

                    <Link href="/about">
                        <a className="leading-relaxed inline-block whitespace-no-wrap text-primaryFontColor px-4">
                            <li className="nav-link">
                                About
                            </li>
                        </a>
                    </Link>

                    <Link href="/contact">
                        <a className="leading-relaxed inline-block whitespace-no-wrap text-primaryFontColor px-4">
                            <li className="nav-link">
                                Contact
                            </li>
                        </a>
                    </Link>
                </div>

                <div className="hidden lg:flex items-center">
                    <Link href="/help">
                        <a className="leading-relaxed inline-block whitespace-no-wrap text-primaryFontColor px-4">
                            <li className="nav-link">
                                Help
                            </li>
                        </a>
                    </Link>

                    <Link href="/login">
                        <a className="leading-relaxed inline-block whitespace-no-wrap text-primaryFontColor mx-4">
                            <li className="nav-link">
                                Login
                            </li>
                        </a>
                    </Link>
                    <PrimaryBtn onEvent={handleGetStartedClick} className="primary_btn text-sm text-white justify-center ml-4 lg:mt-0" label="Request Demo" />
                </div>

           </div>
        </div>
    )
}

export default Navbar;