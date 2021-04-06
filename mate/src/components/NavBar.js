import CartWidget from '../components/CartWidget';

const NavBar = () => {
  return (
  <div className="NavBar">
      <h1>Fierro<span>Santo</span></h1>
      <ul>
          <li><a href="#nogo">Inicio</a></li>
          <li><a href="#nogo">Productos</a></li>
          <li><a href="#nogo">Metodos de pago</a></li>
          <li><a href="#nogo">Contacto</a></li>
      </ul>
      <CartWidget/>
  </div>
  );
}

export default NavBar;