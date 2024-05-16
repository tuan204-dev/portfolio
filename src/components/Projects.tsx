import { FC, memo } from 'react'
import ProjectItem from './ProjectItem'
import { motion } from 'framer-motion'
import { SECTIONS } from '../types/section'
import { useInViewSection } from '../context/ScrollProvider'
import { projects } from '../constants'

const Projects: FC = () => {
  const ref = useInViewSection(SECTIONS.PROJECTS)

  return (
    <div
      id="projects"
      ref={ref}
      className="flex justify-center w-full duration-150 bg-gray-100 dark:bg-slate-700"
    >
      <div className="w-[min(80rem,100%)] px-4 md:px-8 pt-24 pb-12 flex flex-col">
        <motion.h2
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ type: 'spring' }}
          className="text-5xl font-bold text-center text-black dark:text-white"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-20 mt-20 mb-5 xl:grid-cols-2">
          {projects.map((item, index) => (
            <ProjectItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(Projects)
