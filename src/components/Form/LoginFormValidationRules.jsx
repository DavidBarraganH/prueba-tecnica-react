export default function validate(values) {
    let errors = {};

    if (!values.fullname) {
        errors.fullname = 'El campo nombre completo es requerido';
    }else if (!(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/i).test(values.fullname.trim())) {
        errors.fullname = 'Ingrsa un valor válido.';
    }

    if (!values.email) {
        errors.email = 'El Campo Correo es requerido';
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Ingresa un formato de correo válido.';
    }

    if (!values.phone) {
        errors.phone = 'El campo celular es requerido.';
    }else if(values.phone <= 0){
        errors.phone = 'El valor debe ser mayor a cero.';
    }else if (values.phone.length >=12) {
        errors.phone = 'El valor debe contener máximo 12 digitos.';
    }

    if (!values.age) {
        errors.age = 'El campo edad es requerido.';
    }else if(values.age == 0){
        errors.age = 'El valor debe ser mayor a cero.';
    }

    return errors;
  };