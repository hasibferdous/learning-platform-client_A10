import React from 'react';
import { CardGroup, Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {FaEye, FaRegBookmark, FaShareAlt, FaStar} from 'react-icons/fa'

const CourseCard = ({courses}) => {

    const {_id, title, author, details, image_url, rating, total_view} = courses;
    //console.log(courses);

    return (



    <Container className='p-4 d-flex'>  
    <Row>
        <Col lg="3">
        {title}
        </Col>


    <Col lg="9">
    <div className='d-flex flex-row justify-content-end'>
    <CardGroup 
    style={{ width: '18rem',  
    display: 'flex'
    }} 
    className='p-4 d-flex justify-content-end' > 
    <Card style={{ width: '1rem' }}>
        <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <Image
                    roundedCircle
                    className='me-1'
                    src={author.img}
                    style={{height: '30px'}}
                ></Image>
                <div>
                    <p className='mb-0 mt-2'>{author.name}</p>
                    <p>{author.published_date}</p>
                </div>
            </div>
            <div>
                <FaRegBookmark></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {
                details.length > 250 ?
                <p>{details.slice(0, 250) + '...'} <Link to={`/courses/${_id}`}>See More</Link></p>
                : <p>{details}</p>
            }
            </Card.Text>
         
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
            <div>
                <FaStar className='text-warning me-2'></FaStar>
                <span>{rating?.number}</span>
            </div>
            <div>
                <FaEye className='me-2'></FaEye>
                <span>{total_view}</span>
            </div>
        </Card.Footer>
        </Card>  
</CardGroup>
</div>
</Col>
</Row>
</Container>


    );
};

export default CourseCard;