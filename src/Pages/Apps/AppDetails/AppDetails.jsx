import React, { use, useContext, useState } from 'react';
import { useParams } from 'react-router';
import download from '../../../assets/icon-downloads.png'
import rating from '../../../assets/icon-ratings.png'
import review from '../../../assets/icon-review.png'
import Container from '../../../Components/Container/Container';
import RatingChart from '../../../Components/RatingChart/RatingChart';
import { InstalledAppContext } from '../../../Root/Root';
import { ToastContainer, toast } from 'react-toastify';
import { setToLocalStorage } from '../../../Utility/manageLocalStorage';
import getShortNumber from '../../../Utility/getShortNum';

const AppDetails = ({ appsDataPromise }) => {
    const appsData = use(appsDataPromise)
    let { appId } = useParams()
    const appIdInt = parseInt(appId)
    const appData = appsData.find(app => app.id === appIdInt);
    // console.log(appData)
    // console.log(appId)
    const { image, title, companyName, id, description, size, reviews, ratingAvg, downloads, ratings } = appData
    const [installedAppsId,setInstalledAppsId]=useContext(InstalledAppContext)

    const checkAvailability=()=>{
        if(installedAppsId.includes(id)){
            return true
        }
        return false
    }


    const [isInstalled,setIsInstalled]=useState(checkAvailability());

    const handleInstalled=()=>{
        setInstalledAppsId([...installedAppsId,id])
        setIsInstalled(true)
        toast(`${title} successfully installed`)
        setToLocalStorage(id)
    }

    // console.log(installedAppsId);

    return (
        <Container>
            <div className='space-y-10'>
                <div className='flex flex-col md:flex-row items-center gap-15 border-b border-gray-300 pb-5'>
                <div>
                    <img src={image} alt={title} />
                </div>
                <div className='space-y-5 flex-1'>
                    <div className='pb-5 border-b border-gray-300'>
                        <h2 className='text-4xl font-bold mb-3'>{title}</h2>
                        <p className='text-gray-500'>Developed by <span className='text-[#6e38e6] font-bold'>{companyName}</span></p>
                    </div>

                    <div className='flex gap-x-10'>
                        <Card img={download} name={'Downloads'} amount={getShortNumber(downloads)} alt={'Download'}></Card>
                        <Card img={rating} name={'Average Ratings'} amount={ratingAvg} alt={'Rating'}></Card>
                        <Card img={review} name={'Reviews'} amount={getShortNumber(reviews)} alt={'Reviews'}></Card>
                    </div>

                    <button onClick={handleInstalled} className='btn btn-success' disabled={isInstalled}>{isInstalled?'Installed':`Install Now (${size} MB)`}</button>
                </div>
            </div>

            <div className='h-100 pb-10 border-b border-gray-300'>
                <RatingChart ratings={ratings}></RatingChart>
            </div>

            <div>
                <h3 className='font-bold mb-5 text-xl'>Description</h3>
                <p className='text-gray-500'>{description}</p>
            </div>
            </div>
        <ToastContainer></ToastContainer>
        </Container>
    );
};


const Card = ({ img, name, amount, alt }) => {
    return (
        <div className='space-y-3'>
            <img className='w-8' src={img} alt={alt} />
            <p className='text-gray-500'>{name}</p>
            <h2 className='text-4xl font-bold'>{amount}</h2>
        </div>
    )
}

export default AppDetails;