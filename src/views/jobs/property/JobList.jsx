import React from 'react';
import JobListCard from '../../../components/card/JobListCard';

const JobList = () => {
    return (
        <div 
            className='
                grid
                sm:grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
                mb-6
                h-[350px]
            '
        >
            <JobListCard />
            <JobListCard />
            <JobListCard />
            <JobListCard />
            <JobListCard />
            <JobListCard />
        </div>
    );
};

export default JobList;