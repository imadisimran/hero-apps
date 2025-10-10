import React, { useContext, useEffect, useState } from 'react';
import Container from '../../Components/Container/Container';
import { InstalledAppContext } from '../../Root/Root';
import { ToastContainer } from 'react-toastify';
import PageTitle from '../../Components/PageTitle/PageTitle';
import { Link, useLoaderData, useNavigation } from 'react-router';
import Loader from '../../Components/Loader/Loader';
import InstallationCard from './InstallationCard';

const Installation = () => {

    const appsData = useLoaderData();
    const [installedAppsId, setInstalledAppsId] = useContext(InstalledAppContext)
    const initialData = appsData.filter(appData => installedAppsId.includes(appData.id))
    const [installedAppsData, setInstalledAppsData] = useState(initialData);
    const [sortCategory, setSortCategory] = useState('Size')
    const [order, setOrder] = useState('High-Low')
    const navigation = useNavigation()
    const isNavigating = Boolean(navigation.location)
    useEffect(() => {
        const newData = appsData.filter(appData => installedAppsId.includes(appData.id))
        setInstalledAppsData(sortFunctionality(newData))
    }, [installedAppsId])
    const handleSelect = (e) => {
        setSortCategory(e.target.value)
    }

    const handleOrder = (e) => {
        setOrder(e.target.value)
    }


    const sortFunctionality = (newData) => {
        if (sortCategory === 'Size') {
            const sortData = [...newData].sort((a, b) => order === 'Low-High' ? a.size - b.size : b.size - a.size);
            return sortData
        }
        else if (sortCategory === 'Downloads') {
            const sortData = [...newData].sort((a, b) => order === 'Low-High' ?  a.downloads - b.downloads : b.downloads - a.downloads);
            return sortData
        }
        else if (sortCategory === 'Rating') {
            const sortData = [...newData].sort((a, b) => order === 'Low-High' ?  a.ratingAvg - b.ratingAvg : b.ratingAvg - a.ratingAvg);
            return sortData
        }
        else {
            return newData
        }
    }

    // useEffect(() => {
    //     if (sortCategory === 'Size') {
    //         const sortData = [...installedAppsData].sort((a, b) => b.size - a.size);
    //         setInstalledAppsData(sortData)
    //     }
    //     else if (sortCategory === 'Downloads') {
    //         const sortData = [...installedAppsData].sort((a, b) => b.downloads - a.downloads);
    //         setInstalledAppsData(sortData)
    //     }
    //     else if (sortCategory === 'Rating') {
    //         const sortData = [...installedAppsData].sort((a, b) => b.ratingAvg - a.ratingAvg);
    //         setInstalledAppsData(sortData)
    //     }
    // }, [sortCategory])
    useEffect(() => {
        setInstalledAppsData(sortFunctionality(installedAppsData))
    }, [sortCategory, order])

    return (
        <>
            {
                isNavigating ? <Loader></Loader> : <section className='bg-gray-50 py-20'>
                    <Container>
                        {installedAppsId.length === 0 ? <div className='col-span-full'>
                            <h1 className='text-5xl font-bold text-center'>No Apps Installed Yet</h1>
                            <div className='flex justify-center mt-10'>
                                <Link to='/apps' className="btn bg-gradient-to-br from-[#6e38e6] to-[#9d70ff] text-white btn-wide">Show All Apps</Link>
                            </div>
                        </div> : <PageTitle title={'Your Installed Apps'} description={'Explore All Trending Apps on the Market developed by us'}></PageTitle>}
                        <div className='flex justify-between items-center mb-5'>
                            <h3 className='text-xl font-bold'>{installedAppsId.length} Apps Found</h3>
                            <div className='flex gap-5'>
                                <select onChange={handleSelect} defaultValue="Size" className="select">
                                    <option disabled={true}>Sort By</option>
                                    <option>Size</option>
                                    <option>Downloads</option>
                                    <option>Rating</option>
                                </select>
                                <select onChange={handleOrder} defaultValue="High-Low" className="select">
                                    <option>High-Low</option>
                                    <option>Low-High</option>
                                </select>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            {
                                installedAppsData.map(installedAppData => <InstallationCard key={installedAppData.id} installedAppData={installedAppData} installedAppsId={installedAppsId} setInstalledAppsId={setInstalledAppsId}></InstallationCard>)
                            }
                        </div>
                        <ToastContainer></ToastContainer>
                    </Container>
                </section>
            }
        </>
    );
};

export default Installation;