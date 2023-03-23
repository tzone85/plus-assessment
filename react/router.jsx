import {createBrowserRouter} from "react-router-dom";
import Login from "./src/views/ Login.jsx";
import Signup from "./src/views/Signup.jsx";
import Users from "./src/views/Users.jsx";
import NotFoundView from "./src/views/NotFoundView.jsx";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
    {
        path: '/users',
        element: <Users/>
    },
    {
        path: '*',
        element: <NotFoundView/>
    }
])

export default router;
