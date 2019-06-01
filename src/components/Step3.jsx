import React, { Component } from "react";
import { Form, Button, TextArea, Select } from "semantic-ui-react";

const goalsOptions = [
  { key: "us", text: "Understand", value: "understand" },
  { key: "uc", text: "Uncover", value: "uncover" },
  { key: "o", text: "Other", value: "other" }
];

const audienceOptions = [
  { key: "my", text: "MY", value: "my" },
  { key: "fl", text: "FL", value: "fl" },
  { key: "o", text: "Other", value: "other" }
];

const lifecycleOptions = [
    { key: "o", text: "One-off", value: "One-off" },
    { key: "s", text: "Series", value: "Series" },
    { key: "f", text: "Follow-up", value: "Follow-up" }
  ];

class Step3 extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;

    return (
      <Form color="green">
        <h1 className="ui centered">Step 3</h1>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        <h5>Goals</h5>
        <Form.Field>
          <Select
            label="Goals"
            options={goalsOptions}
            placeholder=""
            name="goals"
            value={values.goals}
            onChange={this.props.handleDropDownChange}
          />
        </Form.Field>
        <h5>Audience</h5>
        <Form.Field>
          <Select
            label="Audience"
            options={audienceOptions}
            placeholder=""
            name="audience"
            value={values.audience}
            onChange={this.props.handleDropDownChange}
          />
        </Form.Field>
        <h5>Lifecycle</h5>
        <Form.Field>
          <Select
            label="Lifecycle"
            options={lifecycleOptions}
            placeholder=""
            name="lifecycle"
            value={values.lifecycle}
            onChange={this.props.handleDropDownChange}
          />
        </Form.Field>
        <h5>Hypothesis Statement</h5>
        <Form.Field
          control={TextArea}
          style={{ minHeight: 150 }}
          placeholder="We know our audience is (curious about/doesn't know about/doesn't understand/would be interested to know) based on the following insights ____"
          value={values.hypothesis}
          onChange={this.props.handleChange("hypothesis")}
        />
      </Form>
    );
  }
}

export default Step3;
