import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import MoviePage from './components/MoviePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
        path: "/movies/:id",
        element: <MoviePage />,
      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

