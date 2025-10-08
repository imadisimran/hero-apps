import React, { use } from 'react';
import Container from '../../Components/Container/Container';
import PageTitle from '../../Components/PageTitle/PageTitle';
import AppCard from '../../Components/AppCard/AppCard';

const Apps = ({appsDataPromise}) => {

    const appsData=use(appsDataPromise);
    
    return (
        <section className='bg-gray-50 py-20'>
            <Container>
                <div>
                    <PageTitle title={'Our All Applications'} description={'Explore All Apps on the Market developed by us. We code for Millions'}></PageTitle>

                    <div className='grid grid-cols-[repeat(1,256px)] md:grid-cols-[repeat(3,256px)] lg:grid-cols-[repeat(4,256px)] justify-center gap-7'>
                    {
                        appsData.map(appData => <AppCard key={appData.id} appData={appData}></AppCard>)
                    }
                </div>
                </div>
            </Container>
        </section>
    );
};

export default Apps;