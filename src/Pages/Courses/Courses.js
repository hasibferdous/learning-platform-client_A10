import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FaEye, FaRegBookmark, FaShareAlt, FaStar} from 'react-icons/fa'
import { CardGroup, Col, Container, Image, Row } from 'react-bootstrap';
import { BsFilePdf } from "react-icons/bs";
import Pdf from "react-to-pdf";


const ref = React.createRef();

const Courses = () => {


    const courses = useLoaderData();
    const {_id, title, instructor, price, details, image_url, rating, total_enrolled} = courses;
    
    return (
      <div>
        <h2 className="text-center ms-5 px-5 py-2">Course Details</h2>   
      <Pdf targetRef={ref} filename="course academy.pdf">
          {({ toPdf }) => (
          <button className="bg-info text-center ms-5 px-5 py-2" onClick={toPdf}><BsFilePdf></BsFilePdf>Download PDF</button>
          )}
      </Pdf>


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
            
            <Card.Img variant="top" src={image_url} />
            <div ref={ref}>
            <Card.Title className='text-center'><h2>{title}</h2></Card.Title>
            <div className='d-flex mt-3 text-center'>
                  <Image
                      roundedCircle
                      className='me-1 mt-3 text-center'
                      src={instructor.img}
                      style={{height: '30px'}}
                  ></Image>
                  <div>
                      <p className='mb-0 mt-2 text-center'><strong>Course Instructor: {instructor.name}</strong></p>
                      <p className='text-center'>Course Published Date: {instructor.published_date}</p>
                  </div>
              </div>
            <Card.Text>
              {
                 
                 <p className='text-center'>{details}</p>
                  
              }
               <h3 className='text-center'>Course Price: {price} $</h3>
              </Card.Text>
              </div>
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
              
              <Button variant="primary">Send Feedback</Button>
          </Card.Footer>
          </Card> 

  </CardGroup>
</div>
</Col>
  <button className='m-5 p-3 text-bold none text-center'>  <Link
          to={`/checkout/${_id}`}
          
        >
          <b>Get Premium Access</b>
        </Link></button>  


        {/* <div
          className="d-none"
          style={{ textAlign: "start", padding: "20px", paddingRight: "20px" }}
          ref={ref}
        >
          <h2 className='text-center'>Course Description</h2>
          <h3>{title}</h3>
          <p className='pe-5'>{details}</p>
        </div> */}

      </div>
    );

};

export default Courses;