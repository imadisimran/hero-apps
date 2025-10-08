import React from 'react';
import Container from '../../Components/Container/Container';
import PageTitle from '../../Components/PageTitle/PageTitle';

const Apps = () => {
    
    return (
        <section className='bg-gray-50 py-20'>
            <Container>
                <div>
                    <PageTitle title={'Our All Applications'} description={'Explore All Apps on the Market developed by us. We code for Millions'}></PageTitle>
                </div>
            </Container>
        </section>
    );
};

export default Apps;