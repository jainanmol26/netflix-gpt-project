import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Login></Login>
  },
  {
    path:"/browse",
    element: <Browse></Browse>
  }
])
const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body;