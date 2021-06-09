import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';

function About(props) {
    
    

    return (
        <div >

            <div className="breadcrumbs">
                <Link to="/cart">
                <span>← Volver</span>
                </Link>
            </div>

            

            <div className="about_text">
                <p>Somos entusiastas de lo simple y lo clásico. </p>
                <p>Pero con un toque de rebeldía. </p>
                <p>De poder representarnos tal cual somos y que nos identifiquen, de dejar nuestra marca en todos lados.</p>
                <p>Por eso nos apasionan los anillos. </p>
                <p>Porque son objetos estéticos y bellos, que siempre relucen por sus diseños, sus formas y colores. </p>
                <p>Y nunca, pero nunca, pasan desapercibidos. </p>
                <p>Aunque no los vemos solo como un objeto. </p>
                <p>No son simples elementos decorativos. </p>
                <p>Para nosotros los anillos son portadores y testigos de historias, se impregnan de los recuerdos, emociones y situaciones de las cuales fueron testigos únicos, y por ello, con el pasar del tiempo, cobran cada vez más valor. </p>
                <p>Se convierten en parte fundamental, en un talismán.</p>
                <p>Por eso cada uno de nuestros anillos trae consigo una historia, que esperamos sirva como un puntapié, para que cada futuro cliente pueda entablar su propia conexión, su carga de energía, su impronta y magia.</p>
                <p>Invitamos a toda persona que valore estas sensaciones, que le dé importancia a los detalles y a la belleza, pero sobretodo que crea que los objetos no están vacíos, que pueden conectar con ellos y disfrutar de su uso. </p>
                <p className="res">Invitamos a que se unan y causen FUROR.</p>
                <span><img src="/images/about_logo.png" alt="" /></span>
            </div>

            <Footer />


        </div>

    );
}

export default About;