import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from "../Form/Form";

const EditIntern = () => {
  const { id } = useParams();

  const onSubmit = (data) => console.log(data);

  const { data, isLoading, isError } = useQuery(`intern${id}`, () =>
    fetch(`http://localhost:3001/interns/${id}`).then((res) => res.json())
  );

  if (isLoading) {
    return <p> Loading... </p>;
  }
  if (isError) {
    return <p> Error: ( </p>;
  }
  if (!data) {
    return <p> No data: /</p>;
  }

  // useEffect(() => {
  //     //TODO: get intern from REST api http://localhost:3001/interns/:id
  //     console.log(`I want to get intern with id: ${id}!`)
  // }, [id]);

  return (
    <div>
      <NavLink to="/"> Back to list </NavLink>{" "}
      <Form name={data.name} email={data.email} onSubmit={onSubmit} />
    </div>
  );
};

export default EditIntern;
