import React, { Component } from "react";
import { Form, Button, Checkbox, Radio } from "semantic-ui-react";

class Step4 extends Component {
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
        <h1 className="ui centered">Step 4</h1>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>

        <h5>Topic Type</h5>

        <Form.Field>
          <Checkbox
            label="MN Identity"
            value="MN Identity"
            checked={values.topicType.includes("MN Identity")}
            onChange={this.props.handleTopicGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Local Pride"
            value="Local Pride"
            checked={values.topicType.includes("Local Pride")}
            onChange={this.props.handleTopicGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Curiosity Pieces"
            value="Curiosity Pieces"
            checked={values.topicType.includes("Curiosity Pieces")}
            onChange={this.props.handleTopicGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Community Issues"
            value="Community Issues"
            checked={values.topicType.includes("Community Issues")}
            onChange={this.props.handleTopicGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Community Indignation"
            value="Community Indignation"
            checked={values.topicType.includes("Community Indignation")}
            onChange={this.props.handleTopicGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Triumph Story"
            value="Triumph Story"
            checked={values.topicType.includes("Triumph Story")}
            onChange={this.props.handleTopicGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Sadness Story"
            value="Sadness Story"
            checked={values.topicType.includes("Sadness Story")}
            onChange={this.props.handleTopicGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Celebrating"
            value="Celebrating"
            checked={values.topicType.includes("Celebrating")}
            onChange={this.props.handleTopicGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Transparency"
            value="Transparency"
            checked={values.topicType.includes("Transparency")}
            onChange={this.props.handleTopicGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Data/Statistics"
            value="Data/Statistics"
            checked={values.topicType.includes("Data/Statistics")}
            onChange={this.props.handleTopicGroupChange}
          />
        </Form.Field>
      </Form>
    );
  }
}

export default Step4;
