import React from 'react';

import useLoginModal from '../../store/useLoginModal';

const Menu = () => {
    const loginModal = useLoginModal();
    return (
        <div className='flex flex-row items-center gap-3'>
            <button 
                className='w-20 h-10 font-semibold text-sm bg-black rounded-full text-white hover:bg-gray-500'
                onClick={loginModal.onOpen}>
                Login
            </button>
        </div>
    );
};

export default Menu;