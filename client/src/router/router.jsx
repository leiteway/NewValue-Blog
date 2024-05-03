import { createBrowserRouter } from 'react-router-dom';
import LayoutPublic from '../layout/LayoutPublic.jsx';
import Home from '../pages/Home/Home.jsx';
import Login from '../pages/Login/Login.jsx';
import NewsDetails from '../pages/NewsDetails/NewsDetails.jsx';
import LayoutPrivate from '../layout/LayoutPrivate.jsx';
import Register from '../pages/Register/Register.jsx';
import NewsForm from '../pages/NewsForm/NewsForm.jsx';
import Dashboard from '../pages/dashboard/Dashboard.jsx';



const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/news/:id",
                element: <NewsDetails />
            },
        ],
    },
    {
        path: "/dashboard",
        element: <LayoutPrivate />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "/dashboard/register",
                element: <Register />
            },
            {
                path: "/dashboard/create",
                element: <NewsForm />,
            },
            {
                path: "/dashboard/update/:id",
                element: <NewsForm />,
            },
        ]
    }
]);
export default router;






