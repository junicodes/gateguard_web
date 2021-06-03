import React, { forwardRef } from 'react'
import Image from 'next/image';
import { useDispatchAppContext } from '../../react-wrapper/Context/AppContext';

const PrimaryBtn = forwardRef(({ type, onEvent, noPreload, requestPreloader, className, allowImgBefore, allowImgAfter, imgSty, dataset, label, style, disabled = false }, ref) => {

    //Use Context   
    const dispatchAppContext = useDispatchAppContext();

    const buttonSubmit = (e) => {
        if (onEvent) {
            if(disabled) {
                return false
            }
            if(!noPreload) {
                //Use Dispatcher
                dispatchAppContext({
                    type: 'CEILING_PRELODER',
                    payload: true
                })
            }
            if(requestPreloader) {
                //Use Dispatcher
                dispatchAppContext({
                    type: 'CEILING_PRELODER_REQUEST',
                    payload: true
                })
            }
             return onEvent(e)
        }
    }

    return (
        <button ref={ref} type={type ? type : "button"} data-payload={JSON.stringify(dataset)} onClick={buttonSubmit}
            className={`${className} flex items-center`} style={style || {}}>
            {
                allowImgBefore ?
                    <img className={imgSty}
                        src={allowImgBefore.url}
                        width={allowImgBefore.width} height={allowImgBefore.height} />
                    : null
            }
                {label}
            {
                allowImgAfter ?
                    <img className={imgSty}
                        src={allowImgAfter.url}
                        width={allowImgAfter.width} height={allowImgAfter.height} />
                    : null
            }
        </button>
    )
})

export default PrimaryBtn;