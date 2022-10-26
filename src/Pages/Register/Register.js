import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const {createUser, updateUserProfile } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, SetError]= useState('')

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            SetError('');
            handleUpdateUserProfile(name, photoURL)
        })
        .catch(e => console.error(e));
    }

    const handleUpdateUserProfile = (name, photoURL) =>{
      const profile = {
        displayName: name,
        photoURL: photoURL
      }
      updateUserProfile(profile)
      .then(() => {})
      .catch(error => console.error(error));
    }

    const handleAccepted = event =>{
      setAccepted(event.target.checked)
    }

    return (
      <div className='m-5 p-4'>
        <h2 className='mb-2 text-center'><b>Register Here</b></h2>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 px-5" controlId="formBasicEmail">
          <Form.Label><strong>Your name</strong></Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter name" required/>
        </Form.Group>
        <Form.Group className="mb-3 px-5" controlId="formBasicEmail">
          <Form.Label><strong>Photo url</strong></Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Enter photourl" required/>
        </Form.Group>
        <Form.Group className="mb-3 px-5" controlId="formBasicEmail">
          <Form.Label><strong>Email address</strong></Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required/>
        </Form.Group>
  
        <Form.Group className="mb-3 px-5" controlId="formBasicPassword">
          <Form.Label><strong>Password</strong></Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3 px-5" controlId="formBasicCheckbox">
          <Form.Check  onClick={handleAccepted} type="checkbox" label="Accept Terms and Conditions" />
        </Form.Group>
        <Button className='ms-5 px-3' variant="primary" type="submit" disabled={!accepted}>
          Submit
        </Button>
        <Form.Text> {error} </Form.Text>
        <label className="text-center ms-3">
                <Link
                  to="/login"
                  className="label-text-alt link link-hover text-center"
                >
                  Already have an account? Click Here !
                </Link>
              </label>
      </Form>
      </div>
    );
};

export default Register;