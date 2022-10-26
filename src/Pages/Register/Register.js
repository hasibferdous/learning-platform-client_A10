import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>your name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo url</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Enter photourl" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check  onClick={handleAccepted} type="checkbox" label="Accept Terms and Conditions" />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Submit
        </Button>
        <Form.Text> {error} </Form.Text>
      </Form>
    );
};

export default Register;