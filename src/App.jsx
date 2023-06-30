import React from 'react'
import Log from "./log"
import Signup from './sign'
import Autentification from "./autentification"
import Homepage from './home'


function App() {
  const [count, setCount] = React.useState(0)

  return (
    <>
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
