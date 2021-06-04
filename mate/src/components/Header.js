import React, { useState } from "react";
import { NavLink} from 'react-router-dom';
//import { HeaderWrapper } from "./styles/Header"
import NavBar from "./NavBar";
import TopBar from './TopBar';
import MenuButton from "./MenuButton";

function Header() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div>

        <div className="NavBar">
            <h1><NavLink to="/"><img src={"/images/logo.png"} alt={""} /></NavLink></h1>
            <MenuButton open={open} handleClick={handleClick} />
            <div className="nav_button"><img src={"/images/nav_button.png"} alt={""} /></div>
            <NavBar open={open} handleClick={handleClick} />
        </div>

        <TopBar />
        
    </div>
  )
}

export default Header