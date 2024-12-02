import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import LoginTemplate from "../pages/LoginTemplate";
import MainTemplate from "../pages/MainTemplate";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import LineChart from "../pages/LineChart";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LoginTemplate />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
    {
      path: "/",
      element: <MainTemplate />,
      children: [
        {
          path: "",
          element: <Navigate to="/login" />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "home/detail",
          element: <Detail />,
        },
        {
          path: "home/detail/chart",
          element: <LineChart />,
        },
      ],
    },
    {
      path: "*",
      element: <>404</>,
    },
  ],
  {
    basename: "/",
  }
);
