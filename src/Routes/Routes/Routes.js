import Main from "../../Layout/Main/Main";
import { createBrowserRouter } from "react-router-dom";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category";
import Blog from "../../Pages/Blog/Blog";
import FAQ from "../../Pages/FAQ/FAQ";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CheckOut from "../../Pages/CheckOut/CheckOut";


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
                element: <Category></Category>,
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
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5001/courses/${params.id}`)
                
            },
            {
                path:'*', 
                element: <div className='bg-slate-400 text-5xl m-11 p-11'><b>404 Error !!! <p>This route is not found</p></b></div>
        }
  ]


        
    } 	
])