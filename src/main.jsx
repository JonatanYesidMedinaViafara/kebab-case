import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Login from './assets/pages/login/Login';
import Home from './assets/pages/home/introduction/Home';
import Page404 from './assets/pages/page-404/Page404';
import Deforestation from './assets/pages/home/content/deforestation/deforestation';
import Management from './assets/pages/home/content/improper-waste-management/management';
import Biodiversity from './assets/pages/home/content/loss-of-biodiversity/biodiversity';
import Map from './assets/pages/home/map/map';
import We from './assets/pages/home/nosotros/we';
import Erosion from './assets/pages/home/content/soil-erosion/erosion';



const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> },
  { path: "/login",element: <Login />,},
  { path: "/Introduction",element: <Home />,},
  { path: "/Map",element: <Map />,},  
  { path: "/soil-erosion",element: <Erosion />,},
  { path: "/deforestation",element: <Deforestation />,},
  { path: "/management",element: <Management />,},
  { path: "/biodiversity",element: <Biodiversity />,},
  { path: "/we",element: <We />,},
  { path: "*", element: <Page404 /> },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
