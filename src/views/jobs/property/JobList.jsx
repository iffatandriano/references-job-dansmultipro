import React from 'react';
import JobListCard from '../../../components/card/JobListCard';

const JobList = ({ 
    jobs,
    isLoading,
    lastJobsElementRef, 
}) => {
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
            {jobs?.map((list, listIndex) => {
                if(jobs.length === listIndex + 1) {
                    return (
                        <JobListCard 
                            key={listIndex} 
                            lastJobsElementRef={lastJobsElementRef}
                            jobs={list}
                        />
                    )
                } else {
                    return (
                        <JobListCard 
                            key={listIndex} 
                            lastJobsElementRef={lastJobsElementRef}
                            jobs={list}
                        />
                    )
                }
            })}
        </div>
    );
};

export default JobList;