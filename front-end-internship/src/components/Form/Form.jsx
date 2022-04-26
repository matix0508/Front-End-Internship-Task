import React from 'react'

import { useForm } from 'react-hook-form';

export const Form = ({name, email, onSubmit}) => {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label> Name </label>{" "}
    <input defaultValue={name} {...register("name")} />{" "}
    <label> Email </label>{" "}
    <input defaultValue={email} {...register("email")} />{" "}
    <input type="submit" value="Submit" />
  </form>
  )
}
