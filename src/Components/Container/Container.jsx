import React from 'react';

const Container = ({children}) => {
    return (
        <div className='mx-auto w-11/12'>
            {children}
        </div>
    );
};

export default Container;