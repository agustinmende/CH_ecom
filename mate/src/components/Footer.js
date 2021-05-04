import { NavLink} from 'react-router-dom';

const Footer = () => {
  return (
  <div id="footer">
   <div className="services">
        <div>
            <h3>Envio Gratis</h3>
            <p>Por compras superiores a $10.000 en CABA</p>
        </div>

        <div>
            <h3>Ajuste Gratis</h3>
            <p>Si el tamaño no te queda bien ¡Hacemos el ajuste gratis!</p>
        </div>
    </div>

        <div className="bottom-navbar">
            <h2>Fierro<span>Santo</span></h2>

           <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/pagos">Metodos de pago</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
        </div>
  </div>
  );
}

export default Footer;