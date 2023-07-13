import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-col justify-center text-center items-center gap-8'>
            <div className='flex flex-col'>
                <h2 className='font-bold text-3xl md:text-5xl lg:text-6xl'>
                    Join our World-class team
                </h2>
                <h2 className='font-bold text-3xl md:text-5xl lg:text-6xl'>
                    of creators & dreamers
                </h2>
            </div>
            <div className='flex flex-col'>
                <h5 className='font-semibold'>Our philosopy is simple - hire a team of diverse, passionate people</h5>
                <h5 className='font-semibold'>And foster a culture that empowers you to do your best work.</h5>
            </div>
        </div>
    );
};

export default Header;