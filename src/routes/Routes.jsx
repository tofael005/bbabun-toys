import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import AllToys from "../pages/AllToys";
import Blog from "../pages/Blog";
import Error from "../pages/Error";
import Registration from "../LogOrReg/Registration";
import LogIn from "../LogOrReg/LogIn";
import MyToys from "../pages/MyToys";
import AddAtoys from "../pages/AddAtoys";
import About from "../pages/Latest";
import ViewDetailsToy from "../pages/ViewDetailsToy";
import PrivateRouter from "../Private/PrivateRouter";
import EditToys from "../pages/EditeToys";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/allToys",
                element: <PrivateRouter><AllToys/></PrivateRouter>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/myToys",
                element: <PrivateRouter><MyToys/></PrivateRouter>
            },
            {
                path: "/addAtoys",
                element: <PrivateRouter><AddAtoys/></PrivateRouter>
            },
            {
                path: "/registration",
                element: <Registration/>
            },
            {
                path: "/login",
                element: <LogIn/>
            },
            {
                path: "/viewDetails/:id",
                element: <PrivateRouter><ViewDetailsToy/></PrivateRouter>
            },
            {
                path: "/editToys/:id",
                element: <EditToys/>
            }
        ]
    }
])

export default Routes