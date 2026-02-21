import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Picture from './assets/img/rick-morty.png'
import Fondo from './assets/img/fondo.jpg'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Inicio from './pages/Inicio'
import CatalogoPersonajes from './pages/CatalogoPersonajes'
import CatalogoEpisode from './pages/CatalogoEpisode'
import CatalogoLocation from './pages/CatalogoLocation'
import AcercaDe from './pages/AcercaDe'

const App = () => {
  return (
    <Router>
      <div 
        className=' min-h-screen flex flex-col items-center justify-center'
        style={{
          backgroundImage: `url(${Fondo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className='w-full md:w-2/3 flex flex-col items-center justify-center'>
          <NavBar />
          
          {/* Aquí defines qué se renderiza según la URL */}
          <Routes>
            <Route path="/" element={<Inicio Picture={Picture} />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
            <Route path="/episodios" element={<CatalogoEpisode />} />
            <Route path="/personajes">
              <Route index element={<Hero Picture={Picture} />} />
              <Route path="catalogo-personajes" element={<CatalogoPersonajes />} />
            </Route>
            <Route path="/locaciones" element={<CatalogoLocation />} />
          </Routes>
        </div>
      </div>
      
    </Router>
  )
}

export default App
