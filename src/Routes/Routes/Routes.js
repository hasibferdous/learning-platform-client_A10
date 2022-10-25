import Main from "../../Layout/Main/Main";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter ([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            },
            {
                path: '/blog/:id',
                element: <Blog></Blog>
            } 
        ]
    } 	
])