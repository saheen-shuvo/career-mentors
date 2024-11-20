import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';
import Category from '../pages/Category';
import Details from '../components/Details';
import Login from '../components/Login';
import Register from '../components/Register';
import PrivateRoutes from '../pages/PrivateRoutes';
import Profile from '../components/Profile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Category></Category>
            },
            {
                path: "/details/:id",
                element: <PrivateRoutes><Details></Details></PrivateRoutes>
            },
            {
                path: "/profile",
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    }
])

export default router;