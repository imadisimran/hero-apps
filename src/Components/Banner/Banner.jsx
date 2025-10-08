import React from 'react';

const Banner = () => {
    return (
        <section className='bg-gradient-to-br from-[#6e37e6] to-[#8e5df8] py-20 px-5'>
            <h2 className='font-bold text-5xl text-white text-center'>Trusted by Millions, Built for You</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-20 mt-10'>
                <Card title1='Total Downloads' amount='29.6M' title2='21% more than last month'></Card>
                <Card title1='Total Reviews' amount='906K' title2='46% more than last month'></Card>
                <Card title1='Active Apps' amount='132+' title2='31 more will Launch'></Card>
            </div>
        </section>
    );
};


const Card=({title1,amount,title2})=>{
    return(
        <div className='text-center space-y-5 text-white font-light'>
            <p>{title1}</p>
            <h2 className='text-6xl font-bold'>{amount}</h2>
            <p>{title2}</p>
        </div>
    )
}

export default Banner;