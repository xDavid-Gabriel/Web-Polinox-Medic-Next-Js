import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

interface ContextProps {
  number: string
  setNumber: (number: string) => void
  text: string
  setText: (text: string) => void
}

export const GlobalContext = createContext({} as ContextProps)

export const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  // 902796268
  const [number, setNumber] = useState('988848573')
  const [text, setText] = useState(
    'Hola 👋,%0AQuisiera solicitar mas información 🤗',
  )

  const data = {
    number,
    setNumber,
    text,
    setText,
  }

  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])
  return (
    <GlobalContext.Provider value={{ ...data }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => useContext(GlobalContext)
