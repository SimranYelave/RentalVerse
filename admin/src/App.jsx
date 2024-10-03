import React from 'react'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/add/add'
import List from '../src/pages/list/list'
import Order from '../src/pages/orders/order'


const App = () =>{
  try{
return(
  <div>
    <Navbar/>
    <hr/>
    <div className="app-content">
      <Sidebar/>
      <Routes>
        <Route path="/add" element={<Add />}/>
        <Route path="/list" element={<List />}/>
        <Route path="/order" element={<Order />}/>
      </Routes>
    </div>
  </div>
)  
  }
catch(error){
 console.log(error)
}
}

export default App