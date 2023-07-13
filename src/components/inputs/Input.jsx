import React from 'react';

const Input = ({
    id,
    placeholder,
    type,
    onChange,
}) => {
    return (
        <input
            id={id}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            className='
                w-96 
                h-10 
                flex 
                flex-row 
                items-center 
                p-3 
                rounded-md
                outline-none
                border 
                border-neutral-200
                hover:border-neutral-800
                focus:border-neutral-800
            '
        />
    );
};

export default Input;