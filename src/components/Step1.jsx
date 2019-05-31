import React, { Component } from "react";
import { Form, Button, Radio, Select } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" }
];

class Step1 extends Component {
  state = { name: "", email: "", gender: "", radioValue: "that" };
  handleRadioChange = (e, { value }) => this.setState({ radioValue: value });

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { name, email, gender, radioValue } = this.state;
    const { values } = this.props;
    console.log("Values: ", values);
    return (
      <Form color="green">
        <h1 className="ui centered">Story Description</h1>
        {/* <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={this.props.handleChange("firstName")}
            defaultValue={values.firstName}
          />
        </Form.Field> */}
        <Form.Field>
          <Select
            label="Gender"
            options={options}
            placeholder="Gender"
            name="gender"
            value={gender}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Group>
          <Form.Input
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Form.Button content="Submit" />
        </Form.Group>
        <Form.Field>
          Selected value: <b>{radioValue}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label="Choose this"
            name="radioGroup"
            value="this"
            checked={radioValue === "this"}
            onChange={this.handleRadioChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Or that"
            name="radioGroup"
            value="that"
            checked={radioValue === "that"}
            onChange={this.handleRadioChange}
          />
        </Form.Field>
        {/* <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={this.props.handleChange("lastName")}
            defaultValue={values.lastName}
          />
        </Form.Field>
        <Form.TextArea
          label="Tell us a bit about the story idea"
          placeholder="Text here..."
          onChange={this.props.handleChange("description")}
          defaultValue={values.description}
        /> */}

        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default Step1;
