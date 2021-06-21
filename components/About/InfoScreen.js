import StyledImage from '../static-components/StyledImage';
import styles from './About.module.scss';

const InfoScreen = () => {
    
    return (
        <div className="wrapper flex flex-col md:flex-row justify-between relative animate__animated animate__fadeIn">
            <div className="px-4 md:px-10 xl:px-36 item my-24 flex flex-col md:flex-row items-center">
                <h1 className="font-bold text-3xl sm:text-2xl xl:text-4xl sm:text-center md:text-left w-full md:w-1/2 px-2">
                     Our mission is to make <br className="hidden lg:flex"></br> gated community management seamless.
                </h1>
                <p className="mt-5 w-full md:w-1/2 text-lg sm:text-base lg:text-xl text-left sm:text-center md:text-left px-2">
                 GateGuard is solution built to simplify check-ins everywhere. Our flagship solution, 
                 launched in 2019, and it facilitates check-in requests
                 every day at various gated premises across all regions at which we operate, and we are still expanding our reach.
                </p>
            </div>

            <style jsx>{`

                .wrapper {

                }

                h1 {
                    line-height: 1.2em;
                }
            
            `}
            </style>
        </div>
    )
}

export default InfoScreen;