import React, { useEffect } from 'react'

import { createBrowserRouter , RouterProvider, Outlet } from "react-router";
import AgeCalculator from './AgeCalculator';




const Body = () => {
  const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AgeCalculator/>,
    
    },
   

]);

  return (
    <div>

      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
