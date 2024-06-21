import ReactDOM from 'react-dom/client';

import Home from './views/Home/home';



import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "*",
    element: <h1>ERROR</h1>
  }
])

root.render(<RouterProvider router={router} />)