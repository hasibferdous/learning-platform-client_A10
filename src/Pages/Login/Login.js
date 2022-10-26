import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import handleGithub from '../../Contexts/AuthProvider/AuthProvider';





const Login = () => {

    const {signIn, handleGithubSignIn} = useContext(AuthContext);
   
    const [error, SetError]= useState('')
    const navigate =useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const {providerLogin} = useContext(AuthContext);

    const githubProvider = new GithubAuthProvider()
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

        const handleGithub=(githubProvider)=>{
          handleGithubSignIn()
          .then(result=>{
             console.log(result.user)
           }).catch(error=>{
             console.log(error)
           })
    
         }

    

    }

    return (
        <div className='m-5 p-4'>
        <h2 className='mb-2 text-center'><b>Login Here</b></h2>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 px-5" controlId="formBasicEmail">
          <Form.Label><strong>Email address</strong></Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required/>

        </Form.Group>
  
        <Form.Group className="mb-3 px-5" controlId="formBasicPassword">
          <Form.Label><strong>Password</strong></Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required/>
          <label className="label">
                  <Link to="" className="label-text-alt link link-hover ms-1 mt-2">
                    Forgot password?
                  </Link>
                </label>
        
        </Form.Group>




        <Button className="ms-5 px-3" variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text> {error} </Form.Text>

        <label className="text-center ">
                <Link
                  to="/register"
                  className="label-text-alt link link-hover text-center ms-3"
                >
                  Don't have account? Click Here!
                </Link>
              </label>
      </Form>
              <div className='text-center mt-5'>
              <h3 className='mb-3 text-center'><b>Login With</b></h3>
              <ButtonGroup vertical className='me-2 p-1'>
              <Button onClick={handleGoogleSignIn} className='mb-3 px-4 rounded-5 bg-light' variant="outline-info"><FaGoogle></FaGoogle>Continue with Google</Button>
              <Button onClick={handleGithubSignIn} className=' px-4 rounded-5 bg-light' variant="outline-info"><FaGithub></FaGithub>Continue with Github</Button>
              </ButtonGroup>
          </div>
          </div>
  
    );
};

export default Login;