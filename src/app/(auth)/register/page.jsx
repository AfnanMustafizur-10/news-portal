"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {


    const { register, handleSubmit, watch } = useForm();

    const handleRegisterFunc = async (data) => {
        const { email, name, photo, password } = data;


        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/login",
        });
        console.log(res, error);
        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("user create successful")
        }

    };

    const [isShowPassword, setIsShowPassword] = useState(false);




    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-semibold text-3xl text-center'>Register your account</h2>
                <hr className='mt-5 px-3 pb-3' />

                <form className=' space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text"  {...register("name")} className="input" placeholder="Your name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text"  {...register("photo")} className="input" placeholder="Enter Your Photo URL here" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email Address</legend>
                        <input type="email"  {...register("email")} className="input" placeholder="Enter Your Email here" />
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text" : "password"}  {...register("password", { required: true })} className="input" placeholder="Password" />
                        <span onClick={() => setIsShowPassword(!isShowPassword)} className='absolute top-4 right-6 text-blue-600 text-xl cursor-pointer'>{isShowPassword ? <FaEyeSlash /> : <FaEye></FaEye>}</span>
                    </fieldset>
                    <button className="btn bg-slate-800
                     text-white rounded-xl w-full btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Register</button>
                </form>

            </div>

        </div>
    );
};

export default RegisterPage;