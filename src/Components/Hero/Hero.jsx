import React from 'react';
import { FaGooglePlay,FaAppStoreIos } from 'react-icons/fa6';
import hero from '../../assets/hero.png'
const Hero = () => {
    return (
        <section className='space-y-5 bg-gray-50 pt-20'>
            <div className='text-center space-y-5'>
                <h1 className='text-7xl font-bold'>We Build <br /> <span className='text-[#6e37e6]'>Productive</span> Apps</h1>
                <p className='text-gray-500 text-lg'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br className='hidden md:inline'/> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='text-center space-x-5 mt-4'>
                <a href='https://play.google.com/' target='_blank' className="btn font-bold text-lg bg-white border border-gray-200"><FaGooglePlay></FaGooglePlay>Google Play</a>
                <a href='https://www.apple.com/app-store/' target='_blank' className="btn font-bold text-lg bg-white border border-gray-200"><FaAppStoreIos></FaAppStoreIos>App Store</a>
            </div>
            <div>
                <img className='mx-auto' src={hero} alt="Mobile Image" />
            </div>
        </section>
    );
};

export default Hero;