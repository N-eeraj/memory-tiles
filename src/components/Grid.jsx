// react imports
import { useEffect, useMemo, useState } from 'react'

// component imports
import Tile from '@components/Tile'

// asset imports
import image1 from '@assets/arryn.webp'
import image2 from '@assets/baratheon.svg'
import image3 from '@assets/greyjoy.webp'
import image4 from '@assets/hightower.webp'
import image5 from '@assets/tully.webp'
import image6 from '@assets/targaryen.webp'
import image7 from '@assets/lannister.webp'
import image8 from '@assets/stark.webp'

// util files imports
import shuffle from '@/shuffle'

// style imports
import style from '@styles/grid.module.scss'

const values = [
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
  const [selection, setSelection] = useState([])
  const [reset, setReset] = useState(false)
  const [matched, setMatched] = useState([])
  const [gameOver, setGameOver] = useState(false)

  const shuffledValues = useMemo(() => shuffle([...values, ...values]), [gameOver])

  const handleTileFlip = index => {
    setSelection(selection => ([...selection, index]))
  }

  useEffect(() => {
    if (selection.length !== 2) return
    if (shuffledValues[selection[0]] === shuffledValues[selection[1]]) {
      setSelection([])
      setMatched(matched => [...matched, shuffledValues[selection[0]]])
    }
    else {
      setTimeout(() => {
        setReset(true)
        setTimeout(() => {
          setReset(false)
        }, 100)
        setSelection([])
      }, 1000)
    }
  }, [selection])

  const getDisable = index => selection.length === 2 || selection.includes(index)

  useEffect(() => {
    if (matched.length === values.length) {
      setTimeout(() => {
        setGameOver(true)
        setMatched([])
        setReset(true)
      }, 1000)
    }
  }, [matched])

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