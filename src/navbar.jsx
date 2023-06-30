import React from "react"
import Body from './Body'



export default function Navbar(props) {
    return (
        <>
         <nav 
            className={props.darkMode ? "dark": ""}
        >
            
            
            <h3 className="nav--logo_text">TechPulse</h3>
            <input placeholder="Search..." type="text" name="text" class="input"></input>
            <button className="Nav-Btn">Search</button>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
       
      <Body/>
      </>
      )}
