import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Button, Container} from 'react-bootstrap';
import { useState } from 'react';

//import SideNavBar from '../../Pages/Shared/SideNavBar/SideNavBar';
import { Link } from 'react-router-dom';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (

    <Container>
    
      <div className='m-5'>
    <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/students-watching-webinar-computer-studying-online_74855-15522.jpg?w=740&t=st=1666708725~exp=1666709325~hmac=b8ae2d2b657217049faddabeb88772c0f5334c1923366a63d1dad183b448060d"
          alt="First slide"
        />
        <Carousel.Caption className='text-dark'>
          <h1><b>Welcome</b></h1>
          <h3><b>To Course Academy</b></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/76/cb/05/76cb05cd2ec49b47e4a9a1a04c2e9633.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='text-dark'>
          <h1><b>Get Enroll Now</b></h1>
          <h3><b>Your Online Course Partner</b></h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/certification-concept-illustration_114360-5171.jpg?t=st=1666706032~exp=1666706632~hmac=a452c146b705e59cd0a842e78a484d73ef85cf2b7c75fce901bc32dc93a9ec0b"
          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>
    </div>
    </Container>

      

    );
};

export default Home;