import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from './components/AboutUs';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ContactUs from './components/ContactUs';
import ErrorMsg from './components/ErrorPage.jsx';
import Body from './components/Body.jsx';
import RestaurantMenu from './components/RestaurantMenu.jsx';
import Cart from './components/Cart.jsx';
//import Grocery from './components/Grocery.jsx';

const Grocery = lazy(()=>
  import('./components/Grocery.jsx')
);

const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
      path:"/",
      element:<Body />
    },
       {
      path:"/about",
      element: (<Suspense fallback={<h1>Loading...</h1>}><AboutUs /></Suspense>)
    },
    {
      path:"/contact",
      element: <ContactUs />
    },
    
    {
      path:"/grocery",
      element: (<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>),
    },
    {
      path:"/restaurants/:resid",
      element: <RestaurantMenu />
    },
    {
      path:"/cart",
      element: <Cart />
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

