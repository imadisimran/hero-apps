import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import { Suspense } from "react";
import AppDetails from "../Pages/Apps/AppDetails/AppDetails";

const appsDataPromise = fetch('/appData.json').then(response => response.json());

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            element:<Suspense fallback={<h1 className="font-bold text-7xl">Data is loading</h1>}>
              <Home appsDataPromise={appsDataPromise}></Home>
            </Suspense>
        },
        {
            path:'apps',
            element:<Suspense fallback={<h1 className="font-bold text-7xl">Data is loading</h1>}>
              <Apps appsDataPromise={appsDataPromise}></Apps>
            </Suspense>
        },
        {
            path:'installation',
            Component:Installation
        },
        {
          path:'app/:appId',
          element: <Suspense fallback={<h1 className="font-bold text-7xl">Data is loading</h1>}>
              <AppDetails appsDataPromise={appsDataPromise}></AppDetails>
            </Suspense>
        }
    ]
  },
]);