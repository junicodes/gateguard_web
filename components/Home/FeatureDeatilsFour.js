import PrimaryBtn from '../static-components/PrimaryBtn';
import StyledImage from '../static-components/StyledImage';
import { useRouter } from 'next/router';
import styles from './Home.module.scss';

const FeatureDetailsFour = () => {

    //Router
    const router = useRouter();

    //Event
    const handleBtnClick = async (e) => {
        e.preventDefault()
        dispatchAppContext({
            type: 'CEILING_PRELODER',
            payload: true
        })
        router.push('/auth/get-started')
    }

    return (
        <div className="wrapper w-full flex flex-col md:flex-row lg:justify-evenly px-4 lg:px-10 xl:px-24 pt-16 lg:pt-36 relative">

            <div className="pt-20 md:pt-10 md:mt-0 item w-full md:w-1/2">
                <h1 className="font-bold text-3xl sm:text-2xl xl:text-4xl sm:text-center md:text-left mb-5">
                    Easily manage payment options <br className="hidden lg:flex"></br>  for maintenance Dues, utility <br className="hidden lg:flex"></br> bills and other charges.
                </h1>
                <ul className="py-5">
                    <li className="flex my-5">
                        <StyledImage className="mr-2" width="24" height="24" src="/images/icons/check.svg" />
                        <p className="ml-2 text-lg sm:text-base lg:text-lg">
                               Generate and keep track of payments from the <br className="hidden lg:flex"></br> dashboard.
                        </p>
                    </li>
                    <li className="flex my-5">
                        <StyledImage className="mr-2" width="24" height="24" src="/images/icons/check.svg" />
                        <p className="ml-2 text-lg sm:text-base lg:text-lg">
                              Residents can make payments on the app.
                        </p>
                    </li>
                    <li className="flex my-5">
                        <StyledImage className="mr-2" width="24" height="24" src="/images/icons/check.svg" />
                        <p className="ml-2 text-lg sm:text-base lg:text-lg">
                            Residents can record payments not made on <br className="hidden lg:flex"></br> the app.
                        </p>
                    </li>
                </ul>
                <div className="flex justify-start sm:justify-center md:justify-start py-8">
                    <PrimaryBtn onEvent={handleBtnClick} className="primary_btn_large text-sm text-white justify-center font-bold lg:mt-0" label="Learn More" />
                </div>
            </div>

            <div className="items-center md:px-10 lg:px-0 w-full mx-auto md:w-1/2 pt-10 -mb-10 md:mt-0 md:pt-0 ">
                {/* <StyledImage className={`${styles.imgFeatureTwo} flex md:hidden mx-auto md:mt-28 lg:mt-20`} src="/images/home-page/feature-wallpaper-four-mobile.png" /> */}
                <StyledImage className={`${styles.imgFeatureTwo}  md:absolute left-0 md:mt-28 lg:mt-20`} src="/images/home-page/feature-wallpaper-four.svg" />
            </div>
            

            <style jsx>{`

                .wrapper {
                    height: 650px;
                }
                @media screen and (max-width: 1200px) {
                    .wrapper {
                        height: auto;
                    }
                }
            
            `}
            </style>
        </div>
    )
}

export default FeatureDetailsFour;