import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const courses = useLoaderData();
    const {title} = courses;
    return (
        <div>
            <h2>Thank you for enrolling the course {title}</h2>
        </div>
    );
};

export default CheckOut;