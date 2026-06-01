import { useState } from "react"

export const Create=({addProduct})=>{

const [name, setName] = useState("")

const SubmitHandler =()=>{
    addProduct(name)
}
return<>
<div className="form group d-flex gap-2">
    <input type="text" placeholder="Enter your name" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
    <button className="btn btn-success" onClick={SubmitHandler}>
        Submit
    </button>
</div>
</>
}