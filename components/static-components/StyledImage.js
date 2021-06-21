import React, { forwardRef } from 'react'

const StyledImage = forwardRef(({ onEvent, aos, dataset, className, noShadow, src, alt, width, bgSty, bgClass, height }, ref) => {

    const classSty = `${className}`;

    const event = (e) => {
        if (onEvent) {
            return onEvent(e)
        }
    }

    return (    
        <>
            <div data-aos={aos ? aos : null} data-aos-duration={aos ? "1000" : null} style={bgSty ? bgSty : null} className={ bgClass ? bgClass : null}>
                <img ref={ref} style={{boxShadow: `${noShadow ? '0px 4px 16px rgba(84, 92, 92, 0.1)' : null}`}}
                    className={classSty}
                    src={src}
                    alt={alt}
                    data-target={dataset}
                    width={width} height={height} 
                    onClick={event}
                    onError={(e) => {
                         e.target.src ='/images/app-logo/gateguard-icon.svg' }} //e.target.classList.remove('object-cover');e.target.classList.add('object-contain')
                />
            </div>

            <style jsx>{`                  
            .styleImg {
                background: url(/images/round-preloader-unscreen.gif) no-repeat center;
                background-size: cover;
            }
            .imgBlock {
                width: 100%;
                height: 150px;
            }

            .img {
                width: 100%;
                height: 100%;
            }
        `}
        </style>
        </>
    )
})

export default StyledImage;