import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';


const Category = () => {
    const CategoryCourse = useLoaderData();
    return (
        <div>
            <h2>Number of courses: {CategoryCourse.length}</h2>
            {
                CategoryCourse.map(courses =><CourseCard
                    key={courses._id}
                    courses={courses}
                ></CourseCard>)
            }
        </div>
    );
};

export default Category;