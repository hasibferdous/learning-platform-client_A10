import React from 'react';
import { Button, CardGroup, Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {FaEye, FaRegBookmark, FaShareAlt, FaStar} from 'react-icons/fa'
import './CourseCard.css'
const CourseCard = ({courses}) => {

    const {_id, title, image_url} = courses;
    //console.log(courses);

    return (
    <Container className='p-4 d-flex'>  

    <Row>
        <Col lg="3">
        <h2><Link className='Course-Name text-dark mt-4' to={`/courses/${_id}`}>{title}</Link></h2>
        </Col>





    <Col lg="5" xs="2" md="3" className='Card-Section'>
    <div className='Card-group'>
    <CardGroup 
    style={{ width: '24rem',  
    display: 'flex'}} 
    className='p-4 bg-dark' > 
    <Card style={{ width: '1rem'}}>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} style={{ width: '20rem', height:'20rem'}} className='mb-2'/>
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