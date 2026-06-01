import { useState } from 'react'
import { Body } from './complonant/Body'
import { Footer } from './complonant/Footer'
import { Header } from './complonant/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1>Todo App</h1>
        <Header />
        <Body />
        <Footer />
    </div>
  )
}

export default App