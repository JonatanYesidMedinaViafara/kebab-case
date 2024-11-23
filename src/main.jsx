import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from './assets/Pages/Login/Login';
import Home from './assets/Pages/Home/Introduction/Home';
import Page404 from './assets/Pages/page-404/Page404';
import Deforestation from './assets/Pages/Home/content/Deforestation/deforestation';
import Management from './assets/Pages/Home/content/improper-waste-management/management';
import Biodiversity from './assets/Pages/Home/content/loss-of-biodiversity/biodiversity';
import Map from './assets/Paages/Home/Map/map';
import We from './assets/Pages/Home/nosotros/we';
import Erosion from './assets/Pages/Home/content/soil-erosion/erosion';



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
