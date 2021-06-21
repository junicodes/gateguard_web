import StyledImage from '../static-components/StyledImage';
import styles from './Home.module.scss';

const TopWallpaper = () => {
    
    return (
        <div className="wrapper flex flex-col md:flex-row justify-between relative animate__animated animate__fadeIn">

            <StyledImage className="absolute right-0 -top-8 pointer-events-none" src="/images/home-page/oval-small.svg" />

            <div className="w-full md:w-1/2 flex items-center pt-20">
                <div className="px-4 xl:px-24 mt-10 md:mt-0 item">
                    <h1 className="font-bold text-4xl xl:text-5xl sm:text-center md:text-left">
                        Mordern Estate Management <br></br> that makes life smarter
                    </h1>
                    <p className="mt-5 text-lg sm:text-base lg:text-xl">
                    A fully packaged estate management platform for residential and corporate gated communities. 
                    This module increases your security without hassle.
                    </p>
                    <div className="flex justify-start sm:justify-center md:justify-start my-14">
                        <a href="https://play.google.com/store/apps/details?id=com.gateguard.inc" target="_blank" className="leading-relaxed inline-block whitespace-no-wrap">
                            <div className="mr-1">
                                <StyledImage src="/images/home-page/google-play.svg" width={176} height={60} />
                            </div>
                        </a>
                        <a href="#" target="_blank" className="leading-relaxed inline-block whitespace-no-wrap">
                            <div className="ml-2">
                                <StyledImage src="/images/home-page/apple-store.svg" width={176} height={60} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="image-block w-full md:w-1/2 md:flex items-center xl:items-end sm:px-10 lg:px-0 mt-10">
                <StyledImage className={styles.imgtopWallpaper} src="/images/home-page/wallpaper.svg" />
            </div>

            <StyledImage className="absolute left-0 bottom-0" src="/images/home-page/oval-small-left.svg" />

            <style jsx>{`

                .wrapper {
                    height: 650px;
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
                        height: auto;
                    }
                }
            
            `}
            </style>
        </div>
    )
}

export default TopWallpaper;