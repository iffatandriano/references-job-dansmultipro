import React from 'react';
import Input from './Input';

const SearchDescription = () => {
    return (
        <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm'>Job Description</label>
            <Input 
                id='job_description'
                placeholder='Filter by title, benefits, companies, expertise'
                type='text'
                onChange={() => {}}
            />
        </div>
    );
};

export default SearchDescription;