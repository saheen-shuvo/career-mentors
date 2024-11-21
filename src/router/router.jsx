import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';
import Category from '../pages/Category';
import Details from '../components/Details';
import Login from '../components/Login';
import Register from '../components/Register';
import PrivateRoutes from '../pages/PrivateRoutes';
import Profile from '../components/Profile';
import ResetPass from '../components/ResetPass';
import Reviews from '../components/Reviews';
import ErrorPage from '../components/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: "/reviews",
                element: <PrivateRoutes><Reviews></Reviews></PrivateRoutes>
            },
            {
                path: "/resetPassword",
                element: <ResetPass></ResetPass>
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