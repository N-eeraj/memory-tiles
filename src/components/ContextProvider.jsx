// react import
import { createContext, useRef, useState } from 'react'

// asset imports
import image1 from '@assets/arryn.webp'
import image2 from '@assets/baratheon.svg'
import image3 from '@assets/greyjoy.webp'
import image4 from '@assets/hightower.webp'
import image5 from '@assets/tully.webp'
import image6 from '@assets/targaryen.webp'
import image7 from '@assets/lannister.webp'
import image8 from '@assets/stark.webp'

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
]

export const Context = createContext()

const ContextProvider = ({ children }) => {
  const [selection, setSelection] = useState([])
  const [reset, setReset] = useState(false)
  const [matched, setMatched] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)

  const tries = useRef(0)

  const values = {
    selection,
    reset,
    matched,
    gameOver,
    images,
    score,
    tries,
    setSelection,
    setReset,
    setMatched,
    setGameOver,
    setScore,
  }

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
