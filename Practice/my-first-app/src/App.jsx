import Footer from "./components/Footer"
import Header from "./components/Header"
import { Abc, Xyz } from "./components/Content"


const App = () => {

  const name = "subodh"
  return <>
    <Header name={name} age={21} />
    <Abc />
    <Xyz />
    <Footer name={name} age={21} />
  </>

}


export default App