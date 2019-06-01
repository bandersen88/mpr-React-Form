import React, { Component } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";

class MainForm extends Component {
  state = {
    step: 1,
    description: "",
    beats: [],
    goals: "",
    audience: "",
    hypothesis: "",
    lifecycle: "",
    topicType: [],
    format: [],
    radioValue: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  handleRadioChange = (e, { value }) => this.setState({ radioValue: value });

  handleDropDownChange = (e, { name, value }) =>
    this.setState({ [name]: value });

  handleCheckBoxGroupChange = (e, { value }) => {
    let beats = [...this.state.beats];
    if (beats.indexOf(value) > -1) {
      beats = beats.filter(beat => beat !== value);
    } else {
      beats.push(value);
    }
    this.setState({ beats });
  };

  handleTopicGroupChange = (e, { value }) => {
    let topicType = [...this.state.topicType];
    if (topicType.indexOf(value) > -1) {
      topicType = topicType.filter(topic => topic !== value);
    } else {
      topicType.push(value);
    }
    this.setState({ topicType });
  };

  handleFormatGroupChange = (e, { value }) => {
    let format = [...this.state.format];
    if (format.indexOf(value) > -1) {
      format = format.filter(f => f !== value);
    } else {
      format.push(value);
    }
    this.setState({ format });
  };

  render() {
    const { step } = this.state;
    const {
      description,
      beats,
      goals,
      audience,
      hypothesis,
      lifecycle,
      topicType,
      format,
      radioValue
    } = this.state;
    const values = {
      description,
      beats,
      goals,
      audience,
      hypothesis,
      lifecycle,
      topicType,
      format,
      radioValue
    };
    switch (step) {
      case 1:
        return (
          <Step1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleDropDownChange={this.handleDropDownChange}
            handleRadioChange={this.handleRadioChange}
            handleCheckBoxGroupChange={this.handleCheckBoxGroupChange}
            values={values}
          />
        );
      case 2:
        return (
          <Step2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleCheckBoxGroupChange={this.handleCheckBoxGroupChange}
            values={values}
          />
        );
      case 3:
        return (
          <Step3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleDropDownChange={this.handleDropDownChange}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Step4
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleTopicGroupChange={this.handleTopicGroupChange}
            values={values}
          />
        );

      case 5:
        return (
          <Step5
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleFormatGroupChange={this.handleFormatGroupChange}
            values={values}
          />
        );
      case 6:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
    }
  }
}

export default MainForm;
