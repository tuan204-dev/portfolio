import { FC, memo } from 'react'
import { ProjectItem as ProjectItemProps } from '../constants'
import { motion } from 'framer-motion'

const ProjectItem: FC<ProjectItemProps> = ({ name, desc, thumb, repo, deploy }) => {
  return (
    <motion.a
      initial={{ translateY: 100, opacity: 0 }}
      whileInView={{ translateY: 0 , opacity: 1}}
      transition={{ type: 'spring' }}
      target="_blank"
      href={deploy}
      className='col-span-1 mx-auto'
    >
      <div className="h-[30rem] max-w-[calc(100vw-24px)] w-[33rem] flex flex-col flex-1 overflow-hidden rounded-3xl shadow-lg bg-[#efefef] dark:bg-[#2c2c2c] hover:scale-[1.03] duration-[100ms] transition-transform ease-linear">
        <div className="h-[20rem] overflow-hidden">
          <img
            src={thumb}
            alt={name}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="p-5 flex flex-col justify-between h-[12rem]">
          <div className="flex flex-col gap-2 ">
            <h3 className="text-[#3c4043] dark:text-white text-2xl font-bold">{name}</h3>
            <span className="text-[#5f6368] dark:text-[#bdc1c6]">{desc}</span>
          </div>
          <a
            className="flex items-center justify-center px-3 py-2 font-semibold text-white bg-blue-500 rounded-md cursor-pointer w-fit text-md"
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

export default memo(ProjectItem)
