import React from 'react';

import { AiOutlineArrowLeft } from 'react-icons/ai';

const BackButton = ({
    label,
}) => {
    return (
        <a href='/' className='cursor-pointer flex flex-row items-center gap-1'>
            <AiOutlineArrowLeft size={16} />
            <label className='text-sm cursor-pointer'>{label}</label>
        </a>
    );
};

export default BackButton;