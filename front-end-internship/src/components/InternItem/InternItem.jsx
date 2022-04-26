import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./InternItem.module.scss";

export const InternItem = ({ intern }) => {
  return (
    <div className={styles.InternItem}>
      <div className={styles.InternItem__name}>{intern.name}</div>
      <div className={styles.InternItem__edit}><NavLink to={`/interns/${intern.id}`}>Edit</NavLink></div>
    </div>
  );
};
