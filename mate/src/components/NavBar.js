import CartWidget from '../components/CartWidget';

const NavBar = () => {
  return (
  <div className="NavBar">
      <h2>Navegación</h2>
      <CartWidget/>
      <ul>
          <li><a href="#nogo">Inicio</a></li>
          <li><a href="#nogo">Productos</a></li>
          <li><a href="#nogo">Metodos de pago</a></li>
          <li><a href="#nogo">Contacto</a></li>
      </ul>
  </div>
  );
}

export default NavBar;