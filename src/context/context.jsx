import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleWidth = () => {
      if (window.innerWidth >= 1280) {
        return setIsActive(false)
      }
    }
    handleWidth()
    window.addEventListener('resize', handleWidth)
    return () => window.removeEventListener('resize', handleWidth)
  }, [])
  return (
    <AppContext.Provider value={{ isOpen, setIsOpen, isActive, setIsActive }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
