import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FicheLogement from './pages/FicheLogement'
import Error404 from './pages/Error404'
import Layout from './Layout'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/fiche-logement',
        element: <FicheLogement />,
      },
    ],
  },
  {
    path: '*',
    element: <Error404 />,
  },
])

export default routes
