import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Error from './pages/Error.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Playlist from './pages/Playlist.jsx'
import Player from './pages/AudioPlayer.jsx'
import { store } from '../redux-toolkit/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/playlist',
        element: <Playlist/>
      },
      {
        path: '/player/:id',
        element: <Player/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
