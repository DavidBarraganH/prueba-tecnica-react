export default function validate(values) {
    let errors = {};

    if (!values.name) {
        errors.name = 'El campo nombre es requerido';
    }else if (!(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/i).test(values.name.trim())) {
        errors.name = 'Ingrsa un valor válido.';
    }

    if (!values.email) {
        errors.email = 'El Campo Correo es requerido';
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Ingresa un formato de correo válido.';
    }

    if (!values.phone) {
        errors.phone = 'El campo celular es requerido.';
    }else if(values.phone == 0){
        errors.phone = 'El valor debe ser mayor a cero.';
    }else if (values.phone.length !== 10) {
        errors.phone = 'El valor debe contener 10 digitos';
    }

    if (!values.age) {
        errors.age = 'El campo edad es requerido.';
    }else if(values.age == 0){
        errors.age = 'El valor debe ser mayor a cero.';
    }

    return errors;
  };