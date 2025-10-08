
import React, { use } from 'react';
import Container from '../Container/Container';
import AppCard from '../AppCard/AppCard';
import { Link } from 'react-router';

const TrendingApps = ({ appsDataPromise }) => {
    const appsData = use(appsDataPromise);
    // console.log(appsData)
    const homeAppsData = appsData.slice(0, 8);
    return (
        <section className='bg-gray-50'>
            <Container>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold mb-5 text-[#001931]'>Trending Apps</h2>
                    <p className='text-lg text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='grid grid-cols-[repeat(1,256px)] md:grid-cols-[repeat(3,256px)] lg:grid-cols-[repeat(4,256px)] justify-center gap-7'>
                    {
                        homeAppsData.map(appData => <AppCard key={appData.id} appData={appData}></AppCard>)
                    }
                </div>
                <div className='flex justify-center'>
                    <Link to='/apps' className="btn bg-gradient-to-br from-[#6e38e6] to-[#9d70ff] text-white btn-wide">Show All</Link>
                </div>
            </Container>
        </section>
    );
};

export default TrendingApps;