import { Input } from './components/Input'
import { FormProvider, useForm } from 'react-hook-form'
import {
  nameValidation,
  lastNameValidation,
  emailValidation,
  passwordValidation,
  usernameValidation,
  countryValidation
} from './utilities/inputValidations'
import { useState } from 'react'

export const Form = () => {
    const methods = useForm()
    const [success, setSuccess] = useState(false)
  
    const onSubmit = methods.handleSubmit(data => {
      console.log(data)
      methods.reset()
      setSuccess(true)
    })
  
    return (
      <FormProvider {...methods}>
        <form
          onSubmit={e => e.preventDefault()}
          noValidate
          autoComplete="off"
          className="container my-10 bg-indigo-100 rounded-xl"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Input {...nameValidation} />
            <Input {...lastNameValidation} />
            <Input {...usernameValidation} />
            <Input {...emailValidation} />
            <Input {...passwordValidation} />
            <Input {...countryValidation} />

          </div>
          <div className="mt-5">
            {success && (
              <p className="flex items-center gap-1 mb-5 font-semibold text-teal-700"> Form has been submitted successfully
              </p>
            )}
            <button
              onClick={onSubmit}
              className="flex items-center gap-1 p-3 font-medium text-white bg-indigo-800 rounded-md hover:bg-indigo-900"
            >
              Submit Form
            </button>
          </div>
        </form>
      </FormProvider>
    )
  }