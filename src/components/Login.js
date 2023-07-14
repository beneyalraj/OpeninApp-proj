import React from 'react'
import {SiApple} from 'react-icons/si'
import LoginForm from '../Subcomponents/LoginForm'
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const clientId='60903763485-a4e5ou2ike0dcb40n9qtc80vc4i4piap.apps.googleusercontent.com';

    const responseMessage = (response) => {
        console.log(response);
        navigate("/dashboard");
      };
      const errorMessage = (error) => {
        console.log(error);
      };

    return(
    <div className='lg:w-[1440px] max-[1150px]:w-screen  flex justify-between'>

        <div className='flex h-screen justify-center items-center font-sans md:Montserrat font-bold text-7xl text-white bg-black w-[588px] max-[900px]:hidden'>Board.</div>

        <div className='flex flex-col justify-center items-center w-screen h-screen top-409 bg-neutral-100'>
            <div className='justify-items-start w-[385px] space-y-3'>
                <h1 className='font-sans text:Montserrat font-bold text-4xl leading-9 left-832'>Sign In</h1>
                    <p className='font-sans text:Lato text-base font-normal py-[-12px] w-161 leading-[19.5px] h-19 top-307 left-832'>Sign in to your account</p>
                    <div className='flex gap-7'>
                        
                            <button className=' rounded-lg'>
                                <GoogleLogin

                                shape='pill'
                                size='large'
                                clientId={clientId}
                                onSuccess={responseMessage}
                                onError={errorMessage}
                            />

                            </button>
                            
                        
                        
                        
                            <button className='flex items-center space-x-2 bg-white text-grey-300 px-4 py-2 rounded-2xl border border-gray-300 w-180 h-30 top-354 left-1037'>
                                <SiApple/>
                                <p className=' text-sm'>Sign in with Apple</p>
                            </button>
                        
                        
                    </div>
                    <LoginForm/>
                    <p className='mt-4 ml-14'>
                        <span>Don't have an account?</span>
                        <span>
                        <button className='text-blue-500 ml-1'>Register here</button>
                        </span>
                    </p>

            </div>

        </div>


    </div>

    
    )
}

export default Login