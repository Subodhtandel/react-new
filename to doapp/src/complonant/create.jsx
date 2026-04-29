import { useState } from 'react'
export const Create = ({addtask}) => {
    var [data, setdata] = useState('')

    const SetDataHandler = (e) => {
        setdata(e.target.value)
    }

const addtaskhandler = (e) => {
    e.preventDefault()
        addtask(data)
    }
    return <>
        <form action="">
        <input type="text" placeholder='Enter Task' onChange={SetDataHandler} value={data}/>
        <button onClick={addtaskhandler}>Add Task</button>
         </form>
    </>
}