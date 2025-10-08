import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Banner from '../../Components/Banner/Banner';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';

const Home = ({appsDataPromise}) => {
    return (
        <>
            <Hero></Hero>
            <Banner></Banner>
            <TrendingApps appsDataPromise={appsDataPromise}></TrendingApps>
        </>
    );
};

export default Home;