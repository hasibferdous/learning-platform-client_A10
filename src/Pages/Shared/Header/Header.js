import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

import DarkModeToggle from "react-dark-mode-toggle";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';


const Header = () => {


  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }

    const [categories, setCategories] = useState([]);

    const [isDarkMode, setIsDarkMode] = useState(() => false);

    useEffect(() =>{
        fetch('http://localhost:5001/explore-categories')
        .then(res => res.json())
        .then(data => setCategories(data));

    }, [])

    return (
<Navbar className='mb-3 ps-5' collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <Navbar.Brand href="/">
            <img
              src="https://img.freepik.com/free-vector/illustration-education-concept_53876-20611.jpg?w=740&t=st=1666726226~exp=1666726826~hmac=940ee26ada5a7bac141ef6b8703c227ef9e637a0931692cccc8dbf1fdcc88325"
              width="40"
              height="40"
              className="d-inline-block align-top mb-2"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Brand className='fs-1 mb-4 '><Link to="/"> Course Academy </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

        <div>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
        
            <Nav.Link> <Link to="/">Home</Link></Nav.Link>
            <Nav.Link><div>
              {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>Courses</Link>
                    </p>)
                }
                </div></Nav.Link>
            <Nav.Link> <Link to="/blog">Blog</Link></Nav.Link>
            <Nav.Link> <Link to="/faq">FAQ</Link></Nav.Link>

          </Nav>
          <DarkModeToggle className='mb-2 me-5'
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={80}
          />
<Nav className='me-5'>
          <Nav.Link href=''>
            { 
            user?.uid ?
            <>
            <span>{user?.displayName}</span>
            <button onClick={handleLogOut}>Log out</button>
            </>
            :
            <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            </>
           
            }</Nav.Link>
        </Nav>
        <Nav className='me-5'>
          <Nav.Link href=''>{user?.photoURL ? 
          <Image style={{height: '40px'}}
          roundedCircle src={user?.photoURL}></Image>
          :<FaUser></FaUser>
        }</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    );
};

export default Header;