import Navbar from '@/Components/Shared/Navbar';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
       <>
       <Navbar></Navbar>
       {children}
       </>
    );
};

export default AuthLayout;