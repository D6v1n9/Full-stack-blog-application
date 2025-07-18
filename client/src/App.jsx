import React from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Single from "./pages/Single"
import Write from "./pages/Write"


import { Navbar, Footer } from "./components";

function App() {

  const Layout = () => {
    return (
      <>
        <Navbar/>
          <Outlet/>
        <Footer/>
      </>
    )
  }
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/post/:id",
          element:<Single/>
        },
        {
          path:"/write",
          element:<Write/>
        }
      ]
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/login",
      element:<Login/>
    }
  ]);

  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App