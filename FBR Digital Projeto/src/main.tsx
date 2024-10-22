import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './components/Register/Register.tsx'
import Login from './components/Login/Login.tsx'
import Forget from './components/Forget/Forget.tsx'
import Error404 from './components/Error404/Error404.tsx'
import ServiceRequest from './components/ServiceRequest/ServiceRequest.tsx'
import NewPlan from './components/NewPlan/NewPlan.tsx'
import NewService from './components/NewService/NewService.tsx'
import MyRequest from './components/MyRequest/MyRequest.tsx'
import InternetProvider from './components/InternetProvider/InternetProvider.tsx'

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: '/esqueceu',
    element: <Forget />
  },
  {
    path: '/solicitacao',
    element: <ServiceRequest />
  },
  {
    path: 'minhas-solicitacoes',
    element: <MyRequest />
  }, 
  {
    path: 'novo-plano',
    element: <NewPlan />
  },
  {
    path: 'novo-servico',
    element: <NewService />
  },
  {
    path: 'internet-provedor',
    element: <InternetProvider />
  }
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);
