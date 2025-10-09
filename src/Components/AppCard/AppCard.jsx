import React from 'react';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import { Link } from 'react-router';
import getShortNumber from '../../Utility/getShortNum';

const AppCard = ({ appData }) => {
    // console.log(appData)
    const { image, title, ratingAvg, downloads, id } = appData

    return (
        <div className='p-5 bg-white rounded-xl'>
            <Link to={`/app/${id}`} >
                <div className='space-y-4 h-full flex flex-col'>
                    <img className='rounded-xl' src={image} alt={title} />
                    <h3 className='font-semibold'>{title}</h3>
                    <div className='flex justify-between items-center mt-auto'>
                        <div className='flex gap-3 items-center py-2 px-4 bg-green-100 rounded-2xl '>
                            <img className='w-4' src={download} alt="Download" />
                            <span className='inline-block text-green-500'>{getShortNumber(downloads)}</span>
                        </div>
                        <div className='flex items-center gap-3 py-2 px-4 bg-red-100 rounded-2xl'>
                            <img className='w-4' src={rating} alt='Rating' />
                            <span className='inline-block text-red-500'>{ratingAvg}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AppCard;