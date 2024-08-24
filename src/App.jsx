import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Checkout/Checkout'
import { CartProvider } from './context/CartContext'

import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  
  return (
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <ToastContainer/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoria' element={<ItemListContainer />}/>
            <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </CartProvider> 
      </BrowserRouter>
  )
}

export default App
