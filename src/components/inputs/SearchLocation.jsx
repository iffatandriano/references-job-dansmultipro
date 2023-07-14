import React, { useCallback, useState } from 'react';

import Input from './Input';
import useJobsStore from '../../store/job';
import { getJobs } from '../../services';

const SearchLocation = () => {
    // const navigation = 
    const [location, setLocation] = useState(null);
    const {params, setParams } = useJobsStore();

    const onChange = useCallback((e) => {
        const loc = e.target.value;
        setLocation(loc);

        if(loc === '') {
            setParams({
                ...params,
                page: 1,
                location: null,
            })
            getJobs(params);
            // navigation()
        } else {
            setParams({
                ...params,
                page: 1,
                location: loc
            })
        }
    }, [params, setParams, setLocation]);

    return (
        <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm'>Location</label>
            <Input 
                id='job_location'
                placeholder='Filter by city, state, zip code or country'
                type='text'
                value={location}
                onChange={onChange}
            />
        </div>
    );
};

export default SearchLocation;