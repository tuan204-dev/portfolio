import { FC } from 'react'
import { ProjectItem as ProjectItemProps } from './Projects'
import { motion } from 'framer-motion'

const ProjectItem: FC<ProjectItemProps> = ({ name, desc, thumb, repo, deploy }) => {
  return (
    <motion.a
      initial={{ translateY: 100 }}
      whileInView={{ translateY: 0 }}
      transition={{ type: 'spring' }}
      target="_blank"
      href={deploy}
    >
      <div className="h-[30rem] max-w-[calc(100vw-24px)] w-[33rem] flex flex-col flex-1 overflow-hidden rounded-3xl shadow-xl bg-[#efefef] dark:bg-[#252629]">
        <div className="h-[20rem] overflow-hidden">
          <img
            src={thumb}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-5 flex flex-col justify-between h-[12rem]">
          <div className="flex flex-col gap-2 ">
            <h3 className="text-[#3c4043] dark:text-white text-2xl font-bold">{name}</h3>
            <span className="text-[#5f6368] dark:text-[#bdc1c6]">{desc}</span>
          </div>
          <a
            className="flex justify-center items-center w-fit text-white bg-blue-500 rounded-md cursor-pointer text-md font-semibold py-2 px-3"
            target="_blank"
            href={repo}
          >
            Read more
          </a>
        </div>
      </div>
    </motion.a>
  )
}

export default ProjectItem
