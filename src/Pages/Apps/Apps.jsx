import React, {useEffect, useState } from 'react';
import Container from '../../Components/Container/Container';
import PageTitle from '../../Components/PageTitle/PageTitle';
import AppCard from '../../Components/AppCard/AppCard';
import { Link, useLoaderData, useNavigation } from 'react-router';
import Loader from '../../Components/Loader/Loader';

const Apps = () => {

    const appsData = useLoaderData();
    const [searchTxt, setSearchTxt] = useState('')
    const [foundApps, setFoundApps] = useState(appsData)
    const navigation = useNavigation()
    const isNavigating = Boolean(navigation.location)

    const handleSearch = (e) => {
        setSearchTxt(e.target.value);
    }

    useEffect(() => {
        const newData = appsData.filter(appData => appData.title.toLowerCase().includes(searchTxt.toLowerCase()));
        setFoundApps(newData)
    }, [searchTxt])


    // console.log(searchTxt)

    return (
        <>
            {
                isNavigating ? <Loader></Loader> : <section className='bg-gray-50 py-20'>
                    <Container>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-xl font-bold'>{foundApps.length} Apps Found</h3>
                            <div>
                                <label className="input">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                        </g>
                                    </svg>
                                    <input onChange={handleSearch} value={searchTxt} type="search" required placeholder="Search" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <PageTitle title={'Our All Applications'} description={'Explore All Apps on the Market developed by us. We code for Millions'}></PageTitle>

                            <div className='grid grid-cols-[repeat(1,256px)] md:grid-cols-[repeat(3,256px)] lg:grid-cols-[repeat(4,256px)] justify-center gap-7'>
                                {
                                    foundApps.length === 0 ? <div className='col-span-full'>
                                        <h1 className='text-7xl font-bold text-center'>No Apps Found</h1>
                                        <div className='flex justify-center mt-10'>
                                            <Link to='/apps' className="btn bg-gradient-to-br from-[#6e38e6] to-[#9d70ff] text-white btn-wide" onClick={() => setSearchTxt('')}>Show All</Link>
                                        </div>
                                    </div> : foundApps.map(appData => <AppCard key={appData.id} appData={appData}></AppCard>)
                                }
                            </div>
                        </div>
                    </Container>
                </section>
            }
        </>
    );
};

export default Apps;