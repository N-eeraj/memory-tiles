// react imports
import { useContext } from 'react'
import { Context } from '@components/ContextProvider'

// component imports
import Grid from '@components/Grid'
import ScoreCard from '@components/ScoreCard'

// style imports
import style from '@styles/app.module.scss'

const App = () => {
  const { score } = useContext(Context)

  return (
    <main className={style.app}>
      <Grid />
      {!!score && <ScoreCard />}
    </main>
  )
}

export default App
