import React from 'react';

import Container from '../Container';
import Menu from './Menu';
import Title from './Title';

const Navbar = () => {
    return (
        <nav className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                        <Title />
                        <Menu />
                    </div>
                </Container>
            </div>
        </nav>
    );
};

export default Navbar;