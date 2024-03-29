import React, { useCallback, useRef, useState } from 'react';

import Container from '../../components/Container';
import Header from './property/Header';
import JobList from './property/JobList';
import SearchDescription from '../../components/inputs/SearchDescription';
import SearchLocation from '../../components/inputs/SearchLocation';

import useFetchJobs from '../../utils/hooks/useFetchJobs';
import useJobsStore from '../../store/job';
import { getJobs } from '../../services';

const JobsPage = () => {
    const [isFulltime, setIsFulltime] = useState(false);
    const { setParams, params } = useJobsStore();
    const { isLoading, records } = useFetchJobs(params);

    const observer = useRef();

    const lastJobsElementRef = useCallback(
        (node) => {
          if (isLoading) return;
          if (observer.current) observer.current.disconnect();
          observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && records.length > 0) {
                setParams({
                    ...params,
                    page: params.page + 1,
                });
            }
          });
          if (node) observer.current.observe(node);
        },
        [isLoading, records, setParams, params]
      );

      const onClickFulltime = useCallback((fulltime) => {
        setIsFulltime(fulltime);
            setParams({
                ...params,
                page: 1,
                full_time: fulltime
            })
            getJobs(params);
      }, [setParams, params, setIsFulltime]);

    return (
        <Container>
            <div className='flex flex-col gap-8'>
                <Header />
                <div className='mt-16 flex flex-col gap-8'>
                    <div className='flex flex-row items-center gap-8'>
                        <SearchDescription />
                        <SearchLocation />
                        <button 
                            onClick={() => onClickFulltime(!isFulltime)}
                            className={`mt-6 w-24 h-8 border ${isFulltime ? 'border-neutral-800' : 'border-neutral-200'} rounded-lg hover:border-neutral-800`}
                        >
                            Full Time
                        </button>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className='font-semibold text-xl'>All Jobs</h4>
                            <JobList 
                                lastJobsElementRef={lastJobsElementRef} 
                                jobs={records}
                                isLoading={isLoading}
                            />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default JobsPage;