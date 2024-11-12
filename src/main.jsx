import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from './Assets/Pages/Login/Login';
import Home from './Assets/Pages/Home/Introduction/Home';
import Page404 from './Assets/Pages/page-404/Page404';
import Deforestation from './Assets/Pages/Home/content/Deforestation/deforestation';
import Management from './Assets/Pages/Home/content/improper-waste-management/management';
import Biodiversity from './Assets/Pages/Home/content/loss-of-biodiversity/biodiversity';
import Map from './Assets/Pages/Home/Map/map';
import We from './Assets/Pages/Home/nosotros/we';
import Erosion from './Assets/Pages/Home/content/soil-erosion/erosion';



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
