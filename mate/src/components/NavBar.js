import { NavLink} from 'react-router-dom';
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
import React from "react";
//import { NavbarWrapper } from "./styles/NavbarStyles";

function Navbar({ open }) {
  return (
    <div className="NavBar">
      <h1><NavLink to="/"><img src={"/images/logo.png"} alt={""} /></NavLink></h1>
      <div className="navicon"><img src={"/images/navicon.png"} alt={""} /></div>
      <div className="nav_button"><img src={"/images/nav_button.png"} alt={""} /></div>
      <ul open={open}>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/pagos">Metodos de pago</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;