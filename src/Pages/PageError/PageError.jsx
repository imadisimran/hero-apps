import React from 'react';
import errorLogo from '../../assets/error-404.png'
import { Link } from 'react-router';
const PageError = () => {
    return (
        <div className='bg-gray-50 py-20 flex justify-center items-center flex-col'>
            <div>
                <img src={errorLogo} alt="Error" />
            </div>
            <div className='space-y-5 mt-5'>
                <h2 className='text-5xl font-bold text-center'>Oops, page not found!</h2>
                <p className='text-gray-500 text-center'>The page you are looking for is not available.</p>
                <div className='flex justify-center'>
                    <Link to='/' className="btn bg-gradient-to-br from-[#6e38e6] to-[#9d70ff] text-white btn-wide">Back To Home</Link>
                </div>
            </div>
        </div>
    );
};

export default PageError;