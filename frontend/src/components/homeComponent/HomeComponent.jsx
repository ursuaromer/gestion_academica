import Navegador from "../Navegador/Navegador";
import './Home.css';
import miVideo from '../IMG/fondo6.mp4';

const HomeComponent = () => {
    return (
        <div className="home">
            <video autoPlay loop muted className="background-video">
                <source src={miVideo} type="video/mp4" />
            </video>
            <Navegador />
            <div className="container">
                <h1 className="letra">Welcome</h1>
            </div>
        </div>
    );
}

export default HomeComponent;
