
import './app.css'
import Catalog from './components/catalog/Catalog'
import Header from './components/header/Header'

export function App() {

  return (
    <>
      <Header header={{home:"home" , b1:"more info" , b2:"about us" , b3:"menu" , b4:"tools" }}/>
      <Catalog catalog={{c1:"yellow" , c2:"black" , c3:"orange" , c4:"green" , c5:"blue"}}/>
    </>
  )
}







