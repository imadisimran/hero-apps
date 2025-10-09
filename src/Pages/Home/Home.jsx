import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Banner from '../../Components/Banner/Banner';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';
import { useNavigation } from 'react-router';
import Loader from '../../Components/Loader/Loader';

const Home = () => {

    const navigation = useNavigation()
    const isNavigating = Boolean(navigation.location)

    return (
        <>
            {isNavigating ?
                <Loader></Loader> :
                <><Hero></Hero>
                    <Banner></Banner>
                    <TrendingApps></TrendingApps>
                </>}
        </>
    );
};

export default Home;