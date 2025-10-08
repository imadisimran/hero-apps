import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Banner from '../../Components/Banner/Banner';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Banner></Banner>
            <TrendingApps></TrendingApps>
        </>
    );
};

export default Home;