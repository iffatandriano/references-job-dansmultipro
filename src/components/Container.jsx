import React from 'react';

const Container = ({ children }) => {
    return (
        <div className='max-w-[2560px] mx-auto xl:px-20 md:mx-4 sm:px-2 px-4'>
            {children}
        </div>
    );
};

export default Container;