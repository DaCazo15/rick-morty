import { useEffect, useState } from "react";
import { episodiosAll } from "../helpers/PeticionAPI_Episodios";
import rick from "../assets/img/male/siluetaRick.png";

export default function Episodios() {
  const [episodiosListados, setEpisodios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [filtro, setFiltro] = useState("01"); 
  const [temporada, setTemporada] = useState('01');

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await episodiosAll();
        setEpisodios(data);
      } catch (error) {
        console.error("Error interdimensional:", error);
      } finally {
        setCargando(false);
      }
    };
    obtenerDatos();
  }, []);

  const listaTemporadas = [...new Set(episodiosListados.map(ep => 
    ep.episode.split('S')[1].split('E')[0]
  ))].sort();

  const listaFiltrada = episodiosListados.filter(epi => 
    epi.episode.includes(`S${filtro}`)
  );

  return (
    <div className="pt-24 w-full flex flex-col gap-10 justify-start items-center text-white px-4 lg:px-8 pb-10">
      
      <h1 className="text-4xl lg:mt-10 rick-medium text-shadow-lg text-shadow-green-600 text-transparent">
        Episodios
      </h1>

      <div className="w-full max-w-7xl flex flex-col gap-12">
        {cargando ? (
          <div className="flex justify-center items-center h-64">
            <p className="animate-pulse text-2xl text-green-400 rick-medium">Abriendo portal...</p>
          </div>
        ) : (
          <>
            {/* Panel de Control (Glassmorphism) */}
            <div className="relative flex flex-col lg:flex-row w-full rounded-4xl bg-black/20 backdrop-blur-xl border border-white/10 p-6 lg:p-10 shadow-2xl items-center gap-10 overflow-hidden">
              
              {/* Glow decorativo interno */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full"></div>

              {/* Lado Izquierdo: Info Temporada */}
              <div className="flex flex-col items-center gap-4 z-10 min-w-62.5">
                <div className="relative group">
                  <img src={rick} alt="Rick Silhouette" className="relative h-64 w-auto invert drop-shadow-green-600 drop-shadow-2xl" />
                </div>
                <div className="text-center">
                  <p className="text-3xl rick-medium text-shadow-lg text-shadow-green-600 text-transparent">{`Temporada ${temporada}`}</p>
                </div>
              </div>

              {/* Divisor Vertical (Solo en Desktop) */}
              <div className="hidden lg:block w-px h-64 bg-linear-to-b from-transparent via-green-500/50 to-transparent"></div>

              {/* Lado Derecho: Selector de Temporadas */}
              <div className="flex-1 w-full flex flex-col gap-6 z-10">
                <h3 className="text-xl poppins-light text-white/70 text-center lg:text-left">Viajar a la temporada:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {listaTemporadas.map((temp) => (
                    <button 
                      key={temp}
                      onClick={() => {setFiltro(temp); setTemporada(temp)}}
                      className={`
                        relative py-4 rounded-xl font-bold transition-all duration-300
                        border-b-4 border-r-4 active:border-b-0 active:border-r-0 active:translate-y-1
                        ${filtro === temp 
                          ? 'bg-green-600 border-green-900 text-white scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)]' 
                          : 'bg-zinc-800/50 border-zinc-950 text-white/60 hover:bg-zinc-700 hover:text-white'}
                      `}
                    >
                      {temp}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid de Episodios Estilo "Cards" modernas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {listaFiltrada.map((epi) => (
                <div 
                  key={epi.id} 
                  className="group relative bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 shadow-xl"
                >
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-bold text-green-500 tracking-tighter uppercase px-2 py-1 bg-green-500/10 rounded w-fit">
                      {epi.episode}
                    </span>
                    <h3 className="font-bold text-xl text-white group-hover:text-green-400 transition-colors line-clamp-2 min-h-14">
                      {epi.name}
                    </h3>
                    <div className="h-px w-full bg-white/5 group-hover:bg-green-500/20 transition-colors"></div>
                    <p className="text-sm text-green-500 flex items-center gap-2">
                      <span className="w-2 h-2 bg-zinc-700 rounded-full"></span>
                      Lanzamiento: {epi.air_date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
