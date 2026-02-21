import { useEffect, useState } from "react"
import { personajesAll } from "../helpers/PeticionAPI_Personajes"
import female from "../assets/img/female/siluetaFemale.png"
import male from "../assets/img/male/Rick_Sanchez.webp"

export default function Personajes() {
  const [personajesListados, setPersonajes] = useState([])
  const [cargando, setCargando] = useState(true)
  const [paginaActual, setPaginaActual] = useState(1)
  const [mujer, setMujer] = useState(false)
  const [hombre, setHombre] = useState(false)
  const [filtro, setFiltro] = useState("")
  const breakPoint = "w-80 md:w-60 lg:w-35 h-15 lg:h-45 2xl:h-55"
  const breakPoint_clear = "w-80 md:w-60 lg:w-35 h-15"

  const personajesPorSeccion = 8
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await personajesAll()
        setPersonajes(data)
      } catch (error) {
        console.error("Error interdimensional:", error)
      } finally {
        setCargando(false)
      }
    }
    obtenerDatos()
  }, [])

  const ultimoIndice = paginaActual * personajesPorSeccion
  const primerIndice = ultimoIndice - personajesPorSeccion
  const listaFiltrada = personajesListados.filter((pj) => {
    const coincideNombre = pj.name.toLowerCase().includes(filtro.toLowerCase());
    const coincideGenero = mujer ? pj.gender === "Female" : hombre ? pj.gender === "Male" : true;
    return coincideNombre && coincideGenero;
  });
  const totalPaginas = Math.ceil(listaFiltrada.length / personajesPorSeccion);
  const personajesVisibles = listaFiltrada.slice(primerIndice, ultimoIndice)

  useEffect(() => {
    setPaginaActual(1);
  }, [filtro, mujer, hombre]);


  const siguienteSeccion = () => {
    if (ultimoIndice < personajesListados.length) setPaginaActual(paginaActual + 1)
  }

  const anteriorSeccion = () => {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1)
  }

  const cambioGenero = (genero) => {
    if (genero === "mujer") {
      setMujer(true)
      setHombre(false)
    }
    if (genero === "hombre") {
      setHombre(true)
      setMujer(false)
    }
  }
  const clear = () => {
    setHombre(false)
    setMujer(false)
  }

  return (
    <div className="pt-24 min-h-screen w-full flex flex-col gap-10 justify-start items-center text-white px-8 pb-10">
      <h1 className="text-4xl lg:mt-10 rick-medium text-shadow-lg text-shadow-green-600 text-transparent">
        Personajes
      </h1>
      
      <input 
        type="text" 
        placeholder="Buscar personaje" 
        onChange={(e) => setFiltro(e.target.value)} 
        className="
          w-full flex py-1 lg:py-2 px-5 lg:px-10 border-2 
          lg:text-xl puppins-medium font-normal
          border-green-700 text-white 
          outline-none
          lg:rounded-2xl rounded-md bg-green-700/20
        hover:bg-green-700 lg:mb-0 -mb-5
          transition-all duration-300 ease-in-out"
      />

      <div className="w-full max-w-7xl flex flex-col gap-8 items-center">
        
        {cargando ? (
          <div className="flex justify-center items-center h-64">
            <p className="animate-pulse text-2xl text-blue-400">Abriendo portal...</p>
          </div>
        ) : (
          <>
            {/* Contenedor con llaves decorativas */}
            <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-4">
              <div className="flex w-full lg:w-auto flex-row lg:flex-col gap-5 md:gap-5 h-full lg:mr-5 justify-center lg:justify-bwtween items-center">
                <div 
                  onClick={clear}
                  className={`${breakPoint_clear} flex justify-center font-bold items-center rounded-2xl cursor-pointer transition-all duration-300 ease-in-out border-b-8 border-r-8 border-b-red-900 border-r-red-900 bg-red-800 hover:bg-red-700 hover:border-b-red-800 hover:border-r-red-800 hover:scale-95 `}
                >
                  Limpiar</div>
                <div
                  onClick={() => cambioGenero("mujer")}
                  className={`rounded-2xl cursor-pointer transition-all duration-300 ease-in-out border-b-8 border-r-8 border-b-gray-900 border-r-gray-900 bg-gray-800 hover:bg-gray-700 hover:border-b-gray-800 hover:border-r-gray-800 hover:scale-95 ${breakPoint} px-5 flex items-center justify-center`}
                >
                  <img src={female} alt="" className="h-10 lg:h-30 2xl:h-35 invert-50"/>
                </div>
                <div 
                  onClick={() => cambioGenero("hombre")}
                  className={`rounded-2xl cursor-pointer transition-all duration-300 ease-in-out border-b-8 border-r-8 border-b-gray-900 border-r-gray-900 bg-gray-800 hover:bg-gray-700 hover:border-b-gray-800 hover:border-r-gray-800 hover:scale-95 ${breakPoint} px-5 flex items-center justify-center`}
                >
                  <img src={male} alt="" className="h-10 lg:h-30 2xl:h-35 invert-50"/>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
                {personajesVisibles.map((pj) => (
                  <div key={pj.id} className="group bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-green-500 hover:scale-[1.02] transition-all duration-300">
                    <img src={pj.image} alt={pj.name} className="w-full h-auto grayscale-30 group-hover:grayscale-0 transition-all" />
                    <div className="p-4 bg-zinc-900">
                      <h3 className="font-bold text-lg text-green-400 truncate">{pj.name}</h3>
                      <p className="text-sm text-zinc-400 truncate">{pj.species} - {pj.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-6 lg:mt-4 px-5">
              <button 
                onClick={anteriorSeccion}
                disabled={paginaActual === 1}
                className="px-2 py-1 text-ms lg:text-xl lg:px-6 lg:py-2 rounded-full cursor-pointer border border-purple-500 bg-purple-500 text-white hover:scale-105 disabled:opacity-30 disabled:hover:bg-transparent transition-all font-light lg:font-bold"
              >
                Anterior
              </button>
              
              <span className="text-xl lg:text-5xl rick-medium font-extrabold text-green-500">
                {paginaActual} / {totalPaginas}
              </span>

              <button 
                onClick={siguienteSeccion}
                disabled={ultimoIndice >= personajesListados.length}
                className="px-2 py-1 text-ms lg:text-xl lg:lg-6 lg:py-2 rounded-full cursor-pointer border border-green-500 bg-green-500 text-white hover:scale-105 disabled:opacity-30 disabled:hover:bg-transparent transition-all font-light lg:font-bold"
              >
                Siguiente
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
