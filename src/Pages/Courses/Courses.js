import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FaEye, FaRegBookmark, FaShareAlt, FaStar} from 'react-icons/fa'
import { CardGroup, Col, Container, Image, Row } from 'react-bootstrap';

const Courses = () => {
    const courses = useLoaderData();
    const {_id, title, instructor, price, details, image_url, rating, total_enrolled} = courses;
    return (
      <div>
      <Col lg="9">
      <div className='Card-group'>
      <CardGroup 
      style={{ width: '40rem',  
      display: 'flex'}} 
      className='p-4 d-flex justify-content-end' > 
      <Card style={{ width: '1rem' }}>
          <Card.Header className='d-flex justify-content-between align-items-center'>

              <div>
                  <FaRegBookmark></FaRegBookmark>
                  <FaShareAlt></FaShareAlt>
              </div>
          </Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <div className='d-flex mt-3'>
                  <Image
                      roundedCircle
                      className='me-1 mt-3'
                      src={instructor.img}
                      style={{height: '30px'}}
                  ></Image>
                  <div>
                      <p className='mb-0 mt-2'><strong>Course Instructor: {instructor.name}</strong></p>
                      <p>Course Published Date: {instructor.published_date}</p>
                  </div>
              </div>
            <Card.Text>
              {
                 
                 <p>{details}</p>
                  
              }
               <h3>Course Price: {price} $</h3>
              </Card.Text>
           
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
              <div>
                 
                  <FaStar className='text-warning me-2'></FaStar>
                  <span>Rating: {rating?.number}</span>
              </div>
              <div>
                  <small>Total enrolled:</small>
                  <span>{total_enrolled}</span>
              </div>
              <Button variant="primary">Enroll Now</Button>
          </Card.Footer>
          </Card> 

  </CardGroup>

  <Button><Link to='/checkout'>Get Premium Access</Link></Button>
  
  </div>
  </Col>
          
        
      
      </div>
    );

};

export default Courses;