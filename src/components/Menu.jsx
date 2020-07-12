import React, {useState, Fragment}  from "react";
import Saludo from './Saludo';

const Menu = () => {

    const [nombre, setNombre] = useState();

    const cambiarNombre = (e) => {
        setNombre(e.currentTarget.dataset.value); 
    }

    return (
      <Fragment>
        <nav className="menu">
            <ul>
                <li onClick={cambiarNombre.bind(this)}  data-id="1" data-value="Vehiculo ban">Vehiculo Ban</li>
                <li onClick={cambiarNombre.bind(this)}  data-id="2" data-value="Bus">Bus</li>
                <li onClick={cambiarNombre.bind(this)}  data-id="3" data-value="Helicoptero">Helicoptero</li>
                <li onClick={cambiarNombre.bind(this)}  data-id="4" data-value="Uber">Uber</li>
                <li onClick={cambiarNombre.bind(this)}  data-id="5" data-value="Taxi">Taxi</li>
                <li onClick={cambiarNombre.bind(this)}  data-id="6" data-value="Motocicleta">Motocicleta</li>
            </ul>
        </nav>
        <Saludo nombre={nombre}></Saludo>
      </Fragment>  
    )
}

export default Menu;