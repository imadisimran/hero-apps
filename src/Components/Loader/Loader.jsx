import React from 'react';
import { Circles } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='flex justify-center items-center w-full h-[100vh]'>
            <Circles height={300} width={300} color='#6e37e6'></Circles>
        </div>
    );
};

export default Loader;