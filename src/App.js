import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './componentes/navegacion/NavBar';
import Inicio from './componentes/paginas/Inicio';
//import Hombre from './componentes/paginas/Hombre';
//import Mujer from './componentes/paginas/Mujer';




function App() {
  return (
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Inicio saludo1="dar click en hombre o mujer" />} />
        <Route path='/Hombre' element={<Inicio saludo1="item list container hombre" />} />
        <Route path='/Mujer' element={<Inicio saludo1="item list container mujer" />} />

      </Routes>
    </Router>

  );
}

export default App;
