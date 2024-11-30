import { useMemo, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../css/App.css'
import { AppContextComponent } from '../contexts'
import { Counter } from './Counter'
import { Text1 } from './Text1'
import { Text2 } from './Text2'
import { TextWithoutContext1 } from './TextWithoutContext1'
import { TextWithoutContext2 } from './TextWithoutContext2'

function App() {
  const [count, setCount] = useState(0)
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')

  const contextValue = useMemo(() => {
    return {
      count,
      setCount,
      text1,
      text2,
    }
  }, [count, text1, text2])

  console.log('App rerender')
  return (
    <AppContextComponent value={contextValue}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter />
      </div>
      <div className="card2">
        <Text1 />
        <Text2 />
      </div>
      <div>Text1: <input onChange={(e) => setText1(e.target.value)} /></div>
      <div>Text2: <input onChange={(e) => setText2(e.target.value)} /></div>

      <TextWithoutContext1 />
      <TextWithoutContext2 />
    </AppContextComponent>
  )
}

export default App
