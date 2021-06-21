import styles from './General.module.scss';
import { Toast } from "../../helpers/toast"
import { useDispatch } from 'react-redux';
import { useAppContext, useDispatchAppContext } from "../../react-wrapper/Context/AppContext";
import { login_Action } from '../../react-wrapper/Redux/actions/authAction';
import InputDefault from '../static-components/InputDefault';
import Textarea from '../static-components/Textarea';
import StyledImage from '../static-components/StyledImage';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from "react";
import PrimaryBtn from '@/components/static-components/PrimaryBtn';

const ContactForm = () => {
    //State
    const [note, setNote] = useState({})

    //Ref
    const yourNameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);
    
    //Router
    const router = useRouter();

    //Use Context
    const appContext = useAppContext();
    const dispatchAppContext = useDispatchAppContext();

    //Redux
    const dispatch = useDispatch();

    //Function

    //validations
    const clientValidation = async (target, elem) => {
        setNote({})
        elem.style.border = "1px solid #EAE9F2";

        console.log(elem.value)
        if(elem.value.trim() === "") {
            elem.style.border = "1px solid red"
            setNote({
                ...note, [target]: <><span className="text-red-400">Please your {target} is needed to continue </span></>
             })

            await dispatchAppContext({ type: "CEILING_PRELODER_REQUEST", payload: false })
            return false;
        }
 
        return true;
    }


    //Event
    const handleInputChange = async (e) => {

        const target = JSON.parse(e.target.dataset.payload).target;

        console.log(target)

        //Client Validation
        if(! await clientValidation(target, e.target)) { return false }

        if(e.which == '13') {
            handleContactFormApi();
        }   
    }

    const handleContactFormApi = async () => {

        //Client Validation

        if(! await clientValidation("your_name", yourNameRef.current)) { return false } 

        if(! await clientValidation("email", emailRef.current)) { return false } 

        if(! await clientValidation("subject", subjectRef.current)) { return false } 

        if(! await clientValidation("message", messageRef.current)) { return false } 

        const body = {   
            your_name: yourNameRef.current.value,
            email: emailRef.current.value,
            subject:  subjectRef.current.value,
            message:  messageRef.current.value
        }

        console.log(body)

        // const result = await forgotPassword_Action(dispatch, dispatchAppContext, body, false); //false to prevent user token check 

        // console.log(result);

        // if (result && result.status === 200) {

        //     setTimeout(() => {
        //         router.push('/dahsboard')
        //     }, 3000);
        // }

    }

    return (
        <div className="wrapper flex flex-col md:flex-row mt-28 md:mt-28 justify-between relative animate__animated animate__fadeIn">
            <div className="px-4 md:px-5 xl:px-52 item w-full">
                <h1 className="font-bold text-4xl md:text-5xl sm:text-6xl text-center md:text-left">
                     We are always <br className="hidden lg:flex"></br> open 24/7 for you.
                </h1>
                {/* <p className="mt-5 md:w-3/4 xl:w-1/2 text-xl text-center md:text-left">
                 
                </p> */}

                <div className="md:flex justify-between mt-20">         
                    <form className="contactForm mx-auto md:mx-0 md:w-1/2 px-2">
                        <div className="mt-6">
                            <InputDefault   
                                ref={yourNameRef}
                                type="text"
                                value=""
                                dataset={{target: "your_name"}}
                                className="rounded"
                                eventType={['onKeyUp']}
                                onEvent={handleInputChange}
                                placeHolder="Your Name"
                                note={note.your_name}
                            />
                        </div>
                        
                        <div className="mt-6">
                            <InputDefault   
                                ref={emailRef}
                                type="email"
                                value=""
                                dataset={{target: "email"}}
                                className="rounded"
                                eventType={['onKeyUp']}
                                onEvent={handleInputChange}
                                placeHolder="Email address"
                                note={note.email}
                            />
                        </div>
                        
                        <div className="mt-6">
                            <InputDefault   
                                ref={subjectRef}
                                type="text"
                                value=""
                                dataset={{target: "subject"}}
                                className="rounded"
                                eventType={['onKeyUp']}
                                onEvent={handleInputChange}
                                placeHolder="Subject"
                                note={note.subject }
                            />
                        </div>
                        <div className="mt-6">
                            <Textarea
                                value=""
                                className="rounded h-36 p-2 resize-none border-gray-300 scroller"
                                dataset={{target: "message"}}
                                onEvent={handleInputChange}
                                placeHolder="Write your message..."
                                note={note.message}
                            />
                        </div>

                        <div className="btnSignUpFormBox">
                                <PrimaryBtn pagePreload={true} requestPreloader={true}
                                onEvent={handleContactFormApi} className="primary_btn_color w-full h-12 mx-auto justify-center text-lg font-bold mt-3" label="Continue" />
                        </div>
                    </form>
                    <div className="text-left md:w-1/2 pt-10 px-2 sm:px-10 md:px-2">

                        <div className="my-10 mt-0">
                            <h1 className="font-bold p-0 text-xl">Call us</h1>
                            <p className="my-4 p-0 text-lg">+234 705 784 3748</p>
                        </div>

                        <div className="my-10">
                            <h1 className="font-bold p-0 text-xl">Email us</h1>
                            <p className="my-4 p-0 text-lg">contact@gateguard.org</p>
                        </div>

                        <div className="my-10">
                            <h1 className="font-bold p-0 text-xl">Visit us</h1>
                            <p className="my-4 p-0 text-lg">Plot 6, Gibbert Avenue, <br className="hidden lg:flex"></br> 
                            Flutter estate, Agidingbi, <br className="hidden lg:flex"></br> Ikeja, Lagos state.</p>
                        </div>

                    </div>
                </div>
            </div>

            <style jsx>{`

                .wrapper {
                    height: 800px;
                }

                .contactForm {
                    height: 576px;
                    width: 538px;
                }

                p{
                    color: #64626A;
                }
                h1{
                    line-height: 1.2em;
                }
                @media screen and (max-width: 1200px) {
              
                }

                @media screen and (max-width: 768px) {
                    .wrapper {
                        height: auto;
                    }
                    .contactForm {
                        width: 100%;
                    }
                }
            
            `}
            </style>
        </div>
    )
}

export default ContactForm;