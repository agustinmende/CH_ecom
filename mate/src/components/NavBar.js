import { NavLink} from 'react-router-dom';
import CartWidget from '../components/CartWidget';

const NavBar = () => {
  return (
  <div className="NavBar">
      <h1><NavLink to="/">Fierro<span>Santo</span></NavLink></h1>
      <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/pagos">Metodos de pago</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
      </ul>
      <CartWidget/>
  </div>
  );
}

export default NavBar;