// react imports
import { useEffect, useMemo, useContext } from 'react'
import { Context } from '@components/ContextProvider'

// component imports
import Tile from '@components/Tile'

// util files imports
import shuffle from '@/shuffle'

// style imports
import style from '@styles/grid.module.scss'

const Grid = () => {
  const {
    selection,
    reset,
    matched,
    gameOver,
    tries,
    images,
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
    if (selection.length !== 2) return
    tries.current++
    if (shuffledValues[selection[0]] === shuffledValues[selection[1]]) {
      setSelection([])
      setMatched(matched => [...matched, shuffledValues[selection[0]]])
    }
    else {
      setTimeout(() => {
        toggleReset()
        setSelection([])
      }, 1000)
    }
  }, [selection])

  useEffect(() => {
    if (matched.length === images.length) {
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
