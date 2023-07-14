import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const LoginForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:"", password:""
    })



    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }

        ))
    }
     

    function submitHandler(event){
        event.preventDefault();
        navigate("/dashboard");
         
    }

  return (
    <form onSubmit = {submitHandler} className='flex flex-col w-full bg-white gap-y-3 rounded-xl px-9 py-3 mt-5'>
        <label className='w-full mt-3 '>
            <p className='text-slate-700 text-md'>Email address</p>
            <input
                type='text'
                name='email'
                required
                value = {formData.email}
                onChange={changeHandler}
                placeholder = "Johndoe@gmail.com"
                className='bg-[#e2e8f0] rounded-lg text w-full p-[10px] mt-2 text-black'
            />
        </label>

        <label >
            <p className='text-slate-700 text-md'>Password</p>
            <input
                type="password"
                name='password'
                required
                value = {formData.password}
                onChange={changeHandler}
                placeholder = "........"
                className='bg-[#e2e8f0] rounded-lg text w-full p-[10px] mt-2 text-black'
            />
            <br/>
            <button className='mt-3'>
                <p>
                    Forgot Password?
                </p>
            </button>
        </label>

        <button className='bg-black rounded-lg font-md text-white px-md py-[12px] mb-4'>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm