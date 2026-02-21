import { Link } from 'react-router-dom'
import { useState } from 'react'
import { btn_nav } from "../helpers/OptionsNavBar"
import Imagen from "../assets/img/rick-morty.png"

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 h-auto w-full flex flex-row items-center justify-center z-50 shadow-md bg-black/50 backdrop-blur-sm">
      <div className="flex flex-row w-full md:w-2/3 px-5 py-3 justify-between items-center">

        <button
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen(!open)}
          className="2xl:hidden text-white text-3xl p-2 rounded-md hover:bg-white/10 transition-colors"
        >
          {open ? <i className="bi bi-x" /> : <i className="bi bi-list" />}
        </button>

        <Link to="/" className="flex flex-col items-center hover:scale-105 transition-all duration-300">
          <img src={Imagen} alt="Rick And Morty" className="lg:h-17 h-10 w-auto -mb-5 invert-50 mask-[linear-gradient(to_bottom,black_60%,transparent_100%)]" />
          <p className='rick-medium lg:text-2xl text-md text-green-700 invert-50'>
            Rick and Morty
          </p>
        </Link>

        <ul className="hidden 2xl:flex flex-row gap-5 items-center justify-center">
          {btn_nav.map((nav) => (
            <li key={nav.id}>
              <Link to={nav.url} className="relative font-semibold 
                    uppercase text-ms lg:text-xl
                    tracking-wider poppins-medium 
                    px-4
                    text-white
                    opacity-80 hover:opacity-100 
                    transition-all duration-300 
                    after:content-[''] after:absolute after:w-0 after:h-12 after:rounded-2xl hover:z-10
                    after:bg-transparent after:left-0 after:-top-2 hover:after:w-full
                    after:border-4 after:border-purple-500/30 hover:after:border-green-500
                    after:transition-all after:duration-500 after:ease-in-out">
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Overlay menú móvil */}
        {open && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black/80 z-40 2xl:hidden flex flex-col items-center justify-center gap-6 px-6">
            <ul className="flex flex-col gap-6 items-center w-full">
              {btn_nav.map((nav) => (
                <li key={nav.id} className="w-full">
                  <Link
                    to={nav.url}
                    onClick={() => setOpen(false)}
                    className="block w-full text-center text-2xl font-bold text-white py-4 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  )
}

export default NavBar
