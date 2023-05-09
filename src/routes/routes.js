import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Authentication/SignUp";
import Login from "../Pages/Authentication/Login";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
])

export default routes;