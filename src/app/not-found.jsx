import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center flex-col gap-5'>
            <h2 className='text-red-700 text-6xl font-bold'> 404 :This page is not found</h2>
            <Link href={"/"}><button className='btn btn-primary'>Back to home</button></Link>
        </div>
    );
};

export default NotFound;<h2>This page is not found</h2>