import React, {useState, useEffect, Fragment}  from "react";
import Saludo from './Saludo';
import { connect } from 'react-redux';
import { getMenus } from '../actions/userAction';


const Menu = ({menu: {menus}, getMenus}) => {


  useEffect(() => {
    getMenus();
  }, [getMenus]);

    const [nombre, setNombre] = useState();

    const cambiarNombre = (e) => {
        setNombre(e.currentTarget.dataset.value); 
    }

    return (
      <Fragment>
        <nav className="menu">
            <ul>
              {menus.map(menu => 
                  <li onClick={cambiarNombre.bind(this)} key={menu.id} 
                  data-value={menu.name}>{menu.name}</li>
              )}
              
            </ul>
        </nav>
        <Saludo nombre={nombre || 'MEDIO DE TRANSPORTE'}></Saludo>
      </Fragment>  
    )
}

const mapStateToProps = state => ({
  menu:state.menu
});

export default connect(mapStateToProps, {getMenus})(Menu);