

import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';

function CheckoutSuccess(props) {
    
    

    return (
        <div>

            <div className="breadcrumbs">
                <Link to="/">
                  <span><img src="/images/back_arrow.png" alt="" /> Back to shop</span>
                </Link>
            </div>

            
            <div id="checkoutSuccess">

                <div className="checkout_success_content">
                    <img src="/images/checkout_success_content.png" alt="" />
                    <div className="text">
                    TU PEDIDO FUE REALIZADO CON EXITO.<br />
                    En breve recibirás toda la info en tu mail.<br />
                    ¡Ya sos parte del FUROR!
                    </div>
                </div>

            </div>

            <Footer />


        </div>

    );
}

export default CheckoutSuccess;