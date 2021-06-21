import InputDefault from '../static-components/InputDefault';
import StyledImage from '../static-components/StyledImage';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from "react";
import PrimaryBtn from '@/components/static-components/PrimaryBtn';
import Link from 'next/link';
import { Toast } from "../../helpers/toast"
import { useDispatch } from 'react-redux';
import { useAppContext, useDispatchAppContext } from "../../react-wrapper/Context/AppContext";
import { login_Action } from '../../react-wrapper/Redux/actions/authAction';


const ForgotPassword = () => {   

    //State
    const [note, setNote] = useState({})
    const [icon, setIcon] = useState("las la-eye")
    const [passwordType, setPasswordType] = useState("password")

    //Ref
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    //Router
    const router = useRouter();

    //Use Context
    const appContext = useAppContext();
    const dispatchAppContext = useDispatchAppContext();

    //Redux
    const dispatch = useDispatch();

    //Function
    const handleIconSwitch = (e) => {
        console.log(e)
        if(icon === "las la-eye") {
            setIcon("las la-eye-slash")
            setPasswordType("text")
        }else {
            setIcon("las la-eye")
            setPasswordType("password")
        }
    }


    //validations
    const clientValidation = async (target, elem) => {
        setNote({})
        elem.style.border = "1px solid #EAE9F2";

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

        //Client Validation
        if(! await clientValidation(target, e.target)) { return false }

        if(e.which == '13') {
            handleforgotPasswordApi();
        }   
    }

    const handleforgotPasswordApi = async () => {

        //Client Validation

        if(! await clientValidation("email", emailRef.current)) { return false } 

        if(! await clientValidation("password", passwordRef.current)) { return false } 

        const body = {   
            email: emailRef.current.value,
            password:  passwordRef.current.value
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
        <div className="wrapper flex animate__animated animate__fadeIn relative">
            <form className="forgotPasswordForm image-block mx-auto mt-10 px-4 md:px-14 py-16">
                    <h1 className="font-bold p-0 text-2xl md:text-3xl text-center" style={{color: "#231F1F"}}>Password Recovery</h1>
                    <p className="my-4 p-0 text-center text-lg" style={{color: "#231F1F"}}>Enter your account details below to continue</p>

                <div className="mt-6">
                    <InputDefault   
                        ref={emailRef}
                        type="text"
                        value=""
                        dataset={{target: "email"}}
                        className="rounded"
                        eventType={['onKeyUp']}
                        onEvent={handleInputChange}
                        placeHolder="Email address"
                        note={note.email}
                    />
                </div>
                <div className="mt-4">
                    <InputDefault   
                        ref={passwordRef}
                        type={passwordType}
                        value=""
                        dataset={{target: "password"}}
                        className="rounded"
                        icon={`${icon} text-2xl my-4 mx-4 right-0 cursor-pointer`}
                        onIconEvent={handleIconSwitch}
                        eventType={['onKeyUp']}
                        onEvent={handleInputChange}
                        placeHolder="Password"
                        note={note.password}
                    />
                </div>
                <p className="flex justify-start h-14 mt-3 cursor-pointer">
                     Go back to&nbsp;<span className="text-primaryGreen underline"><Link href="/auth/login"> Login</Link></span>
                </p>

                <div className="btnSignUpFormBox">
                        <PrimaryBtn pagePreload={true} requestPreloader={true}
                        onEvent={handleforgotPasswordApi} className="primary_btn_color w-full h-12 mx-auto justify-center text-lg font-bold mt-3" label="Continue" />
                </div>
            </form>
            
            <style jsx>{`

                .forgotPasswordForm {
                    height: 576px;
                    width: 527px;
                    background: white;
                    background: #FFFFFF;
                    box-shadow: 0px 20px 61px rgba(65, 62, 101, 0.139969);
                    border-radius: 10px;
                }
                .image-block {
                    background-image: url("/images/others/wave-auth.svg");
                    background-repeat: repeat-x;
                    background-position: bottom;
                    background-size: contain;
                }

                @media screen and (max-width: 1200px) {
                    .wrapper {
                        height: auto;
                    }
                }
            
            `}
            </style>
        </div>
    )
}

export default ForgotPassword;