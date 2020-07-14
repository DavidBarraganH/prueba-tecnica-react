import React, {useState, Fragment}  from "react";
import validate from './LoginFormValidationRules';
import { connect, useSelector } from 'react-redux';

import { addUser } from '../../actions/userAction';
import Popup from '../Popup';

const Form = ( { addUser }) => {

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [afterSending, setAfterSending] = useState(false);
    const [responseText, setResponseText] = useState(false);

    const respuesta = useSelector(state => state.menu);

    const [formData, setFormData] = useState(
        {
            fullname: "", phone: '', email: "", age: ''
        },
        []
    );


    
  
    
    const { fullname, phone, email, age } = formData;

    const onChange =  e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    const onSubmit =  async e => {
        e.preventDefault();
     
        setErrors(validate(formData));
            setIsLoading(true);
            setAfterSending(true);
        if(Object.keys(validate(formData)).length  == 0)
        {
            let strEmail = email.split('@');
            let nickname = strEmail;
            formData["nickname"] = nickname[0];
            
            addUser(formData)

            setTimeout(function(){
                setIsLoading(false);
             }, 3000);
             setTimeout(function(){
                setAfterSending(false);
             }, 9000);
        
        }else{
            setIsLoading(false);
            setAfterSending(false);
        }
    };

    const handleShowErrors = (event) => {
        setAfterSending(false);
        setErrors(validate(formData));
    };
   
      function Mensajes(props) {
        const isLoggedIn = props.isLoggedIn;

        if(afterSending == true)
        {
            if (isLoggedIn.error.status == "success"  || isLoggedIn.error.status == "error" )  {
      
                setResponseText(isLoggedIn.error)
                setTimeout(function(){
                    setIsLoading(false);
                 }, 3000);
            }

            if(isLoggedIn.error.status == "success")
            {
                setTimeout(function(){
                    setFormData({  fullname: "", phone: '', email: "", age: '' });
                 }, 2000);
              
            } 
    
        }
       
       return "";
      }

      function Loading(){
        return <div className="Cargando">Espere por favor <span>... .... ...</span></div>
      }

    return (

      <Fragment>

          <div className="formLayout">

                    <Mensajes isLoggedIn = {respuesta}></Mensajes>

                    {isLoading && (
                           <Loading />
                    )}

                    {afterSending && (
                       <Popup responseData = { responseText } /> 
                    )}
        
            <form 
                 onSubmit={e => {
                    onSubmit(e);
                }} 
            >
                <div className="field">
                    <label>Nombre Completo</label>     
                    <div className="control">

                    <input           
                        type="text" 
                        name="fullname" 
                        value={fullname || ''}
                        placeholder="Ingresa el nombre completo" 
                        onChange={e => onChange(e)}
                        onKeyUp={handleShowErrors}
                        />
                        
                        {errors.fullname && (
                            <p>{errors.fullname}</p>
                        )}

                    </div>
                </div>

                <div className="field">
                    <label>Email</label>
                    <div className="control">
                        <input        
                         type="email" 
                         name="email"
                         placeholder="example@example.com" 
                         onChange={e => onChange(e)}
                         onKeyUp={handleShowErrors}    
                         value={email || ''} />

                        {errors.email && (
                            <p>{errors.email}</p>
                        )}
                    </div>
                </div>

                <div className="field">            
                    <label>Celular</label>
                    <div className="control">
                    <input     
                        type="number" 
                        name="phone" 
                        placeholder="Ingresa un teléfono" 
                        onChange={e => onChange(e)}
                        onKeyUp={handleShowErrors}
                        value={phone} 
                        />

                    {errors.phone && (
                            <p>{errors.phone}</p>
                    )}
                    </div>        
                </div>

                <div className="field"> 
                    <label>Edad</label>
                    <div className="control">
                    <input          
                        type="number" 
                        name="age" 
                        placeholder="Ingresa la edad" 
                        onChange={e => onChange(e)}
                        onKeyUp={handleShowErrors}
                        value={age} 
                        />

                    {errors.age && (
                            <p>{errors.age}</p>
                    )}
                    </div>
                </div>
                
                <button className ="submit" type="submit"> Enviar</button>
            </form>
          </div>
        
      </Fragment>  
    )
}



export default connect(null, { addUser })(Form);