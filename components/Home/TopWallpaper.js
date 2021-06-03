import StyledImage from '../static-components/StyledImage';

const TopWallpaper = () => {
    
    return (
        <div className="wrapper flex  flex-col md:flex-row justify-between">

            <StyledImage className="absolute right-0 top-10" src="/images/home-page/oval-small.svg" />

            <div className="w-full md:w-1/2 flex items-center">
                <div className="px-4 xl:px-32 mt-16 md:mt-0 item">
                    <h1 className="font-bold text-2xl text-center">
                        Mordern Estate Management <br></br> that makes life smarter
                    </h1>
                    <p className="mt-5">
                    A fully packaged estate management platform for residential and corporate gated communities. 
                    This module increases your security without hassle.
                    </p>
                    <div className="flex justify-center md:justify-left my-10">
                        <a className="leading-relaxed inline-block whitespace-no-wrap">
                            <div className="mr-1">
                                <StyledImage src="/images/home-page/google-play.svg" width={196} height={60} />
                            </div>
                        </a>
                        <a className="leading-relaxed inline-block whitespace-no-wrap">
                            <div className="ml-2">
                                <StyledImage src="/images/home-page/apple-store.svg" width={196} height={60} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="image-block w-full md:w-1/2 md:flex items-center xl:items-end sm:px-10 lg:px-0">
                <StyledImage className="xl:-mb-10" src="/images/home-page/wallpaper.svg" />
            </div>

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

                }
            
            `}
            </style>
        </div>
    )
}

export default TopWallpaper;