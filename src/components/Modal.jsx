// style imports
import style from '@styles/modal.module.scss'

const ScoreCard = ({ children }) => {
  return (
    <>
      <div className={style.overlay} />
      <div className={style.modal}>
        {children}
      </div>
    </>
  )
}

export default ScoreCard
