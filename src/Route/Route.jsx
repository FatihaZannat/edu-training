import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Registation from "../Pages/Registation/Registation";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";
import Details from "../Component/Services/Details/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path:'/register',
          element: <Registation></Registation>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path: '/service',
          element: <Services></Services>,
          loader: ()=>fetch('data.json')
        },
        {
          path: '/service/detail/:id',
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: () => fetch('data.json')
        }

      ]
    },
  ]);
export default router;