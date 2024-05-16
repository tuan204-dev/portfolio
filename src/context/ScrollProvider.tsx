import { createContext, useContext, useEffect, useState } from 'react'
import { SECTIONS } from '../types/section'
import { useInView } from 'react-intersection-observer'

interface ScrollProviderProps {
  children: React.ReactNode
}

interface ScrollContextState {
  setActiveSection: React.Dispatch<React.SetStateAction<SECTIONS>>
  activeSection: SECTIONS
}

const ScrollContext = createContext({} as ScrollContextState)

export const useInViewSection = (section: SECTIONS) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  const { setActiveSection } = useContext(ScrollContext)

  useEffect(() => {
    if (inView) {
      setActiveSection(section)
    }
  }, [inView])

  return ref
}

export const useScroll = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}

const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SECTIONS>(SECTIONS.HOME)

  console.log(activeSection)

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollProvider
