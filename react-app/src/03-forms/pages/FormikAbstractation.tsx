
import { FormikErrors, useFormik, Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import '../styles/styles.css'
import {MyCheckBox, MySelectInput,MyTextInput} from '../components'


interface FormValues {
    firstName: string;
    lastName: string,
    email: string;
}


export const FormikAbstractation = () => {
    
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
                        <MyTextInput 
                            label="First Name" 
                            name="firstName"
                            placeholder="Carlos"
                        />
                        
                        <MyTextInput 
                            label="Last Name" 
                            name="lastName"
                            placeholder="Motiño"
                        />

                        <MyTextInput 
                            label="Email" 
                            name="email"
                            placeholder="carlos@google.com"
                        />                       
                        
                        <MySelectInput label="Job Type" name="jobType">
                            <option value=''>--Pick something--</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-senior'>IT Senior</option>
                            <option value='it-jr'>IT Junior</option>
                        </MySelectInput>

                        <MyCheckBox
                            label='Terms & Conditions'
                            name='terms'
                        />
                        
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
