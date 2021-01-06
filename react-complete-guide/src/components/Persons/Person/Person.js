import React, { Component } from "react";

import Aux from "../../../hoc/Aux";
import styles from "./Person.module.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering");
    return (
      <Aux className={styles.Person}>
        <div className={styles.Person}>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I'm {this.props.age} years old!
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </Aux>
    );
  }
}

export default Person;
