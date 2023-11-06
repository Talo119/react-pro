import { FormEvent } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

export const RegisterPage = () => {
    
    const { 
        formData, 
        onChange, 
        name,
        email,
        password1,
        password2,
        resetForm,
        isValidEmail
    } = useForm({
        name:'',
        email:'',
        password1:'',
        password2:'',
    })

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData)
    }

  return (
    <div>
        <h1>RegisterPage</h1>

        <form onSubmit={(event) =>onSubmit(event)}>
            <input 
                type="text" 
                name="name" 
                value={name}
                onChange={onChange}
                placeholder='Name'
                className={ `${ name.trim().length <= 0 && 'has-error' }` }
             />
             { name.trim().length <= 0 && <span>Este campo es necesario</span>}

            <input 
                type='email'
                name="email"
                value={email}
                onChange={onChange}
                placeholder='Email'
                className={ `${!isValidEmail( email ) && 'has-Error'}` }
             />
             { !isValidEmail( email ) && <span>Email no es válido</span> }

            <input 
                type='password'
                name="password1" 
                value={password1}
                onChange={onChange}
                placeholder='Password'
             />
             { password1.trim().length <= 0 && <span>Este campo es necesario</span>}
             { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener mas de 6 caracteres.</span>}

            <input 
                type='password'
                name="password2" 
                value={password2}
                onChange={onChange}
                placeholder='Repeat Password'
             />
            { password2.trim().length <= 0 && <span>Este campo es necesario</span>}
            { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas no coinciden.</span>}

            <button type="submit">
                Create
            </button>
            <button type='button' onClick={resetForm}>
                Reset
            </button>
        </form>
    </div>
  )
}
