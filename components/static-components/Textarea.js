import React, { forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Textarea = forwardRef(({ onEvent, className, icon, dataset, name, placeHolder, note, eventType, value }, ref) => {

    const classSty = `${className} text-base border flex-1 block w-full`;

    const textareaChange = (e) => {
        if (onEvent) {
            return onEvent(e)
        }
    }

    return (
        <>
            <div className="mt-1 flex">
                {
                    eventType && (eventType.includes('onBlur') || eventType.includes('onKeyUp')) ?
                    <textarea
                        ref={ref}
                        name={name} id={name}
                        value={value ? value : ''}
                        className={classSty} 
                        onBlur={textareaChange} 
                        onKeyUp={textareaChange}
                        data-payload={JSON.stringify(dataset)}
                        placeholder={placeHolder} ></textarea> : null
                }
                {
                    !eventType ?
                    <textarea
                        ref={ref}
                        name={name} id={name}
                        className={classSty} 
                        defaultValue={value ? value : ''}
                        onChange={textareaChange} 
                        data-payload={JSON.stringify(dataset)}
                        placeholder={placeHolder} ></textarea> : null
                }
                                {
                    icon ? <FontAwesomeIcon icon={icon.name} className={`${icon.className} default-icon-size mx-2 my-4 absolute`} size="2x" /> : null
                }
            </div>
            <small>{note || ""}</small> {/* <><span className="text-red-400">Hello this is the note</span></> */}
        </>
    )
})

export default Textarea;