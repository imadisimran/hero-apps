import React from 'react';

const PageTitle = ({title,description}) => {
    return (
        <div className='text-center mb-10'>
            <h2 className='text-5xl font-bold mb-5 text-[#001931]'>{title}</h2>
            <p className='text-lg text-gray-500'>{description}</p>
        </div>
    );
};

export default PageTitle;