import React from 'react';

const Menu = () => {
    return (
        <div className='flex flex-row items-center gap-3'>
            <button className='font-semibold hover:text-gray-500'>Login</button>
            <button className='w-20 h-10 font-semibold text-sm bg-black rounded-full text-white hover:bg-gray-500'>Sign Up</button>
        </div>
    );
};

export default Menu;