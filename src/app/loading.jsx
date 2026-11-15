import React from 'react';

const LoadingPage = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            global loading   
            <span className="loading loading-dots loading-xl"></span>
        </div>
    );
};

export default LoadingPage;