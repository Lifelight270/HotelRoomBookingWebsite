import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Content from "./Mainbody/Content";
import FooterSec from "./FooterSec/FooterSec";
import { Home, About, Room, LogIn, Signup } from "./component";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Content />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "room",
        element: <Room />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <FooterSec />
    </div>
  );
}

export default App;
