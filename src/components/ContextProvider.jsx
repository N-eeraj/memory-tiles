// react import
import { createContext, useRef, useState } from 'react'

export const Context = createContext()

const canVibrate = 'vibrate' in navigator

const ContextProvider = ({ children }) => {
  const [selection, setSelection] = useState([])
  const [reset, setReset] = useState(false)
  const [matched, setMatched] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(null)
  const [sound, setSound] = useState(true)
  const [vibration, setVibration] = useState(canVibrate)
  

  const tries = useRef(0)

  const values = {
    selection,
    reset,
    matched,
    gameOver,
    score,
    tries,
    sound,
    vibration,
    canVibrate,
    setSelection,
    setReset,
    setMatched,
    setGameOver,
    setScore,
    setSound,
    setVibration,
  }

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
