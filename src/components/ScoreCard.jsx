// react imports
import { useContext } from 'react'
import { Context } from '@components/ContextProvider'

// style imports
import style from '@styles/score-card.module.scss'

const ScoreCard = () => {
  const {
    score,
    tries,
    setScore,
    setGameOver,
  } = useContext(Context)

  const handlePlayAgain = () => {
    tries.current = 0
    setScore(null)
    setGameOver(true)
  }

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
        <button className={style.button} onClick={handlePlayAgain}>
          Play Again
        </button>
      </div>
    </>
  )
}

export default ScoreCard
