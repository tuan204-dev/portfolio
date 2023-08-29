import { FC } from 'react'
import { tools } from '../constants/index'
import { motion } from 'framer-motion'

const About: FC = () => {
  return (
    <div id="about" className="w-full flex justify-center bg-white dark:bg-gray-800 duration-150">
      <div className="w-[min(80rem,100%)] px-6 md:px-8 pt-24 pb-12 flex flex-col justify-center items-center">
        <motion.h2
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ type: 'spring' }}
          className="text-black dark:text-white text-5xl font-bold"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ type: 'spring' }}
          className="flex flex-col mt-12"
        >
          <h3 className="text-3xl font-semibold text-blue-500">A bit about me</h3>
          <span className="mt-6 text-xl text-gray-500 dark:text-white text-start">
            Hello everyone! I'm Tuan Dang, hailing from Hanoi. About two years ago, I
            embarked on a thrilling journey into programming, and it's become an integral
            part of my life. Driven by curiosity for technology, I ventured into coding.
            Now, I'm focused on JavaScript and TypeScript. Personal projects have honed my
            skills and given me a sense of accomplishment. While I'm proud of solo
            projects, I'm eager to collaborate on group endeavors. I'm passionate about
            web development, crafting interactive, user-centered websites that tackle
            real-world problems.
          </span>
        </motion.div>

        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ type: 'spring' }}
          className="flex flex-col mt-12"
        >
          <h3 className="text-3xl font-semibold text-blue-500 ">
            Technologies and Tools
          </h3>
          <span className="mt-6 text-xl text-gray-500 dark:text-white text-start">
            Using a combination of cutting-edge technologies and reliable open-source
            software I build user-focused, performant apps and websites for smartphones,
            tablets, and desktops.
          </span>
        </motion.div>
        <div className="flex flex-row flex-wrap justify-around mt-8">
          {tools?.map((item) => (
            <motion.div
              initial={{ translateY: 100, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ type: 'spring' }}
              // viewport={{ once: true }}
              className="w-52 flex flex-row items-center px-4 py-2 m-4 bg-gray-100 dark:bg-slate-50 rounded-lg shadow-sm"
              key={item?.name}
            >
              <div className="w-12 h-12">
                <img
                  className="object-contain w-full h-full"
                  src={item?.icon}
                  alt={item?.name}
                />
              </div>
              <div className="ml-3">
                <span className="text-md">{item?.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
