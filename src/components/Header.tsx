import { motion } from 'framer-motion'
import { Turn as Hamburger } from 'hamburger-react'
import { FC, useEffect, useMemo, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

interface CategoryItem {
  key: number
  name: string
  href: string
  isActive: boolean
}

const Header: FC = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false)
  const [categoryType, setCategoryType] = useState<string>('Home')
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
  const [isMenuMounted, setMenuMounted] = useState<boolean>(false)
  const [xSpring, setXSpring] = useState<number>(-120)

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
        href: '#',
        isActive: categoryType === 'Home',
      },
      {
        key: 2,
        name: 'About',
        href: '#about',
        isActive: categoryType === 'About',
      },
      {
        key: 3,
        name: 'Projects',
        href: '#projects',
        isActive: categoryType === 'Projects',
      },
      {
        key: 4,
        name: 'Contact',
        href: '#contact',
        isActive: categoryType === 'Contact',
      },
    ],
    [categoryType]
  )

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <header className="bg-white fixed z-50 top-0 right-0 left-0 dark:bg-gray-700 duration-150 w-full flex justify-between items-center py-4 md:px-10 px-2 shadow-lg">
      <div className="text-xl text-black dark:text-white font-medium">
        {'<tuan204.dev/>'}
      </div>
      <div className="flex justify-end items-center h-10">
        <nav className="hidden md:flex gap-8">
          {categories?.map((item) => (
            <div onClick={() => handleChangeCategoryType(item?.name)} key={item?.key}>
              <a
                className={`flex justify-center items-center text-black dark:text-white hover:text-white hover:bg-blue-500 rounded-md cursor-pointer text-md font-semibold py-2 px-3 transition-colors ${
                  item?.isActive ? 'bg-blue-500 text-white' : ''
                }`}
                href={item?.href}
              >
                {item?.name}
              </a>
            </div>
          ))}
        </nav>

        <button className="ml-8" onClick={() => setDarkMode((prev) => !prev)}>
          <div className="text-xl dark:text-white">
            {isDarkMode ? <FiMoon /> : <FiSun />}
          </div>
        </button>
        <div className=" ml-3 block md:hidden">
          <div className="relative">
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

export default Header
