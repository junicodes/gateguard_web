
import Link from "next/link";
import Image from 'next/image';

const Content = () => (

    <div className="sm:w-full text-center md:text-left flex flex-col md:flex-row justify-between">
        <div className="flex flex-col mx-6 text-left mb-10 md:mb-0">
            <Link href="/">
                <a className="leading-relaxed inline-block whitespace-no-wrap">
                    <div className="logo">
                        <Image src="/images/app-logo/gateguard-logo-white.svg" width={150} height={42.34} />
                    </div>
                </a>
            </Link>
            <a className="leading-relaxed inline-block my-2 whitespace-no-wrap">
                <div className="logo">
                    <Image src="/images/app-logo/appstore.svg" width={200} height={60} />
                </div>
            </a>
            <a className="leading-relaxed inline-block my-2 whitespace-no-wrap">
                <div className="logo">
                    <Image src="/images/app-logo/playstore.svg" width={200} height={60} />
                </div>
            </a>
            <div className="flex justify-start text-left mt-5">
                <a href="#" className="mr-3">
                    <Image src="/images/social-icons/facebook.svg" width={25} height={25} />
                </a>
                <a href="#" className="mr-3 ml-3">
                    <Image src="/images/social-icons/twitter.svg" width={25} height={25} />
                </a>
                <a href="#" className="mx-3">
                    <Image src="/images/social-icons/linkedlin.svg" width={25} height={25} />
                </a>
            </div>
        </div>

        <div className="flex flex-col mb-10 md:mb-0 text-left mx-6">
            <p className="text-sm md:text-lg font-semibold mb-6">FEATURES</p>
            <span className="my-2"><a href="/visitor-management" className="text-sm lg:text-base hover:text-gray-300">Visitor Management</a></span>
            <span className="my-2"><a href="/bills-management" className="text-sm lg:text-base hover:text-gray-300">Bills Management</a></span>
            <span className="my-2"><a href="/service-directory" className="text-sm lg:text-base hover:text-gray-300">Service Directory</a></span>
        </div>

        <div className="flex flex-col mb-14 md:mb-0 text-left mx-6">
            <p className="text-sm md:text-lg font-semibold mb-6">COMPANY</p>
            <span className="my-2"><a href="/about" className="text-sm lg:text-base hover:text-gray-300">About Us</a></span>
            <span className="my-2"><a href="/contact" className="text-sm lg:text-base hover:text-gray-300">Contact</a></span>
            <span className="my-2"><a href="/Help" className="text-sm lg:text-base hover:text-gray-300">Help</a></span>
        </div>

        <div className="flex flex-col mb-10 md:mb-0 text-left mx-6">
            <p className="text-sm md:text-lg font-semibold mb-6">CONTACT</p>
            <span className=""><a href="#" className="text-sm font-fam hover:text-gray-300">
                Plot 6, Gibbert Avenue, Flutter estate,<br></br> Agidingbi, Ikeja, Lagos state.</a>
            </span>
            <span className="my-2"><a href="+2347057843748" className="text-sm font-fam hover:text-gray-300">+234 705 784 3748</a></span>
            <span className="my-2">
                <a href="#" className="text-sm font-fam hover:text-gray-300">
                    <br className="hidden md:block"></br>
                    contact@gateguard.org
                </a>
            </span>
        </div>

        <style jsx>{`

            .font-fam {
     
            }
            @media screen and (max-width: 768px) {
   
            }
               
        `}
        </style>
    </div>
)


export default Content;