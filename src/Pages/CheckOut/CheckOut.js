import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = ({courses}) => {
    //const courses = useLoaderData();
    const {_id, title} = courses;
    return (
        <div className='m-5 p-5'>
            <h2>Thank you for enrolling the course {title}</h2>
            <h2><Link className='Course-Name text-dark mt-4' to={`/courses/${_id}`}>{title}</Link></h2>
        </div>
    );
};

export default CheckOut;