import React, { useCallback, useEffect, useState } from 'react';

import Container from '../Container';
import Menu from './Menu';
import Title from './Title';
import { getCookies, isAuth, removeCookies } from '../../utils/helpers/cookies';
import _ from 'lodash';

const Navbar = () => {
    const [dataLogin, setDataLogin] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(!isAuth()) {
            return
        }

        const data = getCookies('logined');
        setDataLogin(data);
    }, [])

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])

    const toggleLogout = useCallback(() => {
        removeCookies('logined');
        setIsOpen(false);

        window.location.href = '/';
    }, []);

    return (
        <nav className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                        <Title />
                        {
                            !_.isNull(dataLogin) ? (
                                <div className='relative flex flex-row items-center gap-4 cursor-pointer' onClick={toggleOpen}>
                                    <img 
                                        src={dataLogin.picture.data.url} 
                                        className='rounded-full'
                                        width={40} 
                                        height={40} 
                                        alt='img_login' />
                                    <label className='font-semibold text-md'>{dataLogin.name}</label>
                                </div>
                            ) : (
                                <Menu />
                            )
                        }
                        {
                            isOpen && (
                                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[12vw] bg-white overflow-hidden right-20 top-16 text-sm'>
                                    <div className='flex flex-col cursor-pointer p-3'>
                                        <span className='text-md hover:text-neutral-400' onClick={toggleLogout}>Log out</span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </Container>
            </div>
        </nav>
    );
};

export default Navbar;