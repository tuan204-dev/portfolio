import { FC } from 'react'
import { motion } from 'framer-motion'
import webDevImg from '../assets/imgs/webdev.svg'
import { TypeAnimation } from 'react-type-animation'

const Home: FC = () => {
  return (
    <div
      id="#"
      className="min-h-[calc(100vh-72px)] bg-light-cloud dark:bg-dark-cloud duration-150 bg-cover flex justify-center items-center mt-[72px]"
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-8 w-full gap-8 max-w-7xl">
        <div className="flex flex-col w-full md:w-1/2 gap-y-3 mt-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black dark:text-white drop-shadow-xl">
            Hi, I am Tuan Dang
          </h2>
          <div>
            <TypeAnimation
              sequence={['Front end Developer', 1000, 'Full stack Developer', 1000]}
              wrapper="span"
              cursor={false}
              repeat={Infinity}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-500 dark:text-blue-400"
            ></TypeAnimation>
          </div>
          <span className="text-black dark:text-white text-lg md:text-xl leading-7 drop-shadow-xl mt-2 text-start">
            I am a Front-End Developer. I am currently a student at the Posts and
            Telecommunications Institute of Technology (PTIT), focusing on web
            development.
          </span>
          <button className="text-white w-full md:w-28 mt-6 bg-blue-500 rounded-md cursor-pointer text-md font-semibold py-2 px-3 transition-colors">
            Resume
          </button>
        </div>
        <div className="w-full md:w-1/2 ">
          <motion.img
            initial={{ translateY: -100 }}
            whileInView={{ translateY: 0 }}
            transition={{ type: 'spring' }}
            src={webDevImg}
            alt="Web Dev"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
