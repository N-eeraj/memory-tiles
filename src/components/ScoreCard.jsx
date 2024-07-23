// react imports
import { useContext } from 'react'
import { Context } from '@components/ContextProvider'

// style imports
import style from '@styles/score-card.module.scss'

const ScoreCard = () => {
  const { score } = useContext(Context)

  return (
    <>
      <div className={style.overlay} />
      <div className={style.modal}>
        <span className={style.title}>
          Your Score
        </span>
        <strong className={style.score}>
          {score}
        </strong>
        <button className={style.button}>
          Play Again
        </button>
      </div>
    </>
  )
}

export default ScoreCard
