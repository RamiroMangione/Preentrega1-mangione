import './App.css'
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Navbar from './componentes/NavBar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoria' element={<ItemListContainer />}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
