import { Link } from 'react-router-dom'
import { sliceUp } from '../assets/utility/animation'
import { motion } from 'framer-motion'

const Login = ({ Picture }) => {
  return (
    <div className='relative h-150 lg:min-h-screen w-full flex flex-col items-center justify-center overflow-hidden'>

      <div className='relative mt-5 lg:mt-0 z-10 flex flex-col items-center justify-center w-full px-4'>
        
        <motion.img 
          src={Picture} 
          alt="Personaje del sitio"
          variants={sliceUp(0.5)}
          initial="initial"
          animate="animate"
          className="
          lg:h-90 h-60 w-auto lg:-mb-10 -mb-6
          /* Máscara de desvanecimiento vertical */
          mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]
        "
        />

        <p className='
          rick-medium lg:text-[5rem] text-5xl 
          text-shadow-lg text-shadow-green-600
          text-purple-700 hover:text-white
          text-center z-10 
          transition-all duration-500 ease-in-out
        '>
          Rick and Morty
        </p>

        <Link
          to="catalogo-personajes"
          className='
            absolute top-full
            rounded-full bg-gray-600 
            text-white lg:py-3 lg:px-8
            py-2 px-6 mt-10 
            hover:scale-110 
            lg:text-2xl text-sm font-bold
            hover:bg-white/50 hover:text-purple-600
            transition-all duration-500 ease-in-out
            shadow-lg hover:shadow-purple-500/50
          '
        >
          Revelar Personajes
        </Link>
      </div>
    </div>
  )
}

export default Login
