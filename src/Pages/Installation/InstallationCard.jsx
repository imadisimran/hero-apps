import React from 'react';
import { toast } from 'react-toastify';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import getShortNumber from '../../Utility/getShortNum';

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

export default InstallationCard;