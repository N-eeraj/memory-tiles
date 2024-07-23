// component imports
import Tile from '@components/Tile'

// style imports
import style from '@styles/grid.module.scss'

const App = () => {
  return (
    <main className={style.container}>
      {
        Array.from({ length: 16 }).map((_, index) => (
          <Tile key={index} />
        ))
      }
    </main>
  )
}

export default App
