// react imports
import { useEffect, useMemo, useContext } from 'react'
import { Context } from '@components/ContextProvider'

// component imports
import Tile from '@components/Tile'

// util files imports
import shuffle from '@/shuffle'

// style imports
import style from '@styles/grid.module.scss'


// asset imports
import image1 from '@assets/images/arryn.webp'
import image2 from '@assets/images/baratheon.svg'
import image3 from '@assets/images/greyjoy.webp'
import image4 from '@assets/images/hightower.webp'
import image5 from '@assets/images/tully.webp'
import image6 from '@assets/images/targaryen.webp'
import image7 from '@assets/images/lannister.webp'
import image8 from '@assets/images/stark.webp'
import flipAudio from '@assets/audio/flip.wav'
import matchAudio from '@assets/audio/match.wav'
import mismatchAudio from '@assets/audio/mismatch.wav'
import gameOverAudio from '@assets/audio/game-over.wav'

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

const Grid = () => {
  const {
    selection,
    reset,
    matched,
    gameOver,
    tries,
    vibration,
    sound,
    setSelection,
    setReset,
    setMatched,
    setScore,
    setGameOver,
  } = useContext(Context)

  const shuffledValues = useMemo(() => shuffle([...images, ...images]), [gameOver])
  const handleTileFlip = index => setSelection(selection => ([...selection, index]))
  const getDisable = index => selection.length === 2 || selection.includes(index)
  const toggleReset = () => {
    setReset(true)
    setTimeout(() => {
      setReset(false)
    }, 100)
  }

  useEffect(() => {
    if (selection.length === 1 && sound) {
      const flip = new Audio(flipAudio)
      flip.play()
    }
    if (selection.length !== 2) return
    tries.current++
    let audio
    if (shuffledValues[selection[0]] === shuffledValues[selection[1]]) {
      audio = new Audio(matchAudio)
      if (vibration) {
        navigator.vibrate(100)
      }
      setSelection([])
      setMatched(matched => [...matched, shuffledValues[selection[0]]])
    }
    else {
      audio = new Audio(mismatchAudio)
      setTimeout(() => {
        toggleReset()
        setSelection([])
      }, 1000)
    }
    if (sound) {
      audio.play()
    }
  }, [selection])

  useEffect(() => {
    if (matched.length === images.length) {
      if (sound) {
        const gameOver = new Audio(gameOverAudio)
        gameOver.play()
      }
      setTimeout(() => {
        let score = 1000 - (tries.current - 8) * 17
        if (score < 0) score = 0
        setScore(score)
        setMatched([])
        toggleReset()
      }, 1000)
    }
  }, [matched])

  useEffect(() => {
    setGameOver(false)
  }, [shuffledValues])

  return (
    <div className={style.container}>
      {
        shuffledValues.map((image, index) => (
          <Tile
            backValue={image}
            disable={getDisable(index)}
            reset={reset}
            matched={matched.includes(image)}
            key={index}
            onClick={() => handleTileFlip(index)} />
        ))
      }
    </div>
  )
}

export default Grid
