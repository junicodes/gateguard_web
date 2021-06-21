import StyledImage from '../static-components/StyledImage';
import styles from './About.module.scss';

const TopWallpaper = ({title, note}) => {
    
    return (
        <div className="wrapper flex flex-col md:flex-row justify-between relative animate__animated animate__fadeIn">
            <div className="px-4 md:px-28 xl:px-52 item mt-20 md:mt-36 w-full">
                <h1 className="font-bold text-5xl sm:text-6xl text-center md:text-left">
                    {title}
                </h1>
                <p className="mt-5 md:w-3/4 xl:w-1/2 text-xl text-center md:text-left">
                    {note}
                </p>
            </div>

            <style jsx>{`

                .wrapper {
                    height: 550px;
                    background: linear-gradient(147.11deg, rgba(129, 208, 128, 0.14) 45.95%, rgba(73, 163, 71, 0.01) 86.45%);
                }

                p{
                    color: #64626A;
                }

                .image-block {
                    background-image: url("/images/home-page/oval.svg");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: contain;
                    background-color: #ffffff;
                }
                
                @media screen and (max-width: 768px) {
                    .wrapper {
                        height: 400px;
                    }
                }
            
            `}
            </style>
        </div>
    )
}

export default TopWallpaper;