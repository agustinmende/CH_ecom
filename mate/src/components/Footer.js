import { NavLink} from 'react-router-dom';

const Footer = () => {
  return (
  <div id="footer" className="">
      {/*
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
      */ }

        <div className="bottom-navbar">

            <span className="footer_to_top"><img src={"/images/footer_to_top.png"} alt="" /></span>

            <h2 className="logo"><img src={"/images/footer_logo_1.png"} alt="" /></h2>
            <h3>info@thefuror.shop</h3>
            <h4 className="logo_right"><img src={"/images/footer_logo_3.png"} alt="" /></h4>

           {/*<ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/pagos">Metodos de pago</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
           </ul>*/}
        </div>
  </div>
  );
}

export default Footer;