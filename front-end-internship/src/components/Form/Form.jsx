import React from "react";

import { useForm } from "react-hook-form";
import { FormField } from "../FormField/FormField";
import styles from "./Form.module.scss";

export const Form = ({ data, onSubmit }) => {
  const {
    handleSubmit,
    formState: { errors },
    setFocus,
    watch,
    register,
  } = useForm();

  React.useEffect(() => {
    setFocus("name");
    if (errors.internshipEnd) {
      setFocus("internshipEnd");
    }
    if (errors.internshipStart) {
      setFocus("internshipStart");
    }
    if (errors.email) {
      setFocus("email");
    }
    if (errors.name) {
      setFocus("name");
    }
  });

  const watchStart = watch("internshipStart");
  console.log(watchStart);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
      <FormField
      register={register}
        label={"Name"}
        data={data.name}
        error={errors.name}
        validation={{
          required: {
            value: true,
            message: "Name is required",
          },
        }}
      />
      <FormField
      register={register}
        label={"Email"}
        data={data.email}
        error={errors.email}
        type={"email"}
        validation={{
          required: {
            value: true,
            message: "Email is required",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address",
          },
        }}
      />
      <FormField
      register={register}
        label={"Internship Start"}
        data={data.internshipStart}
        error={errors.internshipStart}
        type={"date"}
        validation={{
          required: {
            value: true,
            message: "Internship start date is required",
          },
        }}
        registerName={"internshipStart"}
      />
      <FormField
      register={register}
        label={"Internship End"}
        data={data.internshipEnd}
        error={errors.internshipEnd}
        type={"date"}
        registerName={"internshipEnd"}
        validation={{
          required: {
            value: true,
            message: "Internship end date is required",
          },
          min: {
            value: watchStart,
            message: "Internship end date must be after start date",
          }
        }}
      />
      <button className={styles.Form__submit} type="submit">Submit</button>
    </form>
  );
};
