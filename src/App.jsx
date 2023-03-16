import React from 'react'
import {GlobalStyle} from './styles/styleGlobal'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Notify from './components/Notify'
function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Notify/>
      <Footer />
    </>
  )
}

export default App
