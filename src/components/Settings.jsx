// react imports
import { useState } from 'react'

// component imports
import Modal from '@components/Modal'
import SettingsIcon from '@components/Icon/Settings'
import CloseIcon from '@components/Icon/Close'

// style imports
import style from '@styles/settings.module.scss'

const Settings = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <SettingsIcon
        className={`${style.icon} ${style.settings} ${open && style.open}`}
        onClick={() => setOpen(true)} />
      <Modal value={open}>
        <CloseIcon
          className={`${style.icon} ${style.close}`}
          onClick={() => setOpen(false)} />
      </Modal>
    </>
  )
}

export default Settings
