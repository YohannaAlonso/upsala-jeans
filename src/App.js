import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './componentes/navegacion/NavBar';
import Inicio from './componentes/paginas/Inicio';
import Hombre from './componentes/paginas/Hombre';
import Mujer from './componentes/paginas/Mujer';



function App() {
  return (
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Hombre' element={<Hombre />} />
        <Route path='/Mujer' element={<Mujer />} />

      </Routes>
    </Router>

  );
}

export default App;
