import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

import Container from '../../../components/Container';
import BackButton from '../../../components/BackButton';
import { getJobsDetail } from '../../../services';
import useJobsStore from '../../../store/job';
import DOMPurify from 'dompurify';

const IMG_DEFAULT =
"https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg";


const JobDetails = () => {
    const [imgError, setImgError] = useState('');
    const {id} = useParams();
    const { record, error } = useJobsStore();

    useEffect(() => {
        if(id !== 'undefined') {
            getJobsDetail(id);
        }
    }, [id]);

    return (
        <Container>
            <BackButton label='Back to homepage' />
            <div className='mt-6 w-full p-4 flex flex-col gap-8 border border-neutral-70 rounded-md'>
                {
                    id === 'undefined' || error ? (
                        <div className='flex flex-col justify-center items-center font-bold text-red-600'>
                            ID NOT FOUND.
                        </div>
                    ) : (
                        <React.Fragment>
                            <div className='flex flex-col'>
                                <span className='text-xs text-neutral-70'>{record?.type || '-'} / {record?.location || '-'}</span>
                                <h3 className='font-semibold text-2xl'>{record?.title || '-'}</h3>
                                <hr className='mt-6' />
                            </div>
                            <div className='flex flex-col lg:flex-row lg:justify-between gap-8'>
                                <div className='row-span-2 text-md' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(record?.description) }} />
                                <div className='row-span-1 flex flex-col gap-3'>
                                    <div className='border border-neutral-70 w-full lg:w-[30vw] p-3 rounded-sm'>
                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-row justify-between items-center gap-3'>
                                                <h4 className='font-semibold text-lg'>
                                                    {record?.company}
                                                </h4>
                                                <div>
                                                    Other Jobs
                                                </div>
                                            </div>
                                            <img 
                                                    src={!_.isEmpty(imgError) ? record?.company_logo : IMG_DEFAULT} 
                                                    className='rounded-md object-cover'
                                                    width={80} 
                                                    height={80} 
                                                    alt='img_jobs' 
                                                    loading='lazy' 
                                                    onError={(e) => setImgError(e.type)}
                                            />
                                            <hr />
                                            <a href={record?.company_url} className='hover:text-blue-600'>{record?.company_url}</a>
                                        </div>
                                    </div>
                                    <div className='border border-neutral-70 w-full lg:w-[30vw] h-40 p-3 rounded-sm'>
                                        <div className='flex flex-col gap-3'>
                                            <h4 className='font-semibold text-md'>
                                                How to apply
                                            </h4>
                                            <hr />
                                            <div 
                                                dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(record?.how_to_apply)}} 
                                                className='w-full text-sm' 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }
            </div>
        </Container>
    );
};

export default JobDetails;