import StyledImage from '../static-components/StyledImage';
import styles from './About.module.scss';

const ImagePreview = () => {
    
    return (
        <div className="wrapper flex flex-col md:flex-row justify-between relative animate__animated animate__fadeIn">
            <div className="px-4 md:px-10 xl:px-36 item xl:my-10">
                <div className="md:flex">
                    <div className="md:w-1/3 mb-5 md:mb-0 md:mr-2 img-left"></div>
                    <div className="md:w-2/3 mt-5 md:mt-0 md:ml-2 img-right"></div>
                </div>
                <p className="mt-10 md:mt-16 w-full text-lg sm:text-base lg:text-xl text-left sm:text-center md:text-left px-2">
                 We have developed an app that makes life easy for everyone, it is a security solution for gated apartment and estates. 
                 It helps residents securely manage who goes in and out of the gate.
                 Its fully packed features has helped reduce the challenged faced during visitor authorization to a single click.
                </p>
            </div>

            <style jsx>{`

                .wrapper {

                }
                .img-left {
                    height: 539.64px;
                    border-radius: 10px;
                    background-image: url("/images/about-page/img-left.png");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    background-color: #ffffff;
                }

                .img-right {
                    height: 539.64px;
                    border-radius: 10px;
                    background-image: url("/images/about-page/img-right.png");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    background-color: #ffffff;
                }

                h1 {
                    line-height: 1.2em;
                }
                @media screen and (max-width: 768px) {
                    .img-left {
                        height: 339.64px;
                    }
    
                    .img-right {
                        height: 339.64px;
                    }
    
                }
            
            `}
            </style>
        </div>
    )
}

export default ImagePreview;