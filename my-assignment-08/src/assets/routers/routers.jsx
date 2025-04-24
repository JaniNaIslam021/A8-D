import { createBrowserRouter } from "react-router";
import App from "../../App";
import About from "../../Pages/About";
import Hero from "../../Component/Hero";
import Home from "../../Pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        errorElement: <p className="text-3xl my-5 mx-15">Not Found</p>,
        children: [
            {
                path: "/",
                Component: Home,
            },
            {
                path: "/Hero",
                Component: Hero,
            },

            {
                path: "/About",
                element: <About></About>,
            }
        ]

    },

])