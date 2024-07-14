import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from './components/AboutUs';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ContactUs from './components/ContactUs';
import ErrorMsg from './components/ErrorPage.jsx';
import Body from './components/Body.jsx';

const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[{
      path:"/",
      element:<Body />
    },
       {
      path:"/about",
      element: <AboutUs />
    },
    {
      path:"/contact",
      element: <ContactUs />
    }

    ],
    errorElement : <ErrorMsg />
  },
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

