import { useState } from 'react'
import { Create } from './complonant/create'
import { Display } from './complonant/display'
import './App.css'

function App() {
  var [task, settask] = useState([])

  const addtask = (data) => {
    var newarray = [...task, data]
    settask(newarray)
  }

  const removetask = (data) => {
    var newarray = task.filter(ele => ele !== data)
    settask(newarray)
  }

  return <>
  <h1>Todo App</h1>
  <Create addtask={addtask} />
  <Display task={task} removetask={removetask} />
  </>
    
}

export default App