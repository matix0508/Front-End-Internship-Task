import React from "react";
import { default as fieldStyle } from "./FormField.module.scss";
import { default as dateStyle } from "./FormFieldDate.module.scss";

export const FormField = ({
  register,
  label,
  error,
  data,
  validation,
  type,
  registerName,
  date,
}) => {
  const registerLabel =
    registerName !== undefined ? registerName : label.toLowerCase();
  const styles = date ? dateStyle : fieldStyle;
  return (
    <div className={styles.FormField}>
      <label> {label} * </label>
      <input
        defaultValue={data}
        {...register(registerLabel, {
          required: validation.required,
          pattern: validation.pattern,
          min: validation.min,
        })}
        type={type}
      />{" "}
      {error && <span role="alert"> {error.message} </span>}{" "}
    </div>
  );
};
