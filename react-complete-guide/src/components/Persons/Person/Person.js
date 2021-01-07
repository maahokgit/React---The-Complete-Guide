import React, { Component } from "react";
import PropTypes from "prop-types";

import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import styles from "./Person.module.css";

class Person extends Component {
  constructor(props) {
    super();
    this.inputElementRef = React.createRef();
  }
  
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering");
    return (
      <Aux>
        {/* <div className={styles.Person}> */}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
        {/* </div> */}
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};
export default withClass(Person, styles.Person);
