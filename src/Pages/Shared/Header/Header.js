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
import './Header.css'

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
        fetch('https://course-academy-server-nine.vercel.app/explore-categories')
        .then(res => res.json())
        .then(data => setCategories(data));

    }, [])

    return (
<Navbar className='mb-3 p-5 ps-5' collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <Navbar.Brand href="/">
            <img
              src="https://img.freepik.com/free-vector/illustration-education-concept_53876-20611.jpg?w=740&t=st=1666726226~exp=1666726826~hmac=940ee26ada5a7bac141ef6b8703c227ef9e637a0931692cccc8dbf1fdcc88325"
              width="40"
              height="40"
              className="d-inline-block align-top mb-3"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Brand><h2 className='Site ms-1'>Course Academy</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

        <div className='mt-2'>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 p-1"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
        
            <Nav.Link> <Link className='log ms-2' to="/">Home</Link></Nav.Link>
            <Nav.Link><div>
              {
                    categories.map(category => <p key={category.id}>
                        <Link className='log' to={`/category/${category.id}`}>Courses</Link>
                    </p>)
                }
                </div></Nav.Link>
            <Nav.Link> <Link className='log' to="/blog">Blog</Link></Nav.Link>
            <Nav.Link> <Link className='log' to="/faq">FAQ</Link></Nav.Link>
          </Nav>
          <DarkModeToggle className='mb-2 me-2'
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={80}
          />

<Nav className='text-success mb-2'>
      </Nav>
        <Nav className='ms-4 mb-3'>
          <Nav.Link href=''>{user?.photoURL ? 
          <Image  style={{height: '40px'}}
          roundedCircle src={user?.photoURL}
          title={`${user?.displayName ? user.displayName:user?.email}`}
          ></Image>
          :<FaUser></FaUser>
        }</Nav.Link>
        </Nav>
        <Nav.Link className='d-flex flex-column' href=''>
            { 
            user?.uid ?
            <>
            <span className='text-success mb-2'>{user?.displayName}</span>
            <button className='text-success bg-dark' onClick={handleLogOut}>Log out</button>
            </>
            :
            <>
            <Link className='log me-2' to='/login'>Login</Link>
            <Link className='log' to='/register'>Register</Link>
            </>
           
            }</Nav.Link>
  
        </Navbar.Collapse>
      
    </Navbar>
    );
};

export default Header;