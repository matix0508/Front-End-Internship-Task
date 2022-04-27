import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { Form } from "../Form/Form";
import styles from "./EditIntern.module.scss";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditIntern = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch(`http://localhost:3001/interns/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      queryClient.refetchQueries(`intern${id}`);
      navigate("/");
    });
  };

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

  return (
    <div className={styles.EditIntern}>
      <div className={styles.EditIntern__back}>
        <NavLink to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
      </div>
      <Form data={data} onSubmit={onSubmit} />
    </div>
  );
};

export default EditIntern;
