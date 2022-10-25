import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';





const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate =useNavigate()
    const [error, SetError]= useState('')
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);

        })
        .catch(error => console.error(error))

    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(email, password);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            SetError('');
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.error(error)
            SetError(error.message);
        });

;
    

    }

    return (
        <div>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required/>

        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text> {error} </Form.Text>
      </Form>
              <div>
              <h2>Login With</h2>
              <ButtonGroup vertical>
              <Button onClick={handleGoogleSignIn} className='mb-2 rounded-5' variant="outline-info"><FaGoogle></FaGoogle> Google</Button>
              <Button className='mb-2 rounded-5' variant="outline-info"><FaGithub></FaGithub> Github</Button>
              <Button className='mb-2 rounded-5' variant="outline-info"><FaFacebook></FaFacebook> Facebook</Button>
              <h3>Find us on</h3>
              <Button className='mb-2 rounded-5' variant="outline-info"><FaFacebook></FaFacebook> Facebook</Button>
              <Button className='mb-2 rounded-5' variant="outline-info"><FaInstagram></FaInstagram> Instagram</Button>
              <Button className='mb-2 rounded-5' variant="outline-info"><FaTwitter></FaTwitter> Twitter</Button>
              <Button className='mb-2 rounded-5' variant="outline-info"><FaWhatsapp></FaWhatsapp> Whats aap</Button>
              <Button className='mb-2 rounded-5' variant="outline-info"><FaYoutube></FaYoutube> Youtube</Button>
              </ButtonGroup>
          </div>
          </div>
  
    );
};

export default Login;