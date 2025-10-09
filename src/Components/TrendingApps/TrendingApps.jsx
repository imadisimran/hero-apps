import Container from '../Container/Container';
import AppCard from '../AppCard/AppCard';
import { Link, useLoaderData } from 'react-router';
import PageTitle from '../PageTitle/PageTitle';

const TrendingApps = () => {
    const appsData = useLoaderData();
    // console.log(appsData)
    const homeAppsData = appsData.slice(0, 8);
    return (
        <section className='bg-gray-50 py-20'>
            <Container>
                <PageTitle title={'Trending Apps'} description={'Explore All Trending Apps on the Market developed by us'}></PageTitle>
                <div className='grid grid-cols-[repeat(1,256px)] md:grid-cols-[repeat(3,256px)] lg:grid-cols-[repeat(4,256px)] justify-center gap-7'>
                    {
                        homeAppsData.map(appData => <AppCard key={appData.id} appData={appData}></AppCard>)
                    }
                </div>
                <div className='flex justify-center mt-5'>
                    <Link to='/apps' className="btn bg-gradient-to-br from-[#6e38e6] to-[#9d70ff] text-white btn-wide">Show All</Link>
                </div>
            </Container>
        </section>
    );
};

export default TrendingApps;