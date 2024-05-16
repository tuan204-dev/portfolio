import { motion } from 'framer-motion'
import { Turn as Hamburger } from 'hamburger-react'
import { FC, memo, useEffect, useMemo, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useScroll } from '../context/ScrollProvider'
import { SECTIONS } from '../types/section'

interface CategoryItem {
  key: number
  name: string
  href: string
  id: string
  isActive: boolean
}

const Header: FC = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false)
  const [categoryType, setCategoryType] = useState<string>('Home')
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
  const [isMenuMounted, setMenuMounted] = useState<boolean>(false)
  const [xSpring, setXSpring] = useState<number>(-120)

  const {activeSection} = useScroll()

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  const handleChangeCategoryType = (name: string) => {
    setCategoryType(name)
  }

  const handleToggleMenu = () => {
    if (!isMenuOpen) {
      setMenuOpen(true)
      setXSpring(-120)
    } else {
      setMenuOpen(false)
      setXSpring(120)
    }
  }

  useEffect(() => {
    let timeoutId: number
    if (isMenuOpen) {
      setMenuMounted(true)
    } else {
      timeoutId = setTimeout(() => {
        setMenuMounted(false)
      }, 500)
    }

    return () => clearTimeout(timeoutId)
  }, [isMenuOpen])

  const categories: CategoryItem[] = useMemo(
    () => [
      {
        key: 1,
        name: 'Home',
        href: '#home',
        id: 'home',
        isActive: activeSection === SECTIONS.HOME,
      },
      {
        key: 2,
        name: 'About',
        href: '#about',
        id: 'about',
        isActive: activeSection === SECTIONS.ABOUT,
      },
      {
        key: 3,
        name: 'Projects',
        href: '#projects',
        id: 'projects',
        isActive: activeSection === SECTIONS.PROJECTS,
      },
      {
        key: 4,
        name: 'Contact',
        href: '#contact',
        id: 'contact',
        isActive: activeSection === SECTIONS.CONTACT,
      },
    ],
    [categoryType, activeSection]
  )

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-2 py-4 duration-150 bg-white shadow-lg dark:bg-gray-700 md:px-10">
      <div className="text-xl font-medium text-black dark:text-white">
        <a href="#">{'<tuan204.dev/>'}</a>
      </div>
      <div className="flex items-center justify-end h-10">
        <nav className="hidden gap-8 md:flex">
          {categories?.map((item) => (
            <div onClick={() => handleScroll(item?.id)} key={item?.key}>
              <button
                className={`flex justify-center items-center text-black dark:text-white rounded-md cursor-pointer text-md font-semibold py-2 px-3 transition select-none ${
                  item?.isActive ? 'bg-blue-500 text-white' : ''
                }`}
              >
                {item?.name}
              </button>
            </div>
          ))}
        </nav>

        <button className="ml-8" onClick={() => setDarkMode((prev) => !prev)}>
          <div className="text-xl outline-none dark:text-white">
            {isDarkMode ? <FiMoon /> : <FiSun />}
          </div>
        </button>
        <div className="block ml-3 md:hidden">
          <div className="relative outline-none">
            <Hamburger
              toggled={isMenuOpen}
              toggle={handleToggleMenu}
              duration={0.6}
              size={28}
              color={isDarkMode ? '#fff' : '#000'}
            />
            {isMenuMounted && (
              <motion.div
                className={`absolute flex flex-col gap-1 bg-white dark:bg-gray-900 w-40 rounded-lg shadow-lg px-2 py-2 top-16 z-50`}
                animate={{ x: xSpring }}
                transition={{ type: 'spring' }}
              >
                {categories?.map((item) => (
                  <a
                    onClick={() => {
                      handleChangeCategoryType(item?.name)
                      handleToggleMenu()
                    }}
                    key={item?.key}
                    href={item?.href}
                    className={`text-black dark:text-white hover:text-white hover:bg-blue-500 rounded-md cursor-pointer text-md font-semibold py-2 px-3 ${
                      item?.isActive ? 'bg-blue-500 text-white' : ''
                    }`}
                  >
                    {item?.name}
                  </a>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
