import { useState } from "react"
import { List } from "./List"

export const Display=({product, removeProduct})=>{
    var [cart, setCart] = useState([])

    const addTocart =(name)=>{
        const newArray = [...cart, name]
        setCart(newArray)
    }
    const removeFromcart =(name)=>{ 
        const newArray = cart.filter(ele => {
            return ele != name
        })
        setCart(newArray)
    }

return<>
    <table className="table table-striped table-hover table-bordered shadow rounded">
        <thead className="table-dark text-center">
            <tr>
                <th>Name</th>
                <th>Action</th>
            </tr>

        </thead>

        <tbody className="text-center align-middle">
            {product.map(ele => (
                <List 
                    key={ele}
                    ele={ele}
                    removeProduct={removeProduct}
                    addTocart={addTocart}
                    removeFromcart={removeFromcart}
                    isExist={cart.includes(ele)}
                />
            ))}
        </tbody>
    </table>
</>


}