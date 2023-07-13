import React from 'react';

import Input from './Input';

const SearchLocation = () => {
    return (
        <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm'>Job Description</label>
            <Input 
                id='job_location'
                placeholder='Filter by city, state, zip code or country'
                type='text'
                onChange={() => {}}
            />
        </div>
    );
};

export default SearchLocation;