import { useState } from "react"
import { Create } from "./complonant/Create"
import { Display } from "./complonant/Display"

const App = () => {

  var [task, setTask] = useState([])
  const addtask = (data) => {
    var newarray = [...task, data]
    setTask(newarray)
  }
  const removetask = (data) => {
    var newarray = task.filter(ele => {
      return ele != data
    })
    setTask(newarray)
  }

  return <>
    <h1>TODO APP</h1>
    <Create addtask={addtask} />
    <Display task={task} removetask={removetask} />

  </>
}

export default App