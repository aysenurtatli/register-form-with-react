import { useState } from 'react';
import { findInputError, isFormInvalid } from '../utilities'
import { useFormContext } from 'react-hook-form'
export const Input = ({ label, type, id, validation, name }) => {
  const {
    register,
    formState: { errors },
    } = useFormContext();
  const inputError = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputError)
  return(
    <div className='flex flex-col w-full gap-4'>
      <div className='flex justify-between'>
        <label htmlFor={id} className='font-medium capitalize text-indigo-900'>
          {label}
        </label>
          {isInvalid && (
            <InputError
             message={inputError.error.message}
             key={inputError.error.message}/>
          )}
      </div>
     <input 
        type={type}
        id={id}
        className='w-full p-3  border rounded-md border-indigo-200 bg-indigo-50 placeholder: opacity-60'
        {...register(name, validation)}
       />
    </div>
  )
}

const InputError = ({ message }) => {
  return (
    <div className='flex items-center gap-1 px-2 font-semibold text-indigo-800 bg-indigo-200 rounded-md'
    >
      {message}
    </div>
  )
}
