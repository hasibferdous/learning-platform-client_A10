import React from 'react';
import { Col } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';


const Category = () => {
    const CategoryCourse = useLoaderData();
    return (
        <div className='d-flex'>
                    <Col lg="3 me-5">
        {/* <h2><Link className='Course-Name text-dark mt-4' to={`/courses/${_id}`}>{title}</Link></h2> */}
        
            <h2>Number of courses: {CategoryCourse.length}</h2>
            {
                CategoryCourse.map(courses =><CourseCard
                    key={courses._id}
                    courses={courses}
                ></CourseCard>)
            }
</Col>
        </div>
    );
};

export default Category;