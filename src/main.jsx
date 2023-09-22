import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainUi from './MainUi'
import Home from './component/pages/home/Home'
import Detail from './component/pages/home/Detail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainUi></MainUi>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/detail/:id',
        element: <Detail></Detail>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: '/applied',
        element: <div>this is applied job </div>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
