import { useEffect, useState } from "react"
import { locacionesAll } from "../helpers/PeticionAPI_Locaciones"

export default function Locaciones() {
  const [locacionesListados, setLocaciones] = useState([])
  const [cargando, setCargando] = useState(true)
  const [paginaActual, setPaginaActual] = useState(1)
  const [filtro, setFiltro] = useState("")

  const locacionesPorSeccion = 4
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await locacionesAll()
        setLocaciones(data)
      } catch (error) {
        console.error("Error interdimensional:", error)
      } finally {
        setCargando(false)
      }
    }
    obtenerDatos()
  }, [])

  const ultimoIndice = paginaActual * locacionesPorSeccion
  const primerIndice = ultimoIndice - locacionesPorSeccion
  const listaFiltrada = locacionesListados.filter((pj) => {
    const coincideNombre = pj.name.toLowerCase().includes(filtro.toLowerCase());
    return coincideNombre;
  });

  const totalPaginas = Math.ceil(listaFiltrada.length / locacionesPorSeccion);
  const locacionesVisibles = listaFiltrada.slice(primerIndice, ultimoIndice)

  useEffect(() => {
    setPaginaActual(1);
  }, [filtro]);


  const siguienteSeccion = () => {
    if (ultimoIndice < locacionesListados.length) setPaginaActual(paginaActual + 1)
  }

  const anteriorSeccion = () => {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1)
  }

  return (
    <div className="pt-24 min-h-screen w-full flex flex-col gap-10 justify-start items-center text-white px-8 pb-10">
      <h1 className="text-4xl mt-10 rick-medium text-shadow-lg text-shadow-green-600 text-transparent">
        Locaciones
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
            <div className="flex flex-row w-full items-center justify-between gap-4">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
                {locacionesVisibles.map((loc) => (
                  <div key={loc.id} className="group bg-zinc-900/90 border border-zinc-800 p-6 rounded-xl hover:border-green-500 transition-all">
                    <div className="h-32 w-full bg-green-900/20 flex items-center justify-center rounded-lg mb-4">
                      <span className="text-4xl">🪐</span> {/* Icono en lugar de imagen inexistente */}
                    </div>
                    <h3 className="font-bold text-lg text-green-400">{loc.name}</h3>
                    <p className="text-sm text-zinc-400">{loc.type} — {loc.dimension}</p>
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
                disabled={paginaActual === totalPaginas}
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
