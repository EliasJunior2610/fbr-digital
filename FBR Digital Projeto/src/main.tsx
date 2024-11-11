import MyService from "./components/MyService/MyService.tsx";
import Report from "./components/Report/Report.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register/Register.tsx";
import Login from "./components/Login/Login.tsx";
import Forget from "./components/Forget/Forget.tsx";
import Error404 from "./components/Error404/Error404.tsx";
import ServiceRequest from "./components/ServiceRequest/ServiceRequest.tsx";
import NewPlan from "./components/NewPlan/NewPlan.tsx";
import NewService from "./components/NewService/NewService.tsx";
import MyRequest from "./components/MyRequest/MyRequest.tsx";
import InternetProvider from "./components/InternetProvider/InternetProvider.tsx";
import MainScreen from "./components/MainScreen/MainScreen.tsx";
import Carrosel from "./components/MainScreen/Carrossel/Carrossel.tsx";
import MainProvider from "./components/MainScreenProvider/MainScreenProvider.tsx";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <MainScreen />,
    errorElement: <Error404 />,
  },
  {
    path: "/registro",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/esqueceu",
    element: <Forget />,
  },
  {
    path: "/solicitacao",
    element: <ServiceRequest />,
  },
  {
    path: "/minhas-solicitacoes",
    element: <MyRequest />,
  },
  {
    path: "/meus-servicos",
    element: <MyService />,
  },
  {
    path: "/novo-plano",
    element: <NewPlan />,
  },
  {
    path: "/novo-servico",
    element: <NewService />,
  },
  {
    path: "/internet-provedor",
    element: <InternetProvider />,
  },
  {
    path: "/relatorio",
    element: <Report />,
  },
  {
    path: "/carrosel",
    element: <Carrosel />,
  },
  {
    path: "/provedor",
    element: <MainProvider />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);
