import { FormEvent } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

export const RegisterPage = () => {

    const { formData, onChange, name,email,password1,password2 } = useForm({
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
             />
            <input 
                type='email'
                name="email"
                value={email}
                onChange={onChange}
                placeholder='Email'
             />
            <input 
                type='password'
                name="password1" 
                value={password1}
                onChange={onChange}
                placeholder='Password'
             />
            <input 
                type='password'
                name="password2" 
                value={password2}
                onChange={onChange}
                placeholder='Repeat Password'
             />

            <button type="submit">
                Create
            </button>
        </form>
    </div>
  )
}
