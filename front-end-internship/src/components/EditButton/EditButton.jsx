import React from "react";
import styles from "./EditButton.module.scss";
import { NavLink } from "react-router-dom";

export const EditButton = ({ intern_id }) => {
  return (
    <NavLink className={styles.EditButton} to={`/interns/${intern_id}`}>
      <div className={styles.EditButton__icon}>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 20H11C10.4 20 10 19.6 10 19C10 18.4 10.4 18 11 18H20C20.6 18 21 18.4 21 19C21 19.6 20.6 20 20 20ZM2.20002 20L6.20002 19C6.40002 19 6.50002 18.9 6.70002 18.7L19.2 6.2C19.5 5.9 19.7 5.6 19.9 5.2C20 4.8 20.1 4.4 20.1 4C20.1 3.6 20 3.2 19.9 2.8C19.8 2.4 19.5 2.1 19.2 1.8C18.9 1.5 18.6 1.3 18.2 1.1C17.1 0.599998 15.7 0.899998 14.8 1.8L2.30002 14.3C2.20002 14.4 2.10002 14.6 2.00002 14.8L1.00002 18.8C0.900024 19.1 1.00002 19.5 1.30002 19.7C1.50002 19.9 1.70002 20 2.00002 20C2.10002 20 2.20002 20 2.20002 20ZM16.2 3.2C16.5 2.9 17 2.8 17.4 3C17.5 3.1 17.7 3.1 17.8 3.2C17.9 3.3 18 3.4 18 3.6C18.1 3.7 18.1 3.9 18.1 4C18.1 4.1 18.1 4.3 18 4.4C17.9 4.5 17.9 4.7 17.8 4.8L5.50002 17.1L3.40002 17.6L3.90002 15.5L16.2 3.2Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className={styles.EditButton__text}>Edit</div>
    </NavLink>
  );
};
