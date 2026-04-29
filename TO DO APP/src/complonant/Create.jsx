import { useState } from "react";


export const Create = ({ addtask }) => {


    var [data, setdata] = useState()

    const SetDataHandler = (e) => {
        setdata(e.target.value)

    }

    const addtaskHandler = (e) => {
        e.preventDefault()
        addtask(data)

    }

    return <>
        <form action="">
            <input type="text" name="todo" id="todo" onChange={SetDataHandler} />
            <button onClick={addtaskHandler}>Submit</button>
        </form>
    </>
    
}