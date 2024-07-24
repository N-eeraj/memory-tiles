// style imports
import style from '@styles/modal.module.scss'

const Modal = ({ value, className, children }) => {
  if (!value) return

  return (
    <>
      <div className={style.overlay} />
      <div className={`${style.modal} ${className}`}>
        {children}
      </div>
    </>
  )
}

export default Modal
