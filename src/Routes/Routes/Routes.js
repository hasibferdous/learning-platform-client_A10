import Main from "../../Layout/Main/Main";
import { createBrowserRouter } from "react-router-dom";
//mport Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category";
import Blog from "../../Pages/Blog/Blog";
import FAQ from "../../Pages/FAQ/FAQ";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter ([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5001/courses')
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5001/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <PrivateRoute><Courses></Courses></PrivateRoute> ,
                loader: ({params}) => fetch(`http://localhost:5001/courses/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>,
              
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }


        ]
    } 	
])