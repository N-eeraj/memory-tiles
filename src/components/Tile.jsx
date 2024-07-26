// react imports
import { useEffect, useState } from 'react'

// react flip imports
import ReactFlipCard from 'reactjs-flip-card'

// asset imports
import backCover from '@assets/images/cover.jpg'

// style imports
import style from '@styles/tile.module.scss'
    
const Tile = ({ backValue, disable, reset, matched, onClick }) => {
  const [value, setValue] = useState(false)

  const handleClick = () => {
    if (disable || matched) return
    onClick()
    setValue(!value)
  }

  useEffect(() => {
    if (reset && !matched) {
      setValue(false)
    }
  }, [reset])

  return (
    <ReactFlipCard
      flipByProp={value}
      flipTrigger='disabled'
      frontComponent={<img src={backCover} />}
      backComponent={<img src={backValue} />}
      containerCss={style.container}
      flipCardCss={style.tile}
      frontCss={style.front}
      backCss={`${style.back} ${matched && style.matched}`}
      onClick={handleClick} />
  )
}

export default Tile
