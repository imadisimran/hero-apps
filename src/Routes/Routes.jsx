import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import { Suspense } from "react";
import AppDetails from "../Pages/Apps/AppDetails/AppDetails";
import AppError from "../Pages/AppError/AppError";
import PageError from "../Pages/PageError/PageError";

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
        Component: Installation,
        loader:()=>fetch('/appData.json'), 
      },
      {
        path: 'app/:appId',
        Component: AppDetails,
        loader:()=>fetch('/appData.json'), 
        errorElement: <AppError></AppError>
      },
      {
        path: '/*',
        element: <PageError/>
      }
    ]
  },

]);