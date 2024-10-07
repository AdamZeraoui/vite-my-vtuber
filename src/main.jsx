import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import HomePage from './HomePage.jsx';
import Chambre from "./Chambre.jsx"
import Agence from "./Agence.jsx"
import Profil from "./Profil.jsx"
import Chambre1 from "./Chambre-1.jsx"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element : <HomePage/>
      },
      {
        path:"/chambre",
        element : <Chambre/>
      },
      {
        path:"/agence",
        element : <Agence/>
      },
      {
        path:"/profil",
        element : <Profil/>
      },
      {
        path: "chambre/chambre-1",
        element : <Chambre1/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)