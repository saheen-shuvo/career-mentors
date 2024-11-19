import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';
import Category from '../pages/Category';
import Details from '../components/Details';

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
                element: <Details></Details>
            }
        ]
    }
])

export default router;