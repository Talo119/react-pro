import { ChangeEvent, useState } from "react";


export const useForm = <T>( initState: T ) => {

    const [formData, setFormData] = useState(initState);

    //const { name, email, password1, password2 } = registerData;

    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        //Como yo lo hice
        /* setRegisterData({
            ...registerData,
            [event.target.name]: event.target.value
        }); */

        //Como se hizo en el curso
        setFormData(prev =>({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

  return {
    ...formData,
    formData,
    onChange
  }
}
