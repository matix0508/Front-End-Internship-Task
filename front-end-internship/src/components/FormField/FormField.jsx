import React from "react";
import { useForm } from "react-hook-form";
import styles from "./FormField.module.scss";

export const FormField = ({
  register,
  label,
  error,
  data,
  validation,
  type,
  registerName,
}) => {
    const registerLabel = registerName !== undefined ? registerName : label.toLowerCase();
  return (
    <div className={styles.FormField}>
      <label> {label} </label>
      {error && <span role="alert"> {error.message} </span>}{" "}
      <input
        defaultValue={data}
        {...register(registerLabel, {
          required: validation.required,
          pattern: validation.pattern,
          min: validation.min,
        })}
        type={type}
      />{" "}
    </div>
  );
};
