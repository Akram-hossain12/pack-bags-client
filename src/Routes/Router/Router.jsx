import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Services/Services";
import Places from "../../pages/Places/Places";
import About from "../../pages/Home/About/About";
import Login from "../../pages/Login/Login";
import SginUp from "../../pages/SginUp/SginUp";
import Gallary from "../../pages/Home/Gallary/Gallary";
import PrivateRoute from "../PrivetRoute/PrivateRoute";
import Review from "../../pages/Reviwe/Review";
import ContactUs from "../../pages/Home/ContactUs/ContactUs";
import Blogger from "../../pages/Blogeer/Blogger";

const router = createBrowserRouter([

    {
        path:"/",
        element:<Main></Main>,
        children:[
          {
             path:'/',
             element:<Home></Home>
          },
          {
            path:"/services",
            element:<Services></Services>
          },
          {
            path:"/places",
            element:<PrivateRoute><Places></Places></PrivateRoute>
          },
          {
            path:"/about",
            element:<About></About>
          },
          {
            path:'/sginup',
            element:<SginUp></SginUp>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/gallary',
            element:<Gallary></Gallary>
          },
          {
            path:"/reviwe",
            element:<Review></Review>
          },
          {
            path:'/contact',
            element:<ContactUs></ContactUs>
          },
          {
            path:'/blogger',
            element:<Blogger></Blogger>
          }
        ]
    }
])

export default router;