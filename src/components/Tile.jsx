// react imports
import { useState } from 'react'

// react flip imports
import ReactFlipCard from 'reactjs-flip-card'

// asset imports
import backCover from '@assets/cover.jpg'

// style imports
import style from '@styles/tile.module.scss'
    
const Tile = ({ backValue }) => {
  const [value, setValue] = useState(false)

  return (
    <ReactFlipCard
      flipByProp={value}
      flipTrigger='disabled'
      frontComponent={<img src={backCover} />}
      backComponent={<img src={backValue} />}
      containerCss={style.container}
      flipCardCss={style.tile}
      frontCss={style.front}
      backCss={style.back}
      onClick={() => setValue(!value)} />
  )
}

export default Tile
