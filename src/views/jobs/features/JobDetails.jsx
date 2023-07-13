import React from 'react';

import Container from '../../../components/Container';
import BackButton from '../../../components/BackButton';

const JobDetails = () => {
    return (
        <Container>
            <BackButton label='Back to homepage' />
            <div className='mt-6 w-full p-4 flex flex-col gap-8 border border-neutral-70 rounded-md'>
                <div className='flex flex-col'>
                    <span className='text-xs text-neutral-70'>Full Time / Berlin</span>
                    <h3 className='font-semibold text-2xl'>Data Engineer</h3>
                    <hr className='mt-6' />
                </div>
                <div className='flex flex-col lg:flex-row lg:justify-between gap-8'>
                    <p className='row-span-2'>
                        What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className='row-span-1 flex flex-col gap-3'>
                        <div className='border border-neutral-70 w-full lg:w-96 h-40 p-3 rounded-sm'>
                            testing..
                        </div>
                        <div className='border border-neutral-70 w-full lg:w-96 h-40 p-3 rounded-sm'>
                            testing..
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default JobDetails;