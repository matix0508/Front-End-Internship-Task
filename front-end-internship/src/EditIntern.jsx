import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditIntern = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const { data, isLoading, isError } = useQuery(`intern${id}`, () =>
    fetch(`http://localhost:3001/interns/${id}`).then((res) => res.json())
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error :(</p>;
  }
  if (!data) {
    return <p>No data :/</p>;
  }

  // useEffect(() => {
  //     //TODO: get intern from REST api http://localhost:3001/interns/:id
  //     console.log(`I want to get intern with id: ${id}!`)
  // }, [id]);

  return (
    <div>
      <NavLink to="/"> Back to list </NavLink>{" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Name </label>{" "}
        <input defaultValue={data.name} {...register("name")} />
        <label> Email </label>{" "}
        <input defaultValue={data.email} {...register("email")} />
        <input type="submit" value="Submit" />
      </form>{" "}
    </div>
  );
};

export default EditIntern;
