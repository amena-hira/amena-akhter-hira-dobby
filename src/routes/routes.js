import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Authentication from "../Pages/Authentication/Authentication";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/signup',
        element: <Authentication></Authentication>
    },
    {
        path: '/login',
        element: <Authentication></Authentication>
    }
])

export default routes;