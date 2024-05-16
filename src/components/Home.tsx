import { FC, memo } from 'react'
import { motion } from 'framer-motion'
import webDevImg from '/assets/imgs/webdev.svg'
import { TypeAnimation } from 'react-type-animation'
import { useInViewSection } from '../context/ScrollProvider'
import { SECTIONS } from '../types/section'
// import CV from '/assets/CV/Dang-Anh-Tuan-CV.pdf'

const Home: FC = () => {
  const ref = useInViewSection(SECTIONS.HOME)

  return (
    <div
      ref={ref}
      id="home"
      className="h-[max(calc(100vh-72px),600px)] bg-light-cloud dark:bg-dark-cloud duration-150 bg-cover flex justify-center items-center mt-[72px]"
    >
      <div className="flex flex-col items-center justify-between w-full gap-8 px-8 md:flex-row max-w-7xl">
        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ type: 'tween' }}
          className="flex flex-col w-full mt-10 md:w-1/2 gap-y-3"
        >
          <h2 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl dark:text-white drop-shadow-xl">
            Hi, I am Tuan Dang
          </h2>
          <div>
            <TypeAnimation
              sequence={['Front end Developer', 1000, 'Full stack Developer', 1000]}
              wrapper="span"
              cursor={false}
              repeat={Infinity}
              className="text-3xl font-extrabold text-blue-500 sm:text-4xl md:text-5xl dark:text-blue-400"
            ></TypeAnimation>
          </div>
          <span className="mt-2 text-lg leading-7 text-black dark:text-white md:text-xl drop-shadow-xl text-start">
            I am a Front-End Developer. I am currently a student at the Posts and
            Telecommunications Institute of Technology (PTIT), focusing on web
            development.
          </span>
          <a
            download={'CV-DANG_ANH_TUAN.pdf'}
            // href={CV}
            href="/assets/CV/CV-DANG_ANH_TUAN.pdf"
            target="_blank"
            className="w-full px-3 py-2 mt-6 font-semibold text-center text-white transition-colors bg-blue-500 rounded-md cursor-pointer md:w-28 text-md"
          >
            Resume
          </a>
        </motion.div>
        <div className="w-full md:w-1/2 ">
          <motion.img
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ type: 'tween' }}
            src={webDevImg}
            alt="Web Dev"
          />
        </div>
      </div>
    </div>
  )
}

export default memo(Home)
