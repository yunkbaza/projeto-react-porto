import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/routes/Error.tsx"
import AreaCliente from './components/routes/AreaCliente.tsx';
import App from './App.tsx'
import CriarConta from './components/routes/CriarConta.tsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "areacliente",
    element: <AreaCliente />,
  },
  {
    path: "criarconta",
    element: <CriarConta />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
