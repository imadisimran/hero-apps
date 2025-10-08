import React, { use } from 'react';
import { useParams } from 'react-router';
import download from '../../../assets/icon-downloads.png'
import rating from '../../../assets/icon-ratings.png'
import review from '../../../assets/icon-review.png'
import Container from '../../../Components/Container/Container';
import RatingChart from '../../../Components/RatingChart/RatingChart';

const AppDetails = ({ appsDataPromise }) => {
    const appsData = use(appsDataPromise)
    let { appId } = useParams()
    const appIdInt = parseInt(appId)
    const appData = appsData.find(app => app.id === appIdInt);
    // console.log(appData)
    // console.log(appId)
    const { image, title, companyName, id, description, size, reviews, ratingAvg, downloads, ratings } = appData
    const format = Intl.NumberFormat('en', { notation: 'compact' });
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
                        <Card img={download} name={'Downloads'} amount={format.format(downloads)} alt={'Download'}></Card>
                        <Card img={rating} name={'Average Ratings'} amount={ratingAvg} alt={'Rating'}></Card>
                        <Card img={review} name={'Reviews'} amount={format.format(reviews)} alt={'Reviews'}></Card>
                    </div>

                    <button className='btn btn-success'>Install Now ({size} MB)</button>
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