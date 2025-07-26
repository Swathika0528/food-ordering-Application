import { createBrowserRouter,Outlet, RouterProvider } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Body from "./components/body.jsx";
import About from"./components/About.jsx";
import Contact from"./components/Contact.jsx";


function App()
{
    function AppLayout()
    {
        return(<div>
            <Navbar/>
            <Outlet/>
        </div>)
    }


    let a=createBrowserRouter([
     {
        path:"/",
        element: <AppLayout/>,
        children:[
        {
            path:"/",
            element: <Body/>
        },
        {
            path:"/About",
            element: <About/>
        },
        {
            path:"/Contact",
            element: <Contact/>
        }

        ]
      
    }
])
    


    return <div>
        <RouterProvider router={a}></RouterProvider>
    </div>
}
export default App;