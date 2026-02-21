export default function AcercaDe() {
  return (
    
    <div className='min-h-screen pb-10 lg:pt-30 2xl:pt-32 w-full flex flex-col items-center justify-center px-2 lg:p-2 overflow-x-hidden'>
      
      {/* Contenedor Principal con Glassmorphism */}
      <div className="relative w-full flex items-center gap-12 bg-black/20 backdrop-blur-xl rounded-4xl border border-white/10 p-4 lg:p-16 shadow-2xl">
        
        {/* Glow de fondo para dar profundidad */}
        <div
          className="
            absolute -top-20 -left-20 w-64 h-64 bg-green-500/20 blur-[100px] rounded-full
          "
        ></div>
        
        <div className='z-10 flex flex-col flex-1 gap-6'>
          {/* Título con Gradiente */}
          <h2 className='
            rick-medium text-2xl lg:text-5xl w-full
            bg-clip-text text-transparent bg-linear-to-r from-green-400 to-blue-500
            drop-shadow-[0_10px_10px_rgba(34,197,94,0.3)]
          '>
            Rick and Morty
          </h2>
          
          <div className="h-1 w-20 bg-green-500 rounded-full"></div>

          <p className="text-white/80 text-lg lg:text-xl leading-relaxed poppins-light text-pretty">
            Es una serie animada que sigue a un <span className="text-green-400 font-semibold">científico sociópata</span> y su nieto a través del espacio-tiempo. 
            Entre dimensiones paralelas y experimentos caóticos, la obra explora temas existencialistas con un humor negro punzante. 
            Es una mezcla brillante de ciencia ficción compleja y disfuncionalidad familiar extrema.
          </p>
          <p className="text-white/80 text-lg lg:text-xl leading-relaxed poppins-light text-pretty">
            Su narrativa desafía las convenciones del género mediante guiones ingeniosos que diseccionan la condición humana y la insignificancia del individuo en un multiverso infinito. 
            <span className="text-green-400 font-semibold">Visualmente impactante y conceptualmente audaz</span>, la serie se ha consolidado como un referente cultural que redefine los límites de la animación contemporánea y la sátira científica.
          </p>
        </div>

        {/* Sección del Video con Efecto de Enfoque */}
        <div className="relative hidden 2xl:flex group w-full lg:w-1/2  justify-center">
          {/* Marco decorativo "Portal" */}
          <div className="absolute -inset-1 bg-linear-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <iframe 
              className=" w-full h-full grayscale-50 group-hover:grayscale-0 transition-all duration-700"
              src="https://www.youtube-nocookie.com/embed/EcGAN6rKuOw?si=M0CnmMRPzrg_R4za&controls=0&start=5" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>

      {/* Badge de Tecnología (Opcional para tu portafolio) */}
      <div className=" hidden mt-12 lg:block gap-4 opacity-50 hover:opacity-100 transition-opacity rounded-2xl bg-black/5">
        <span className="px-4 py-1 border bg-black border-white/20 rounded-full text-lg text-white uppercase tracking-widest">React</span>
        <span className="px-4 py-1 border bg-black border-white/20 rounded-full text-lg text-white uppercase tracking-widest">Tailwind v4</span>
        <span className="px-4 py-1 border bg-black border-white/20 rounded-full text-lg text-white uppercase tracking-widest">Sci-Fi UI</span>
      </div>
    </div>
  );
};
