import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import Modal from './Modal';
import useLoginModal from '../../store/useLoginModal';

import { BiLogoFacebookCircle } from 'react-icons/bi';
import { setCookies } from '../../utils/helpers/cookies';

const LoginModal = () => {
    const loginModal = useLoginModal();

    const responseFacebook = (response) => {
        setCookies('logined', response, response.expiresIn);
        loginModal.onClose();
        window.location.href = '/'
    }


    const bodyContent = (
        <div className='flex flex-col gap-3'>
            <div className='w-full'>
                <FacebookLogin 
                    cssClass='w-full bg-blue-600 flex flex-row justify-center items-center gap-2 rounded-md h-10 text-white'
                    appId="2189592981250950"
                    scope='public_profile'
                    fields="name,email,picture"
                    icon={<BiLogoFacebookCircle size={18} />}
                    callback={responseFacebook}
                />
            </div>
            <GoogleLogin
                className='w-full text-center'
                clientId=''
                buttonText="LOGIN WITH GOOGLE"
            />
        </div>
    )

    return (
        <Modal 
            disabled={false}
            isOpen={loginModal.isOpen}
            onClose={loginModal.onClose}
            title="Login"
            body={bodyContent}
        />
    );
};

export default LoginModal;