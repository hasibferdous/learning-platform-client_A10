import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5001/categories')
        .then(res => res.json())
        .then(data => setCategories(data));

    }, [])

    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='fs-1 mb-4 '><Link to="/"> Course Academy </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown className='bg-success me-3 mb-3' title="Categories" id="collasible-nav-dropdown">
              
             
              <div className='ms-5'>
              {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/categories/${category.id}`}>{category.name} </Link>
                    </p>)
                }
                </div>
        </NavDropdown>
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
            <Nav.Link> <Link to="/blog">Blog</Link></Nav.Link>
            <Nav.Link> <Link to="/about">About</Link></Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;