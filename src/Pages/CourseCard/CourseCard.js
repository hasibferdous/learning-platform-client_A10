import React from 'react';
import { Button, CardGroup, Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseCard.css'
const CourseCard = ({courses}) => {

    const {_id, title, image_url} = courses;
    //console.log(courses);

    return (
    <Container className='p-4 d-flex'>  
    <Row>
        <Col lg="3 me-5">
        <h2><Link className='Course-Name text-dark mt-4' to={`/courses/${_id}`}>{title}</Link></h2>
        </Col>





    <Col  className='Card-Section' style={{ width: '20rem', height: '30rem'  
      }}>
    <div className='Card-group' >
    <CardGroup 
    style={{ width: '20rem', height: '30rem'  }}
    className='p-4 bg-dark' > 
    <Card>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} style={{ width: '15rem', height:'20rem'}} className='mb-2'/>
          <Card.Text>
            {
               <Button><Link className='text-dark mt-4' to={`/courses/${_id}`}>See Details</Link></Button>
            }
            </Card.Text>
        </Card.Body>
        </Card>  
</CardGroup>
</div>
</Col>
</Row>
</Container>
    );
};
export default CourseCard;