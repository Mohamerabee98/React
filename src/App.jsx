
import "./App.css";

import Layout from "./Component/Layout";
import Contact from "./Component/Contact";
import Potfolio from "./Component/Potfolio";
import NotFound from "./Component/NotFound";
import About from "./Component/About";
import Home from "./Component/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/portfolio", element: <Potfolio></Potfolio> },
        { path: "/contact", element: <Contact></Contact> },
        { path: "*", element: <NotFound></NotFound> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
