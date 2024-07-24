// react imports
import { useContext } from 'react'
import { Context } from '@components/ContextProvider'

// component imports
import Modal from '@components/Modal'

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
      <Modal>
        <span className={style.title}>
          Your Score
        </span>
        <strong className={style.score}>
          {score}
        </strong>
        <button className={style.button} onClick={handlePlayAgain}>
          Play Again
        </button>
      </Modal>
    </>
  )
}

export default ScoreCard
