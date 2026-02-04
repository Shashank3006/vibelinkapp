import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { appStore } from './redux/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import { Provider } from 'react-redux'
import ProfileScreen from './components/ProfileScreen.jsx'


const router=createBrowserRouter([{
  path: "/",
  element:<App/>,
  children: [
    {
      index: true,
      element:<Login/>,
    },{
      path:"/UserProfile",
      element:<ProfileScreen></ProfileScreen>
    }
  ]
  
}])

createRoot(document.getElementById('root')).render(
<Provider store={appStore}>
    
    <RouterProvider router={router} / >  
   
    </Provider>
    
)
