import { createBrowserRouter, redirect } from 'react-router-dom'
import App from '../App'
import About from '../pages/About/About'

import Auth from '../pages/Auth/Auth'
import Home from '../pages/Home/Home'
import Resource from '../pages/Resource/Resource'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Auth />
  },
  {
    path: '/',
    element: <App />,
    loader: () => {
      if (!localStorage.getItem('token')) {
        return redirect('/')
      } else {
        return null
      }
    },
    children: [
      { path: '/home', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/resource/:resourceName', element: <Resource /> }
    ]
  }
])

export default appRouter
