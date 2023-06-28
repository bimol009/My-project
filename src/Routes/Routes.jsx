import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ContactMe from "../pages/Contact/ContactMe";
import Home from '../pages/Home/Home/Home';
import Login from "../pages/Login/Login";
import Register from "../pages/SignUp/Register";
import Main from './../Layout/Main';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            },
            {
                path:'contactMe',
                element:<ContactMe></ContactMe>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;