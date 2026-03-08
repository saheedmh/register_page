import { useState } from 'react'

import {  Route,  Routes   } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'
import SignUp from './register'
import Home from './Home'
import Forgotpassword from './forgotpasword';
import ResetPassword from './resetPassword'
import Dashboard from './Dashboard'
function App() {
  

  return (
      <div className=''>
      
     
       <Routes>
      <Route path='/' element={<SignUp/>}/>
<Route path='Home' element={<Home/>}/>
<Route path='Login' element={<Login/>}/>
<Route path='resetPassword/:token' element={<ResetPassword/>}/>

<Route path='forgotpasword' element={<Forgotpassword/>}/>
<Route path='Dashboard' element={<Dashboard/>}/>

</Routes>
     
      
      
      
      
        </div>
    
  )
}

export default App
