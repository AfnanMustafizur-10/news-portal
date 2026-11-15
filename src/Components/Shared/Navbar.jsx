import Link from 'next/link';
import React from 'react';
import avatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';


const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between mt-5'>
            <div>

            </div>
            <ul className='flex  justify-between items-center gap-5 text-gray-700'>
                <li> <NavLink href={"/"}>Home</NavLink></li>
                <li> <NavLink href={"/career"}>Career</NavLink></li>
                <li> <NavLink href={"/about-us"} >About</NavLink></li>
            </ul>
            <div className='flex justify-between items-center gap-3'>
        <Image src={avatar} height={60} width={60} alt='avatar'></Image>
        <button className='btn bg-purple-500 text-white'><Link href={"/login"}> LogIn</Link></button>
            </div>
        </div>
    );
};

export default Navbar;