import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./InternItem.module.scss";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const InternItem = ({ intern }) => {
  
  return (
    <div className={styles.InternItem}>
      <div className={styles.InternItem__name}> {intern.name} </div>{" "}
      <div className={styles.InternItem__edit}>
        {" "}
        <NavLink to={`/interns/${intern.id}`}> <FontAwesomeIcon icon={faPen} color={styles.InternItem__edit.color} /> </NavLink>
      </div>
    </div>
  );
};
