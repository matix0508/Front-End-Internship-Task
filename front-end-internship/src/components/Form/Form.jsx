import React from "react";

import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";

export const Form = ({ name, email, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
      <label> Name </label> <input defaultValue={name} {...register("name")} />{" "}
      <label> Email </label>{" "}
      <input defaultValue={email} {...register("email")} />{" "}
      <button className={styles.Form__submit} type="submit"> Submit </button>
    </form>
  );
};
