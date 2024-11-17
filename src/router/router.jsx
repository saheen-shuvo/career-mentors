import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';
import Category from '../pages/Category';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Category></Category>
            }
        ]
    }
])

export default router;