
import { FormikErrors, useFormik, Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import '../styles/styles.css'


interface FormValues {
    firstName: string;
    lastName: string,
    email: string;
}


export const FormikComponents = () => {
    
  return (
    <div>
        <h1>Formik Components</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType:''
            }}
            onSubmit={ (values) =>{
                console.log(values)
            } }
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                                    .max(15, 'Debe tener 15 caracteres o menos.')
                                    .required('Required'),
                    
                    lastName: Yup.string()
                                    .max(15, 'Debe tener 15 caracteres o menos.')
                                    .required('Required'),
                    
                    email: Yup.string()
                                    .max(20, 'Debe tener 20 caracteres o menos.')
                                    .required('Required')
                                    .email(),
                    terms: Yup.boolean()
                                .oneOf([true],'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                                    .notOneOf(['it-jr'],'Esta opcion no es permitida')
                                    .required('Required')
                })
            }
        >
            {
                (formik) => (
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field name='firstName' type='text' />
                        <ErrorMessage name='firstName' component='span'/>

                        <label htmlFor="lastName">Last Name</label>
                        <Field name='lastName' type='text' />
                        <ErrorMessage name='lastName'component='span' />

                        <label htmlFor="email">Email Address</label>
                        <Field name='email' type='text' />
                        <ErrorMessage name='email'component='span' />                        

                        <label htmlFor="jobType">Job Type</label>
                        <Field name='jobType' as='select'>
                            <option value=''>--Pick something--</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-senior'>IT Senior</option>
                            <option value='it-jr'>IT Junior</option>
                        </Field>
                        <ErrorMessage name='jobType'component='span' />

                        <label>
                            <Field name='terms' type='checkbox' />
                            Terms and conditions
                        </label>
                        <ErrorMessage name='terms'component='span' />

                        <button type="submit">
                            Submit
                        </button>

                    </Form>
                )
            }            
        </Formik>

        
    </div>
  )
}
