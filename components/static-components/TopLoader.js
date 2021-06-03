import React, { useState, useRef, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useAppContext } from '../../react-wrappers/Context/AppContext';

const TopLoader = () => {
    //State Manage
    // const [progress, setProgress] = useState(0)
    const [barColor, setBarColor] = useState(null) //#f11946

    //Create Ref
    const ref = useRef(null);

    //Use Context
    const appContext = useAppContext();

    useEffect(() => {
        
        if (appContext.ceilingPreloader || appContext.ceilingPreloaderRequest) {
            setBarColor('#FBCA2F')
            return ref.current.continuousStart()
        }

        if (!(appContext.ceilingPreloader || appContext.ceilingPreloaderRequest)) {
            const clear = setTimeout(() => {
                setBarColor(null)
            }, 2000)


            return () => clearTimeout(clear);
        }

    }, [appContext.ceilingPreloader, appContext.ceilingPreloaderRequest]);

    return (
        <div className={`${barColor ? 'block' : 'hidden'}`}>
            <LoadingBar color={barColor} ref={ref} onLoaderFinished={() => setProgress(0)} />
        </div>
    )
}

export default TopLoader