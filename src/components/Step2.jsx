import React, { Component } from "react";
import { Form, Button, Checkbox, Radio } from "semantic-ui-react";

class Step2 extends Component {
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
        <h1 className="ui centered">Step 2</h1>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        <h5>What Beat is this Story in?</h5>
        <Form.Field>
          
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Health Care"
            value="Health Care"
            checked={values.beats.includes("Health Care")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Housing"
            value="Housing"
            checked={values.beats.includes("Housing")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Politics"
            value="Politics"
            checked={values.beats.includes("Politics")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Elections"
            value="Elections"
            checked={values.beats.includes("Elections")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Policy"
            value="Policy"
            checked={values.beats.includes("Policy")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Aging"
            value="Aging"
            checked={values.beats.includes("Aging")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Water"
            value="Water"
            checked={values.beats.includes("Water")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Weather"
            value="Weather"
            checked={values.beats.includes("Weather")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Climate Change (weather)"
            value="Climate Change (weather)"
            checked={values.beats.includes("Climate Change (weather)")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Climate Change (other)"
            value="Climate Change (other)"
            checked={values.beats.includes("Climate Change (other)")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Agriculture"
            value="Agriculture"
            checked={values.beats.includes("Agriculture")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Race and Immigration"
            value="Race and Immigration"
            checked={values.beats.includes("Race and Immigration")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Criminal Justice/Disparities"
            value="Criminal Justice/Disparities"
            checked={values.beats.includes("Criminal Justice/Disparities")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Opiods"
            value="Opiods"
            checked={values.beats.includes("Opiods")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Public Safety"
            value="Public Safety"
            checked={values.beats.includes("Public Safety")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Courts"
            value="Courts"
            checked={values.beats.includes("Courts")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Police"
            value="Police"
            checked={values.beats.includes("Police")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Outdoors/Recreation"
            value="Outdoors/Recreation"
            checked={values.beats.includes("Outdoors/Recreation")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Arts and Culture"
            value="Arts and Culture"
            checked={values.beats.includes("Arts and Culture")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="k-12 Eduction (racial)"
            value="k-12 Eduction (racial)"
            checked={values.beats.includes("k-12 Eduction (racial)")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Sports"
            value="Sports"
            checked={values.beats.includes("Sports")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>

        
      </Form>
    );
  }
}

export default Step2;
