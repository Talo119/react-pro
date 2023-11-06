
import { FormikErrors, useFormik } from 'formik'
import * as Yup from 'yup';
import '../styles/styles.css'


interface FormValues {
    firstName: string;
    lastName: string,
    email: string;
}


export const FormikYupPage = () => {

    

    const {
        values, handleChange,
        handleSubmit, handleBlur, 
        errors, touched,
        getFieldProps
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values =>{
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(15, 'Debe tener 15 caracteres o menos.')
                            .required('Required'),
            
            lastName: Yup.string()
                            .max(15, 'Debe tener 15 caracteres o menos.')
                            .required('Required'),
            
            email: Yup.string()
                            .max(20, 'Debe tener 20 caracteres o menos.')
                            .required('Required')
                            .email()

        })
    });
  return (
    <div>
        <h1>Formik Yup Tutorial</h1>

        <form onSubmit={handleSubmit} noValidate>

            <label htmlFor="firstName">First Name</label>
            {/* Input con getFieldsProps (reemplaza el name, onBlur, Value y OnChange) */}
            <input 
                type="text"
                { ...getFieldProps('firstName') }
            />
            { touched.firstName && errors.firstName &&  <span>{ errors.firstName }</span>}

            <label htmlFor="lastName">Last Name</label>
            {/* Input con getFieldsProps (reemplaza el name, onBlur, Value y OnChange) */}
            <input 
                type="text"
                { ...getFieldProps('lastName') }
            />
            { touched.lastName && errors.lastName &&  <span>{ errors.lastName }</span>}

            <label htmlFor="email">Email Address</label>
            {/* Input sin getFieldsProps (con las propiedades name, onBlur, Value y OnChange) */}
            <input 
                type="email" 
                name="email"
                onBlur={ handleBlur }
                value={values.email}
                onChange={handleChange}
            />
            { touched.email && errors.email &&  <span>{ errors.email }</span>}

            <button type="submit">
                Submit
            </button>

        </form>
    </div>
  )
}
