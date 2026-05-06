import'bootstrap/dist/css/bootstrap.min.css'
import { Title } from './Componants/TItle'
import { Create } from './Componants/Create'
import { Display } from './Componants/Display'
import { Error } from './Componants/Error'
import { useState } from 'react'

const App = () => {  
  var [product, setProduct] = useState([])

  const addProduct = (name) => {
    var newArray = [...product, name]
    setProduct(newArray)
  }

  const removeProduct = (name) => {
    var newArray = product.filter(ele => {
      return ele != name
    })
    setProduct(newArray)
  }

return<>
<div className="container">
  <div className="row">
    <div className="col-6 mx-auto card p-5 mt-3">
      <Title/>
      <hr />
      <Create addProduct={addProduct}/>
      <hr />
      {product.length > 0 ? <Display product={product} removeProduct={removeProduct} /> : <Error/>}
    </div>
  </div>
</div>
</>
}
export default App