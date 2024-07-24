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

        <Switch
          value={sound}
          onChange={() => setSound(!sound)} />
      </Modal>
    </>
  )
}

export default Settings
