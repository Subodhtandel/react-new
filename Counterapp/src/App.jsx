import { useState } from 'react'
const App = ()=>{
  var [count,setcount] = useState(0)
  const incr =()=>{
    count++
    setcount(count)

  }
  const decr =()=>{
    count--
    setcount(count)
  }
  return<>
  <h1>Counter App</h1>
  <button onClick={incr}>+</button>
  <span>{count}</span>
  <button onClick={decr}>-</button>
  </>
}

export default App