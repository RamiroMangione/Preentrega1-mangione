import './App.css'
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Navbar from './componentes/NavBar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Checkout/Checkout'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
function App() {

  return (
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
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
