// component imports
import Tile from '@components/Tile'

// game logic import
import useGame from '@/game'

// style imports
import style from '@styles/grid.module.scss'

const Grid = () => {
  const {
    shuffledValues,
    matched,
    reset,
    getDisable,
    handleTileFlip,
  } = useGame()

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
