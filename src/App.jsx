import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Navbar from './componentes/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

  return (
      <div>
        
        <Navbar/>
        <ItemListContainer greeting={"Hola, Bienvenido a mi tienda de diarios y revistas"}/>
      </div>
  )
}

export default App
