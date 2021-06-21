import PrimaryBtn from '../static-components/PrimaryBtn';
import StyledImage from '../static-components/StyledImage';
import { useRouter } from 'next/router';

const FeatureDetailsOne = () => {

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
        <>
            <div className="wrapper w-full flex flex-col md:flex-row lg:justify-evenly px-4 lg:px-10 xl:px-24 pt-10 lg:pt-24 animate__animated animate__fadeIn">

                <div className="image-block items-center w-full mx-auto md:w-1/2 pt-10">
                    <StyledImage aos="fade-up-right" className="mx-auto" src="/images/home-page/feature-wallpaper-one.svg" />
                </div>

                <div className="pt-10 md:mt-0 item w-full md:w-1/2 lg:pl-10 xl:pl-20">
                    <h1 className="font-bold text-3xl sm:text-2xl xl:text-4xl sm:text-center md:text-left lg:mb-5">
                        Enhance your existing security <br className="hidden lg:flex"></br>
                         level by digitizing the process <br className="hidden lg:flex"></br>
                         at the gate.
                    </h1>
                    <ul className="py-5">
                        <li className="flex my-5">
                            <StyledImage className="mr-2" width="24" height="24" src="/images/icons/check.svg" />
                            <p className="ml-2 text-lg sm:text-base lg:text-lg">
                                Guards admit visitors seamlessly using inbuilt QR code / <br className="hidden lg:flex"></br> access token
                            </p>
                        </li>
                        <li className="flex my-5">
                            <StyledImage className="mr-2" width="24" height="24" src="/images/icons/check.svg" />
                            <p className="ml-2 text-lg sm:text-base lg:text-lg">
                                Residents manage list of allowed visitors
                            </p>
                        </li>
                        <li className="flex my-5">
                            <StyledImage className="mr-2" width="24" height="24" src="/images/icons/check.svg" />
                            <p className="ml-2 text-lg sm:text-base lg:text-lg">
                                Get real time notifications on visitors coming <br></br> to your home
                            </p>
                        </li>
                    </ul>
                    <div className="flex justify-start sm:justify-center md:justify-start lg:py-8">
                        <PrimaryBtn onEvent={handleBtnClick} className="primary_btn_large text-sm text-white justify-center font-bold lg:mt-0" label="Learn More" />
                    </div>
                </div>

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
        </>
    )
}

export default FeatureDetailsOne;
