import React, { useEffect, useRef } from "react";
import styles from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context"

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // setTimeout(() => {
    //   alert("Saved data to cloud!");
    // }, 1000);
    toggleBtnRef.current.click();
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

  if (props.personsLength <= 2) {
    classes.push("red");
  }

  if (props.personsLength<= 1) {
    classes.push("bold");
  }

  return (
    <div className={styles.Cockpit}>
      {props.title}
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button
        ref={toggleBtnRef}
        className={btnClass.join(" ")}
        alt={props.showPersons.toString()}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {(context)=> <button onClick={context.login}>Log In</button>}
      </AuthContext.Consumer>
      
    </div>
  );
};

export default React.memo(Cockpit);
