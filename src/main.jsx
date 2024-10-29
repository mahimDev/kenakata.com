import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Page/Home/Home'
import About from './Page/About/About'
import Shopping from './Page/Shopping/Shopping'
import ShoppingCards from './Components/ShoppingCards/ShoppingCards'
import CardDetails from './Components/CardDetails/CardDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/shopping',
        element: <Shopping></Shopping>,
        loader: () => fetch('https://fakestoreapi.com/products'),

      },
      {
        path: '/shopping/:id',
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => fetch(`https://fakestoreapi.com/products/${params.id}`),

      },
      {
        path: '/about',
        element: <About></About>
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
