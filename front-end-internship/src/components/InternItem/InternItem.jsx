import React from "react";
import styles from "./InternItem.module.scss";
import classNames from "classnames";
import { EditButton } from "../EditButton/EditButton";

export const InternItem = ({ intern, idx }) => {
  console.log(idx)
  const styleColor = idx % 2 === 0 ? styles.InternItem_even : styles.InternItem_odd;
  
  return (
    <div className={classNames([styles.InternItem, styleColor])}>
      <div className={styles.InternItem__name}> {intern.name} </div>{" "}
      <EditButton intern_id={intern.id}  />
    </div>
  );
};
