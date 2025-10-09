import React from 'react';
import errorLogo from '../../assets/App-Error.png'
import { Link } from 'react-router';

const AppError = () => {
    return (
        <div className='bg-gray-50 py-20 flex justify-center items-center flex-col'>
            <div>
                <img src={errorLogo} alt="Error" />
            </div>
            <div className='space-y-5 mt-5'>
                <h2 className='text-5xl font-bold text-center'>Oops, App not found!</h2>
                <p className='text-gray-500 text-center'>The App you are looking for is not available.</p>
                <div className='flex justify-center'>
                    <Link to='/apps' className="btn bg-gradient-to-br from-[#6e38e6] to-[#9d70ff] text-white btn-wide">Show All Apps</Link>
                </div>
            </div>
        </div>
    );
};

export default AppError;