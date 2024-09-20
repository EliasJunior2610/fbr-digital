import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './components/Registro/Registro.tsx'
import Login from './components/Login/Login.tsx'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div><h1>Tem que criar uma página pro 404!</h1></div>
  },
  {
    path: '/registro',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {rotas} />
  </StrictMode>,
)
