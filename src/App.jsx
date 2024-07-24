// react imports
import { useContext } from 'react'
import { Context } from '@components/ContextProvider'

// component imports
import Grid from '@components/Grid'
import ScoreCard from '@components/ScoreCard'
import Settings from '@components/Settings'

// style imports
import style from '@styles/app.module.scss'

const App = () => {
  const { score } = useContext(Context)

  return (
    <main className={style.app}>
      <Settings />
      <Grid />
      <ScoreCard show={score !== null} />
    </main>
  )
}

export default App
