import { Link } from "react-router-dom";

const Inicio = () => (

    <div className="container" style={{height:"100vh"}}>
        <h2 className="title">Preinscreción</h2>
        <div className="card card-center poster">
            <p>Bienvenido(a)
                <br/><br/> Por favor diligencia los datos y te <br/>
                contáctaremos muy pronto:
            </p>
        </div>
        <div className="grawper">
            <Link to="/document">
                <button class="button green">Empezar</button>
            </Link>
        </div>
    </div>
);


export default Inicio; 

