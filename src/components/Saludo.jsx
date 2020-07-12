import React, { Fragment } from "react";
import '../styles/style.scss';

const Saludo = ({nombre}) => {
    return (
        <Fragment>
            <article className="welcomeText">
                Hola bienvenido sabemos que quieres viajar en un <span className="welcomeText__keyword">{nombre}.</span>
                <br></br>Por favor diligencia el siguiente formulario: 
            </article>
        </Fragment>
    );
}

export default Saludo;