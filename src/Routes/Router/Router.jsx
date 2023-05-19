import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Services/Services";
import Places from "../../pages/Places/Places";
import About from "../../pages/Home/About/About";

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
            
            element:<Places></Places>
          },
          {
            path:"/about",
            element:<About></About>
          }
        ]
    }
])

export default router;