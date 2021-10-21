import React,{useState} from 'react'
import {GlobalStyle} from './styles/styleGlobal'
import Header from './components/Header'
function App() {
  const [close,setClose] = useState(false)
  return (
    <>
      <GlobalStyle/>
      <Header close={close} setClose={setClose}/>
    </>
  )
}

export default App
