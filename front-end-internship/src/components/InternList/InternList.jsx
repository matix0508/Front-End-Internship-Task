import React, { useEffect, useState } from "react";
import { InternItem } from "../InternItem/InternItem";
import { useQuery } from "react-query";
import styles from "./InternList.module.scss";

const InternList = () => {
  const {
    data: interns,
    isLoading,
    isError,
  } = useQuery("interns", () =>
    fetch("http://localhost:3001/interns").then((res) => res.json())
  );
  if (isLoading) {
    return <p> Loading... </p>;
  }

  if (isError) {
    return <p> Error: ( </p>;
  }
  if (!interns) {
    return <p> No data: /</p>;
  }

  return (
    <div className={styles.InternList}>
      {interns.map((u) => (
        <InternItem key={u.id} intern={u} />
      ))}
    </div>
  );
};

export default InternList;
