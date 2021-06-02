import React, { useState } from "react"
//import { HeaderWrapper } from "./styles/Header"
import NavBar from "./NavBar"
import TopBar from './TopBar';
import MenuButton from "./MenuButton"

function Header() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div>
      <h2>Logo</h2>
      <NavBar open={open} />
      <TopBar />
      <MenuButton open={open} handleClick={handleClick} />
    </div>
  )
}

export default Header