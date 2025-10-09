import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Banner from '../../Components/Banner/Banner';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';
import { useNavigation } from 'react-router';
import { Circles } from 'react-loader-spinner';

const Home = () => {

    const navigation = useNavigation()
    const isNavigating = Boolean(navigation.location)

    return (
        <>
            {isNavigating ?
                <div className='flex justify-center items-center w-full h-[100vh]'>
                    <Circles height={300} width={300} color='#6e37e6'></Circles>
                </div> :
                <><Hero></Hero>
                    <Banner></Banner>
                    <TrendingApps></TrendingApps>
                </>}
        </>
    );
};

export default Home;