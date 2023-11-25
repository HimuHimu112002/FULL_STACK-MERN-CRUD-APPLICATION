import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import OutlateComponents from './components/OutlateComponents.jsx';
import TodoCreate from './pages/TodoCreate.jsx';
import Home from './pages/Home.jsx';
import UpdateStudent from './pages/UpdateStudent.jsx';

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<OutlateComponents/>}>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/create" element={<TodoCreate/>}></Route>
      <Route path="/update" element={<UpdateStudent/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
