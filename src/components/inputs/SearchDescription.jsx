import React, { useCallback, useState } from 'react';
import Input from './Input';
import useJobsStore from '../../store/job';
import { getJobs } from '../../services';

const SearchDescription = () => {
    const [description, setDescription] = useState(null);
    const { params, setParams } = useJobsStore();

    const onChange = useCallback((e) => {
        const desc = e.target.value;
        setDescription(desc);

        if(desc === '') {
            setParams({
                ...params,
                description: null,
            })
            getJobs(params);
        } else {
            setParams({
                ...params,
                page: 1,
                description: desc 
            })
        }

    }, [params, setParams, setDescription]);

    return (
        <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm'>Job Description</label>
            <Input 
                id='job_description'
                placeholder='Filter by title, benefits, companies, expertise'
                type='text'
                value={description}
                onChange={onChange}
            />
        </div>
    );
};

export default SearchDescription;