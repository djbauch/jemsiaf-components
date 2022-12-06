import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  LoaderFunction,
  ActionFunction,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route
    path="/"
    element={<App />}
    >

    </Route>
  ])
)
const root = ReactDOM.createRoot(
  document.getElementById('root')
)
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
