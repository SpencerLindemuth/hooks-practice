import {useState} from 'react'

export const useForm = (params) => {
    const [values, setValues] = useState(params)

    return [
        values, e => {
          setValues({
            ...values,
            [e.target.name]: e.target.value
          });
        }
      ]
}