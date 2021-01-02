import React, { useEffect } from "react";
import styles from "./Cockpit.module.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });
  
  const classes = [];
  let btnClass = [styles.button];

  if (props.showPersons) {
    btnClass.push(styles.Red);
  }

  if (props.persons.length <= 2) {
    classes.push("red");
  }

  if (props.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className={styles.Cockpit}>
      {props.title}
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button
        className={btnClass.join(" ")}
        alt={props.showPersons.toString()}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
