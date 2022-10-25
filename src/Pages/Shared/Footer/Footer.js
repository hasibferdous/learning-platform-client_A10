import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Footer = () => {

    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);

        })
        .catch(error => console.error(error))

    }



    return (
        <div className='text-center mt-3 bg-dark text-white'>
            <h5 className='pt-5'>Login With</h5>
            <ButtonGroup horizontal>
            <Button onClick={handleGoogleSignIn} className='mb-2 rounded-5' variant="outline-info"><FaGoogle></FaGoogle> Google</Button>
            <Button className='mb-2 rounded-5' variant="outline-info"><FaGithub></FaGithub> Github</Button>
            <Button className='mb-2 rounded-5' variant="outline-info"><FaFacebook></FaFacebook> Facebook</Button>
            </ButtonGroup>
            <h5 className='mt-3'>Find us on</h5>
            <ButtonGroup>
            <Button className='mb-5 rounded-5' variant="outline-info"><FaFacebook></FaFacebook> Facebook</Button>
            <Button className='mb-5 rounded-5' variant="outline-info"><FaInstagram></FaInstagram> Instagram</Button>
            <Button className='mb-5 rounded-5' variant="outline-info"><FaTwitter></FaTwitter> Twitter</Button>
            <Button className='mb-5 rounded-5' variant="outline-info"><FaWhatsapp></FaWhatsapp> Whats aap</Button>
            <Button className='mb-5 rounded-5' variant="outline-info"><FaYoutube></FaYoutube> Youtube</Button>
            </ButtonGroup>
        </div>
    );
};

export default Footer;