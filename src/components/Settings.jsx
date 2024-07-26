// react imports
import { useState, useContext } from 'react'
import { Context } from '@components/ContextProvider'

// component imports
import Modal from '@components/Modal'
import Switch from '@components/Switch'
import SettingsIcon from '@components/Icon/Settings'
import CloseIcon from '@components/Icon/Close'

// style imports
import style from '@styles/settings.module.scss'

const Settings = () => {
  const {
    sound,
    setSound,
    vibration,
    setVibration,
    canVibrate,
  } = useContext(Context)
  const [open, setOpen] = useState(false)

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

        {
          canVibrate && 
          <div className={style.switch}>
            <span className={style.label}>
              Vibration
            </span>

            <Switch
              value={vibration}
              onChange={() => setVibration(!vibration)} />
          </div>
        }
      </Modal>
    </>
  )
}

export default Settings
