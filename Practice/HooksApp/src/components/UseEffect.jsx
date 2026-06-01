import { useState, useEffect } from "react"

export const UseEffect = () => {
    var [count, setCount] = useState(0)
    var [counts, setCounts] = useState(0)

    useEffect(() => {
        alert("useEffect called")
    }, [count])

    return<>    
        <button onClick={
            ()=>{setCount(count+1)}}>Click me {count}</button>
        <button onClick={
            ()=>{setCounts(counts+1)}}>Click me {counts}</button>
    </>

}