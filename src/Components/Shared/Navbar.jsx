'use client'

import Link from 'next/link';
import React from 'react';
import avatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';


const Navbar = () => {

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;





    return (
        <div className='container mx-auto flex justify-between mt-5'>
            <div>

            </div>
            <ul className='flex  justify-between items-center gap-5 text-gray-700'>
                <li> <NavLink href={"/"}>Home</NavLink></li>
                <li> <NavLink href={"/career"}>Career</NavLink></li>
                <li> <NavLink href={"/about-us"} >About</NavLink></li>
            </ul>



            {isPending ? (<span className="loading loading-spinner loading-lg"></span>)
                : user ? (<div className='flex justify-between items-center gap-3'>
                    <h2>Hello,{user.name}</h2>
                    <Image src={user.image || avatar} height={60} width={60} alt='avatar' className='rounded-full border-2 w-10 '></Image>
                    <button onClick={async () => await authClient.signOut()} className='btn btn-primary '>logout</button>
                </div>)
                    :
                    (<button className='btn bg-purple-500 text-white'><Link href={"/login"}> LogIn</Link></button>)

            }


        </div>
    );
};

export default Navbar;