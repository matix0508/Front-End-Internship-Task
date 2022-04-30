import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./InternItem.module.scss";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classNames from "classnames";
import { EditButton } from "../EditButton/EditButton";

export const InternItem = ({ intern, idx }) => {
  console.log(idx)
  const styleColor = idx % 2 === 0 ? styles.InternItem_even : styles.InternItem_odd;
  
  return (
    <div className={classNames([styles.InternItem, styleColor])}>
      <div className={styles.InternItem__name}> {intern.name} </div>{" "}
      <EditButton  />
    </div>
  );
};
