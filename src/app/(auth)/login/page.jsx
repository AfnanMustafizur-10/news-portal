"use client"

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {


    const { register, handleSubmit, watch } = useForm();


    const [isShowPassword,setIsShowPassword] = useState(false)

    const handleLogInFunc = async (data) => {
        console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email:data.email,
            password: data.password, 
            rememberMe: true, 
            callbackURL: "/",
        });
    };





    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-semibold text-3xl text-center'>Log in your account</h2>
                <hr className='mt-5 px-3 pb-3' />

                <form className=' space-y-4' onSubmit={handleSubmit(handleLogInFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email Address</legend>
                        <input type="text"  {...register("email")} className="input" placeholder="Enter Your Email here" />
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword?"text":"password"}  {...register("password", { required: true })} className="input" placeholder="Password" />
                        <span onClick={()=>setIsShowPassword(!isShowPassword)} className='absolute top-4 right-4 text-blue-600 text-xl cursor-pointer'>{isShowPassword?<FaEyeSlash /> :<FaEye></FaEye>}</span>
                    </fieldset>
                    <button className="btn bg-slate-800
                     text-white rounded-xl w-full btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Login</button>
                </form>
                <p className=' text-center text-sm mt-3'>Don't Have an account? <Link href={"/register"} className='text-blue-500'> Register </Link></p>
            </div>

        </div>
    );
};

export default LoginPage;