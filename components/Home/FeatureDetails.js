import PrimaryBtn from '../static-components/PrimaryBtn';
import StyledImage from '../static-components/StyledImage';
import { useRouter } from 'next/router';

const FeatureDetails = () => {

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
        <div className="wrapper flex flex-col md:flex-row justify-evenly">

            <div className="image-block items-center sm:px-10 lg:px-0">
                <StyledImage className="" src="/images/home-page/feature-detail-one.svg" />
            </div>

            <div className="mt-10 md:mt-0 item">
                <h1 className="font-bold text-3xl md:text-4xl sm:text-center md:text-left mb-5">
                    Enhance your existing security <br></br> level by digitizing the process <br></br> at the gate.
                </h1>
                <ul className="py-5">
                    <li className="flex my-5">
                        <StyledImage className="mr-2" width="24" height="24" src="/images/icons/check.svg" />
                        <p className="ml-2 text-lg">
                            Guards admit visitors seamlessly using inbuilt QR code / <br></br> access token
                        </p>
                    </li>
                    <li className="flex my-5">
                        <StyledImage className="mr-2" width="24" height="24" src="/images/icons/check.svg" />
                        <p className="ml-2 text-lg">
                            Residents manage list of allowed visitors
                        </p>
                    </li>
                    <li className="flex my-5">
                        <StyledImage className="mr-2" width="24" height="24" src="/images/icons/check.svg" />
                        <p className="ml-2 text-lg">
                            Get real time notifications on visitors coming <br></br> to your home
                        </p>
                    </li>
                </ul>
                <div className="flex justify-start sm:justify-center md:justify-start my-8">
                    <PrimaryBtn onEvent={handleBtnClick} className="primary_btn_large text-sm text-white justify-center lg:mt-0" label="Learn More" />
                </div>
            </div>
            <style jsx>{`

                .wrapper {
                    height: 650px;
                }
                
                @media screen and (max-width: 768px) {

                }
            
            `}
            </style>
        </div>
    )
}

export default FeatureDetails
;