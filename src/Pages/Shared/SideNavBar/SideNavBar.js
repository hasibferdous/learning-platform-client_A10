import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNavBar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5001/explore-categories')
        .then(res => res.json())
        .then(data => setCategories(data));

    }, [])

    return (
        <div>
            
            <div className='ms-5 text-dark'>
              {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}  </Link>
                    </p>)
                }
                </div>
        </div>
    );
};

export default SideNavBar;