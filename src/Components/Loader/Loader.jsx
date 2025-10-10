import React from 'react';
import { Audio, BallTriangle } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='flex justify-center items-center w-full h-[100vh]'>
            <BallTriangle height={300} width={300} color='#6e37e6'></BallTriangle>
        </div>
    );
};


export const LoaderSmall=() => {
    return (
        <div className='flex justify-center items-center w-full col-span-full'>
            <Audio height={100} width={100} color='#6e37e6'></Audio>
        </div>
    )
}

export default Loader;