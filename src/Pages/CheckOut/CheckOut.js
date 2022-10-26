import React from 'react';
import {useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const courses = useLoaderData();
    const {title} = courses;
    return (
        <div className='m-5 p-5 text-center'>
            <h4 className='mb-5'>Checkout</h4>
            <h2>Thank you for enrolling the course:<h1>{title} </h1> </h2>  
        </div>
    );
};
export default CheckOut;