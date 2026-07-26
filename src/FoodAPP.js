import React from "react";
import ReactDom from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import Error from "./components/Error";
import RestuarntMenu from "./components/RestuarntMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



const App = () =>
{ 
    return(
        <div className="app">
            
            <Header/>
            <Outlet/>
        </div>
    )
}

const Approute = createBrowserRouter([
    { 
        path: "/",
        element: <App />,
        children:[
            {
                path : "/",
                element: <Body/>
            },
            {
                path : "/About",
                element: <About/>
            },
            {
                path: "/restuarnt/:resid",
                element: <RestuarntMenu/>
            }

        ],
        errorElement: <Error/>
    }

])

const Root = ReactDom.createRoot(document.getElementById("root"))

Root.render(<RouterProvider router={Approute} />)