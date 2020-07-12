import React, {Fragment}  from "react";
import useForm from "./useForm";
import validate from './LoginFormValidationRules';

const Form = () => {

  

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleShowErrors,
      } = useForm(sendForm, validate);

    function sendForm() {
        console.log("ENVIANDO FORMULARIO");
    }

    return (
      <Fragment>
          <div className="formLayout">
            <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                    <label>Nombre Completo</label>     
                    <div className="control">

                    <input           
                        type="text" 
                        name="name" 
                        value={values.name || ''}
                        placeholder="Ingresa el nombre" 
                        onChange={handleChange}
                        onKeyUp={handleShowErrors}
                        />
                        
                        {errors.name && (
                            <p>{errors.name}</p>
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
                         onChange={handleChange} 
                         onKeyUp={handleShowErrors}    
                         value={values.email || ''} />

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
                        onChange={handleChange}
                        onKeyUp={handleShowErrors}
                        value={values.phone} 
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
                        onChange={handleChange}
                        onKeyUp={handleShowErrors}
                        value={values.age} 
                        />

                    {errors.age && (
                            <p>{errors.age}</p>
                    )}
                    </div>
                </div>
                
                <button type="submit"> Enviar</button>
            </form>
          </div>
        
      </Fragment>  
    )
}

export default Form;