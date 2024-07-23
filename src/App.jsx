// react imports
import { useEffect, useState } from 'react'

// component imports
import Tile from '@components/Tile'

// style imports
import style from '@styles/grid.module.scss'

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

const shuffledValues = shuffle([...values, ...values])
console.log(shuffledValues)
const App = () => {
  const [selection, setSelection] = useState([])
  const [reset, setReset] = useState(false)

  const handleTileFlip = index => {
    // if (selection.length === 2) return
    setSelection(selection => ([...selection, index]))
  }

  useEffect(() => {
    if (selection.length !== 2) return
    if (shuffledValues[selection[0]] === shuffledValues[selection[1]]) {
      setSelection([])
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

  const getDisable = index => {
    return selection.length === 2 || selection.includes(index)
  }

  return (
    <main className={style.container}>
      {
        shuffledValues.map((image, index) => (
          <Tile
            reset={reset}
            backValue={image}
            disable={getDisable(index)}
            key={index}
            onClick={() => handleTileFlip(index)} />
        ))
      }
    </main>
  )
}

export default App
