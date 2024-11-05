import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./assets/login/Login.jsx";
import Quiz from "./assets/pages/quiz/Quiz.jsx";
import Home from "./assets/pages/home/Home.jsx";
import Page404 from "./assets/pages/page-404/Page404.jsx";
import Erosion from "./assets/pages/earth/soil-erosion/erosion.jsx";
import Management from "./assets/pages/earth/improper-waste-management/management.jsx";
import Map from "./assets/map/map.jsx";
import Biodiversity from "./assets/pages/earth/loss-of-biodiversity/biodiversity.jsx";
import Deforestation from "./assets/pages/earth/Deforestation/deforestation.jsx";
import RecyCling from "./assets/pages/modelos3D/scena3d/jsx/Recycling.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> },
  { path: "/login",element: <Login />,},
  { path: "/Quiz", element: <Quiz />,},
  { path: "/home", element: <Home /> },
  {path: "/soil-erosion", element: <Erosion/>},
  {path: "/management", element: <Management/>},
  { path: "/recycling", element: <RecyCling /> },
  { path: "/biodiversity", element: <Biodiversity /> },
  { path: "/deforestation", element: <Deforestation /> },
  { path: "*", element: <Page404 /> },
  { path: "/map", element: <Map /> },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)