import _ from 'lodash';
import React, { useState } from 'react';

import { BiBaguette } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const IMG_DEFAULT =
"https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg";

const JobListCard = ({ jobs, lastJobsElementRef }) => {
    const [imgError, setImgError] = useState('');
    return (
        <a href={`/details/${jobs?.id}`} ref={lastJobsElementRef} className='border border-neutral-200 p-4 rounded-md hover:border hover:border-neutral-800'>
            <div className='flex flex-col gap-1'>
                <div className='flex flex-row gap-3 mb-[6px]'>
                    <img 
                        src={!_.isEmpty(imgError) ? jobs?.company_logo : IMG_DEFAULT} 
                        className='rounded-md object-cover'
                        width={80} 
                        height={80} 
                        alt='img_jobs' 
                        loading='lazy' 
                        onError={(e) => setImgError(e.type)}
                    />
                    <div className='flex flex-col gap-1'>
                        <h4 className='font-bold text-sm'>
                            {jobs?.title.length > 32 ? `${jobs?.title.slice(0,32)}...` : jobs?.title || '-'}
                        </h4>
                        <span className='text-xs text-neutral-70'>{jobs?.company}</span>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-1'>
                    <HiOutlineLocationMarker size={18} />
                    <span className='text-xs'>{jobs?.location}</span>
                </div>
                <div className='flex flex-row items-center gap-1'>
                    <BiBaguette size={18} />
                    <span className='text-xs font-bold'>{jobs?.type}</span>
                </div>
            </div>
        </a>
    );
};

export default JobListCard;