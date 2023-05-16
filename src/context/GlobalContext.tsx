import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react'

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

  return (
    <GlobalContext.Provider value={{ ...data }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => useContext(GlobalContext)
