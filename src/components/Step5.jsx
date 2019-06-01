import React, { Component } from "react";
import { Form, Button, Checkbox, Radio } from "semantic-ui-react";

class Step5 extends Component {
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
        <h1 className="ui centered">Step 5</h1>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        <h5>Format</h5>
        <h5>Audio</h5>
        <Form.Field>
          <Checkbox
            label="Call in Show"
            value="Call in Show"
            checked={values.format.includes("Call in Show")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Audio Package"
            value="Audio Package"
            checked={values.format.includes("Audio Package")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="QA"
            value="QA"
            checked={values.format.includes("QA")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Reporter Debrief"
            value="Reporter Debrief"
            checked={values.format.includes("Reporter Debrief")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Newscast Item"
            value="Newscast Item"
            checked={values.format.includes("Newscast Item")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Postcard"
            value="Postcard"
            checked={values.format.includes("Postcard")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Reporter's Notebook"
            value="Reporter's Notebook"
            checked={values.format.includes("Reporter's Notebook")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Podcast"
            value="Podcast"
            checked={values.format.includes("Podcast")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <h5>Written</h5>
        <Form.Field>
          <Checkbox
            label="Short <500"
            value="Short <500"
            checked={values.format.includes("Short <500")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Long >800"
            value="Long >800"
            checked={values.format.includes("Long >800")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <h5>Video</h5>
        <Form.Field>
          <Checkbox
            label="Explainer"
            value="Explainer"
            checked={values.format.includes("Explainer")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Slideshow of Images"
            value="Slideshow of Images"
            checked={values.format.includes("Slideshow of Images")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Live"
            value="Live"
            checked={values.format.includes("Live")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <h5>Images</h5>
        <Form.Field>
          <Checkbox
            label="Stock"
            value="Stock"
            checked={values.format.includes("Stock")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Original"
            value="Original"
            checked={values.format.includes("Original")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <h5>Charts/InfoGraphics</h5>
        <Form.Field>
          <Checkbox
            label="Charts"
            value="Charts"
            checked={values.format.includes("Charts")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Infographic"
            value="Infographic"
            checked={values.format.includes("Infographic")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Other Design"
            value="Other Design"
            checked={values.format.includes("Other Design")}
            onChange={this.props.handleFormatGroupChange}
          />
        </Form.Field>
      </Form>
    );
  }
}

export default Step5;
