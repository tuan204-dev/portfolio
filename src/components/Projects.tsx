import { FC } from 'react'
import spotifyIcon from '../assets/imgs/projects/spotify.png'
import fitnessIcon from '../assets/imgs/projects/fitness.png'
import ProjectItem from './ProjectItem'
import {motion} from 'framer-motion'
export interface ProjectItem {
  thumb: string
  name: string
  desc: string
  repo: string
  deploy: string
}

const projects: ProjectItem[] = [
  {
    name: 'Spotify Clone',
    desc: 'Spotify clone with Vite - React - TS . Using Spotify API, Rapid API and Youtube API.',
    thumb: spotifyIcon,
    repo: 'https://github.com/tuan204-dev/spotify-react-typescript',
    deploy: 'https://spotify-clone-204.netlify.app/',
  },
  {
    name: 'Fitness Gym',
    desc: 'Fitness Gym website provides a lot of exercises',
    thumb: fitnessIcon,
    repo: 'https://github.com/tuan204-dev/fitness',
    deploy: 'https://fitness-gym-204.netlify.app/',
  },
  {
    name: 'Spotify Clone',
    desc: 'Spotify clone with Vite - React - TS . Using Spotify API, Rapid API and Youtube API.',
    thumb: spotifyIcon,
    repo: 'https://github.com/tuan204-dev/spotify-react-typescript',
    deploy: 'https://spotify-clone-204.netlify.app/',
  },
  {
    name: 'Fitness Gym',
    desc: 'Fitness Gym website provides a lot of exercises',
    thumb: fitnessIcon,
    repo: 'https://github.com/tuan204-dev/fitness',
    deploy: 'https://fitness-gym-204.netlify.app/',
  },
]

const Projects: FC = () => {
  return (
    <div
      id="projects"
      className="w-full flex justify-center bg-gray-100 dark:bg-slate-700 duration-150"
    >
      <div className="w-[min(80rem,100%)] px-4 md:px-8 pt-24 pb-12 flex flex-col">
        <motion.h2
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ type: 'spring' }}
          className="text-black dark:text-white text-5xl font-bold text-center"
        >
          Projects
        </motion.h2>
        <div className="flex flex-row flex-wrap justify-around mt-20 mb-5 gap-20">
          {projects.map((item, index) => (
            <ProjectItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
