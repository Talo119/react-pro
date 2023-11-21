import {Formik, Form} from 'formik'
import formJason from '../data/custom-form.json'
import { MySelectInput, MyTextInput } from '../components'
import * as Yup from 'yup';


const initialValues:{[key: string]:any} = {};
const requiredFields: {[key:string]:any} = {};

for (const input of formJason) {
    initialValues[input.name] = input.value

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es obligatorio')
        }

        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value, 'Valor minimo de 5.');
        }

        if (rule.type === 'email') {
            schema = schema.email('Email no valido.');
        }


        // ... otras reglas
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>
        <Formik
            initialValues={{
                name: ""
            }}
            onSubmit={ (values) => {
                console.log(values)
            } }
            validationSchema={validationSchema}
        >
            {
                (formik) => (
                    <Form>
                        {formJason.map( ({type, name, placeholder, label, options}) => {

                            if (type === 'input' || type === 'password' || type === 'email') {
                                return <MyTextInput
                                        key={name}
                                        label={label}
                                        name={name}
                                        placeholder={placeholder}
                                        type={(type as any)}
                                    />    
                            } else if (type === 'select') {
                                return (
                                    <MySelectInput
                                        key={name}
                                        label={label}
                                        name={name}
                                    >
                                        <option value="">Select an option</option>
                                        {
                                            options?.map( opt =>(
                                                <option value={opt}>{opt}</option>
                                            ))
                                        }
                                    </MySelectInput>
                                )
                            }

                            
                            throw new Error(`El type: ${type}, no es soportado.`)
                        })}
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
