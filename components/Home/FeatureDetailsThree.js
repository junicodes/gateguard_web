import PrimaryBtn from '../static-components/PrimaryBtn';
import StyledImage from '../static-components/StyledImage';
import { useRouter } from 'next/router';

const FeatureDetailsThree = () => {

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
            <div className="wrapper w-full flex flex-col md:flex-row lg:justify-evenly px-4 lg:px-5 pt-16 lg:pt-64">

                <div className="image-block items-center w-full mx-auto md:w-1/2 pt-10">
                    <StyledImage className="mx-auto" src="/images/home-page/feature-wallpaper-three.svg" />
                </div>

                <div className="pt-10 md:mt-0 item w-full md:w-1/2 lg:pl-10 xl:pl-20">
                    <h1 className="font-bold text-3xl sm:text-2xl xl:text-4xl sm:text-center md:text-left lg:mb-5">
                         Get complete vendor <br className="hidden lg:flex"></br> management capabilities <br className="hidden lg:flex"></br> with GateGuard.
                    </h1>
                    <ul className="py-5">
                        <li className="flex my-5">
                            <StyledImage className="mr-2" width="24" height="24" src="/images/icons/check.svg" />
                            <p className="ml-2 text-lg sm:text-base lg:text-lg">
                                 Manage vendors/service providers in your <br className="hidden lg:flex"></br> estate: Add new, delete, suspend and lots more
                            </p>
                        </li>
                        <li className="flex my-5">
                            <StyledImage className="mr-2" width="24" height="24" src="/images/icons/check.svg" />
                            <p className="ml-2 text-lg sm:text-base lg:text-lg">
                            Give Residents access to a wide range of vetted <br className="hidden lg:flex"></br> service providers.
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

export default FeatureDetailsThree;
