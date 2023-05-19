import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import AddAToys from "../pages/addAtoys/AddAToys";
import Alltoys from "../pages/allToys/Alltoys";
import Blogs from "../pages/blogs/Blogs";
import Home from "../pages/home/home/Home";
import Login from "../pages/logins/Login";
import SignUp from "../pages/logins/SignUp";
import MyToys from "../pages/myToys/MyToys";
import UpdateToy from "../pages/myToys/UpdateToy";
import ToyDetails from "../pages/toyDetails/ToyDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/alltoys",
        element: <Alltoys></Alltoys>,
      },
      {
        path: "/toydetails/:id",
        element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/toydetails/${params.id}`)
      },
      {
        path: "/mytoys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/addatoys",
        element: <AddAToys></AddAToys>,
      },
      {
        path: "/update/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({params}) => fetch(`http://localhost:5000/mytoys/${params.id}`)
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
