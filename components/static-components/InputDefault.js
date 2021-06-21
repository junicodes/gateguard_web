import React, { forwardRef } from 'react'

const InputDefault = forwardRef(({ onEvent, className, icon, onIconEvent, eventType, dataset, label, name, type, placeHolder, note, value }, ref) => {

    const classSty = `${className} focus:ring-indigo-grey focus:border-indigo-500 flex-1
                     block w-full text-xl border-gray-300`;

    const inputChange = (e) => {
        if (onEvent) {
            return onEvent(e)
        }
    }


    const triggerIcon = (e) => {
        if(onIconEvent) {
            return onIconEvent(e)
        }
    }

    return (
        <>
            <label htmlFor={label} className="block text-sm md:text-lg font-medium text-sifuseBlack my-2">
                {label}
            </label>
            <div className="mt-1 relative">
                <div className="flex">
                    {type == 'url' ?
                        <span className="inline-flex items-center px-3 rounded-l-md border text-gray-500">
                            http://
                        </span>
                        : null
                    }
                    <i className={icon + " absolute"} onClick={triggerIcon}></i> {/*   icon="las la-battery-three-quarters text-2xl my-2 mx-2" */}
                    {
                        eventType && eventType.includes('onKeyUp')
                        ? 
                            <input ref={ref} type={type} name={name} id={name} defaultValue={value}
                            className={classSty} onKeyUp={inputChange} data-payload={JSON.stringify(dataset)} placeholder={placeHolder} />
                        : null
                    }

                    {
                        eventType && eventType.includes("onChange") 
                         ? 
                            <input ref={ref} type={type} name={name} id={name} defaultValue={value}
                            className={classSty} onChange={inputChange} data-payload={dataset} placeholder={placeHolder} />
                         : null
                     }
                
                </div>
                <small>{note || ""}</small> {/* <><span className="text-red-400">Hello this is the note</span></> */}
            </div>
        </>
    )
})

export default InputDefault;