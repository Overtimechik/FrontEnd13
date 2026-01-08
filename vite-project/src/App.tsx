import { useState, type FC } from 'react'
import { Button } from './share/Button'


const App:FC = function App() {
const [count, setCount] = useState(0)

  return (<>
    <Button mode='border' onClick={() => setCount((count) => count + 1)}/>
      <h1 className='pl-10'>{count}</h1>
  </>
  )
}

export default App
