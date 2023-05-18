import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Services/Services";

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
            path:"/places",
            element:<Services></Services>
          }
        ]
    }
])

export default router;