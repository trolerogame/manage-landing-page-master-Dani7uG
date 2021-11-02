import React,{useState} from 'react'
import {GlobalStyle} from './styles/styleGlobal'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Notify from './components/Notify'
function App() {
  const [close,setClose] = useState(false)
  return (
    <>
      <GlobalStyle/>
      <Header close={close} setClose={setClose}/>
      <Main/>
      <Notify/>
      <Footer />
    </>
  )
}

export default App
