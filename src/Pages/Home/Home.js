import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
<Carousel className='m-3' variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/students-watching-webinar-computer-studying-online_74855-15522.jpg?w=740&t=st=1666708725~exp=1666709325~hmac=b8ae2d2b657217049faddabeb88772c0f5334c1923366a63d1dad183b448060d"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/76/cb/05/76cb05cd2ec49b47e4a9a1a04c2e9633.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/certification-concept-illustration_114360-5171.jpg?t=st=1666706032~exp=1666706632~hmac=a452c146b705e59cd0a842e78a484d73ef85cf2b7c75fce901bc32dc93a9ec0b"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Home;