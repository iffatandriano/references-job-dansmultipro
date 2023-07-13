import React from 'react';

import { BiBaguette } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const AVATAR_URL =
  "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80";
const TITLE = 'Modern Trade & Channel Associate Manager';

const JobListCard = () => {
    return (
        <div className='border border-neutral-200 p-4 rounded-md hover:border hover:border-neutral-800'>
            <div className='flex flex-col gap-1'>
                <div className='flex flex-row gap-3 mb-[6px]'>
                    <img 
                        src={AVATAR_URL} 
                        className='rounded-md object-cover'
                        width={80} 
                        height={80} 
                        alt='img_jobs' 
                        loading='lazy' 
                    />
                    <div className='flex flex-col gap-1'>
                        <h4 className='font-bold text-sm'>
                            {TITLE.length > 32 ? `${TITLE.slice(0,32)}...` : null}
                        </h4>
                        <span className='text-xs text-neutral-70'>PT. Bintang Toedjoe</span>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-1'>
                    <HiOutlineLocationMarker size={18} />
                    <span className='text-xs'>Jakarta Timur</span>
                </div>
                <div className='flex flex-row items-center gap-1'>
                    <BiBaguette size={18} />
                    <span className='text-xs font-bold'>Full-Time</span>
                </div>
            </div>
        </div>
    );
};

export default JobListCard;