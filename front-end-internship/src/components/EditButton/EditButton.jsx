import React from "react";
import styles from "./EditButton.module.scss";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export const EditButton = ({ intern_id }) => {
  return (
    <NavLink className={styles.EditButton} to={`/interns/${intern_id}`}>
      <div className={styles.EditButton__text}>Edit</div>
      <div className={styles.EditButton__icon}>
        <FontAwesomeIcon icon={faPen} />
      </div>
    </NavLink>
  );
};
