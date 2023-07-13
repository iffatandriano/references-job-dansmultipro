import React from 'react';

import Container from '../../components/Container';
import Header from './property/Header';
import JobList from './property/JobList';
import SearchDescription from '../../components/inputs/SearchDescription';
import SearchLocation from '../../components/inputs/SearchLocation';


const JobsPage = () => {
    return (
        <Container>
            <div className='flex flex-col gap-8'>
                <Header />
                <div className='mt-16 flex flex-col gap-8'>
                    <div className='flex flex-row items-center gap-8'>
                        <SearchDescription />
                        <SearchLocation />
                        <button className='mt-6 w-24 h-8 border rounded-lg hover:border-neutral-800'>Full Time</button>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className='font-semibold text-xl'>All Jobs</h4>
                        <JobList />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default JobsPage;