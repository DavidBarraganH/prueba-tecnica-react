import {useState, useEffect}  from "react";

const useForm = (callback, validate) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
      };

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
      };

      const handleShowErrors = (event) => {
        setErrors(validate(values));
      };

      
    useEffect(() => {
        if (Object.keys(errors).length === 0  && isSubmitting){
            callback();
        }
      }, [errors]);
    

      return {
        values,
        errors,
        handleShowErrors,
        handleChange,
        handleSubmit
      }
};

export default useForm;