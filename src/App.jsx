// component imports
import Tile from '@components/Tile'

// style imports
import style from '@styles/grid.module.scss'

// asset imports
import image1 from '@assets/arryn.webp'
import image2 from '@assets/baratheon.svg'
import image3 from '@assets/greyjoy.webp'
import image4 from '@assets/hightower.webp'
import image5 from '@assets/tully.webp'
import image6 from '@assets/targaryen.webp'
import image7 from '@assets/lannister.webp'
import image8 from '@assets/stark.webp'

// util files imports
import shuffle from '@/shuffle'

const values = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
]

const shuffledValues = shuffle([...values, ...values])

const App = () => {
  return (
    <main className={style.container}>
      {
        shuffledValues.map((image, index) => (
          <Tile backValue={image} key={index} />
        ))
      }
    </main>
  )
}

export default App
