// react imports
import { useState } from 'react'

// component imports
import Modal from '@components/Modal'
import Switch from '@components/Switch'
import SettingsIcon from '@components/Icon/Settings'
import CloseIcon from '@components/Icon/Close'

// style imports
import style from '@styles/settings.module.scss'

const Settings = () => {
  const [open, setOpen] = useState(false)
  const [sound, setSound] = useState(true)
  const [vibration, setVibration] = useState(true)

  return (
    <>
      <SettingsIcon
        className={`${style.icon} ${style.settings} ${open && style.open}`}
        onClick={() => setOpen(true)} />

      <Modal
        value={open}
        className={style.modal}>
        <CloseIcon
          className={`${style.icon} ${style.close}`}
          onClick={() => setOpen(false)} />

        <strong className={style.title}>
          Settings
        </strong>

        <div className={style.switch}>
          <span className={style.label}>
            Sound
          </span>

          <Switch
            value={sound}
            onChange={() => setSound(!sound)} />
        </div>

        <div className={style.switch}>
          <span className={style.label}>
            Vibration
          </span>

          <Switch
            value={vibration}
            onChange={() => setVibration(!vibration)} />
        </div>
      </Modal>
    </>
  )
}

export default Settings
