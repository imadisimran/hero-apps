import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import { Suspense } from "react";
import AppDetails from "../Pages/Apps/AppDetails/AppDetails";
import AppError from "../Pages/AppError/AppError";
import PageError from "../Pages/PageError/PageError";

const appsDataPromise = fetch('/appData.json').then(response => response.json());

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component:Home,
        loader:()=>fetch('/appData.json'),
      },
      {
        path: 'apps',
        Component: Apps,
        loader:()=>fetch('/appData.json'), 
      },
      {
        path: 'installation',
        element: <Suspense fallback={<h1 className="font-bold text-7xl">Data is loading</h1>}>
          <Installation appsDataPromise={appsDataPromise}></Installation>
        </Suspense>
      },
      {
        path: 'app/:appId',
        element: <Suspense fallback={<h1 className="font-bold text-7xl">Data is loading</h1>}>
          <AppDetails appsDataPromise={appsDataPromise}></AppDetails>
        </Suspense>,
        errorElement: <AppError></AppError>
      },
      {
        path: '/*',
        element: <PageError/>
      }
    ]
  },

]);