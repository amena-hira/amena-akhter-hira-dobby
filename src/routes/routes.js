import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Authentication from "../Pages/Authentication/Authentication";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/home',
        element: <PrivateRoute><Home></Home></PrivateRoute>
    },
    {
        path: '/signup',
        element: <Authentication></Authentication>
    },
    {
        path: '/',
        element: <Authentication></Authentication>
    }
])

export default routes;