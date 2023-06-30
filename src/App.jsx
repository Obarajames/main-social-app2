import React from 'react'
import Log from "./log"
import Signup from './sign'
import Autentification from "./autentification"
import Homepage from './home'
import Navbar from './navbar'


function App() {
  const [count, setCount] = React.useState(0)
  const [darkMode, setDarkMode] = React.useState(true)
    
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  return (
    <>
    <Navbar  
      darkMode={darkMode} 
      toggleDarkMode={toggleDarkMode}/>
    <div className="fieldsflex">
    
      <Log/>
      <Signup/>
      </div>
      <div className="auth">
      <Autentification/>
      
      </div>
    </>
  )
}

export default App
