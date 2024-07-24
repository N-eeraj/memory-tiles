// style imports
import style from '@styles/switch.module.scss'

const Switch = ({ value, onChange }) => {
  return (
    <div
      className={`${style.switch} ${value && style.selected}`}
      onClick={onChange} />
  )
}

export default Switch
