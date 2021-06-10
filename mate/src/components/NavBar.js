import React from "react";
import { NavLink} from 'react-router-dom';

import styled from "styled-components";

//import { NavbarWrapper } from "./styles/NavbarStyles";
//import CartWidget from '../components/CartWidget';

/*
const NavBar = () => {
  return (
  <div className="NavBar">
      <h1><NavLink to="/"><img src={"/images/logo.png"} alt={""} /></NavLink></h1>
      <div className="navicon"><img src={"/images/navicon.png"} alt={""} /></div>
      <div className="nav_button"><img src={"/images/nav_button.png"} alt={""} /></div>
      <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/pagos">Metodos de pago</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
      </ul>
      
  </div>
  );
}

export default NavBar;*/


const NavbarWrapper = styled.nav`
  display: block;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #000;
  position: fixed;
  top: 10vh;
  left: ${props => (props.open ? "6.15vw" : "-100vw")};
  width: 100%;
  height: 90vh;
  transition: right 0.3s linear;

  position: absolute;
  top: 0;
  width: 94vw;
  height: 100%;
  z-index: -1;
`;

function Navbar({ open , handleClick}) {
  return (
      <NavbarWrapper open={open}>
        <ul>
            <li><NavLink to="/" onClick={handleClick}>Inicio</NavLink></li>
            <li><NavLink to="/pagos" onClick={handleClick}>Metodos de pago</NavLink></li>
            {/*<li><NavLink to="/contacto" onClick={handleClick}>Contacto</NavLink></li>*/}
            <li><NavLink to="/about" onClick={handleClick}>About</NavLink></li>
        </ul>
      </NavbarWrapper>
  );
}

export default Navbar;