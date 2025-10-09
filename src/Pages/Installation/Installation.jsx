import React, { use, useContext, useEffect, useState } from 'react';
import Container from '../../Components/Container/Container';
import { InstalledAppContext } from '../../Root/Root';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import getShortNumber from '../../Utility/getShortNum';
import { toast, ToastContainer } from 'react-toastify';
import PageTitle from '../../Components/PageTitle/PageTitle';

const Installation = ({ appsDataPromise }) => {

    const appsData = use(appsDataPromise);
    const [installedAppsId, setInstalledAppsId] = useContext(InstalledAppContext)
    const installedAppsData = appsData.filter(appData => installedAppsId.includes(appData.id));
    const [sortCategory, setSortCategory] = useState('')
    const handleSelect = (e) => {
        setSortCategory(e.target.value)
    }

    const [sortedAppsData, setSortedAppsData] = useState(installedAppsData)


    useEffect(() => {
        if (sortCategory === 'Size') {
            const newData = [...installedAppsData].sort((a, b) => b.size - a.size);
            setSortedAppsData(newData)
        }
        else if (sortCategory === 'Downloads') {
            const newData = [...installedAppsData].sort((a, b) => b.downloads - a.downloads);
            setSortedAppsData(newData)
        }
        else if (sortCategory === 'Rating') {
            const newData = [...installedAppsData].sort((a, b) => b.ratingAvg - a.ratingAvg);
            setSortedAppsData(newData)
        }
    }, [sortCategory])

    return (
        <div className='bg-gray-50'>
            <Container>
                <PageTitle title={'Your Installed Apps'} description={'Explore All Trending Apps on the Market developed by us'}></PageTitle>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl font-bold'>{installedAppsId.length} Apps Found</h3>
                    <div>
                        <select onChange={handleSelect} defaultValue="Sort By" className="select">
                            <option disabled={true}>Sort By</option>
                            <option>Size</option>
                            <option>Downloads</option>
                            <option>Rating</option>
                        </select>
                    </div>
                </div>
                <div className='space-y-5'>
                    {
                        sortedAppsData.map(installedAppData => <InstallationCard key={installedAppData.id} installedAppData={installedAppData} installedAppsId={installedAppsId} setInstalledAppsId={setInstalledAppsId}></InstallationCard>)
                    }
                </div>
                <ToastContainer></ToastContainer>
            </Container>
        </div>
    );
};


const InstallationCard = ({ installedAppData, setInstalledAppsId, installedAppsId }) => {
    // console.log(installedAppData)
    const { image, title, id, size, ratingAvg, downloads } = installedAppData

    const handleUninstallation = () => {
        const newInstalledAppsId = installedAppsId.filter(installedAppId => installedAppId !== id)
        setInstalledAppsId(newInstalledAppsId);
        localStorage.setItem('installedApps', JSON.stringify(newInstalledAppsId));
        toast(`${title} successfully uninstalled`)

    }

    return (

        <div className='bg-white p-5 rounded-xl flex justify-between items-center'>
            <div className='flex gap-10 items-center'>
                <img className='w-30 rounded-xl' src={image} alt={title} />
                <div className='space-y-5'>
                    <h3 className='text-lg font-bold'>{title}</h3>
                    <div className='flex gap-8'>
                        <div className='flex gap-3 items-center'>
                            <img className='w-5' src={download} alt="Download" />
                            <span className='font-bold'>{getShortNumber(downloads)}</span>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img className='w-5' src={rating} alt="Rating" />
                            <span className='font-bold'>{ratingAvg}</span>
                        </div>
                        <p className='text-gray-500'>{size} MB</p>
                    </div>
                </div>
            </div>
            <button onClick={handleUninstallation} className='btn btn-success'>Uninstall</button>
        </div>
    )
}

export default Installation;