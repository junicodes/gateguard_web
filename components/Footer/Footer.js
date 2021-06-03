
import Link from "next/link";
import Image from 'next/image';
import styles from './Footer.module.scss';
import { FindUrlPath } from '../../helpers/FindUrlPath'
import Content from "./Content";

const Footer = ({ page }) => (
    <footer className={`${styles.wrapper} footer relative xl:mx-auto pt-5 bg-primaryBlack text-white`}>
        <div className="container mx-auto text-left lg:px-20">
            {page === 'dash' ?
                <div className={`md:ml-36`}>
                    <div className="sm:w-full text-center md:text-left flex flex-col md:flex-row justify-between">
                        <div className="flex flex-row justify-end w-full">
                            <Link href="/">
                                <a className="leading-relaxed inline-block mt-3 whitespace-no-wrap">
                                    <div className="logo">
                                      <Image src="/images/app-logo/gateguard-logo-white.svg" width={140} height={42.34} />
                                    </div>
                                </a>
                            </Link>
                            <p className="font-light text-xs text-right uppercase py-3">© Copyright 2021 GateGuard inc</p>
                        </div>
                    </div>
                </div>
                :
                <div className={`py-8`}>
                    <Content />
                    <div className="flex justify-center items-center pt-14">
                        <span className="font-light text-sm  text-white dark:text-white mb-2">© Copyright 2021 GateGuard inc</span>
                    </div>
                </div>}
        </div>
    </footer>
)

export default Footer;