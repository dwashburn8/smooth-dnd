import React from "react"
import "./Header.css"
import LogoutButton from "../LogoutButton/LogoutButton"
function Header (props){


    return (
        
        <nav className="navbar navbar-dark primary-color">
        <a className="navbar-brand" href="/id">
          <img src="../../../logo.png" height="70" alt="cybermark logo"/>
        </a>
    <h3>Hello {props.name}</h3>
        <LogoutButton/>
      </nav>
      
    )
}

export default Header