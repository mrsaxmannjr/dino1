import React from "react";
import { Form } from "./Form.js";

export class Aside extends React.Component {
  render() {
    return (
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <Form getFormData={this.props.getFormData} />
      </aside>
    )
  }
} 