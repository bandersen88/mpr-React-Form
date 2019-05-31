import React, { Component } from 'react';
import Step1 from './Step1';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';

class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        description: '',
        age: '',
        city: '',
        country: '',
        name: '',
        email: '',
        gender: '',
        radioValue: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    handleRadioChange = (e, { value }) => this.setState({ radioValue: value });

    handleDropDownChange = (e, { name, value }) => this.setState({ [name]: value });
    
    render(){
        const {step} = this.state;
        const { firstName, lastName, description, age, city, country, name, email, gender, radioValue  } = this.state;
        // const values = { firstName, lastName, description, age, city, country, gender };
        const values = { name, email, gender, radioValue };
        switch(step) {
        case 1:
            return <Step1 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    handleDropDownChange = {this.handleDropDownChange}
                    handleRadioChange = {this.handleRadioChange}
                    values={values}
                    />
        case 2:
            return <PersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 4:
            return <Success />
        }
    }
}

export default MainForm;