import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';


const Footer = () => {





    return (
        <div className='text-center mt-5  ps-5 pe-5 pb-5 bg-dark text-white'>

            <h5 className='mt-5 pt-5'>Find us on</h5>
            <ButtonGroup>
            <Button className='mb-5 ms-2 rounded-5' variant="outline-info"><FaFacebook></FaFacebook></Button>
            <Button className='mb-5 ms-2 rounded-5' variant="outline-info"><FaInstagram></FaInstagram></Button>
            <Button className='mb-5 ms-2 rounded-5' variant="outline-info"><FaTwitter></FaTwitter></Button>
            <Button className='mb-5 ms-2 rounded-5' variant="outline-info"><FaWhatsapp></FaWhatsapp></Button>
            <Button className='mb-5 ms-2 rounded-5' variant="outline-info"><FaYoutube></FaYoutube></Button>
            </ButtonGroup>
            <p className='pb-5'>Copyright@2022</p>
        </div>
    );
};

export default Footer;