'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
        provider: "google",
    });
    // console.log(data);
    
}

const handleGithubSignIn =async()=>{
    const data = await authClient.signIn.social({
        provider: "github"
    })
}

const RSideBar = () => {
    return (
        <div>
            <h2 className='font-bold text-lg text-center'>Login with</h2>
            <div className=' flex flex-col gap-3 font-bold mt-3'>
                <button className=' btn  text-blue-700 border-blue-500' onClick={handleGoogleSignIn}>
                    <FaGoogle></FaGoogle>
                    Login with google
                </button>
                <button className='btn border-blue-950  ' onClick={handleGithubSignIn}> <FaGithub></FaGithub> Login with github</button>
            </div>
        </div>
    );
};

export default RSideBar;