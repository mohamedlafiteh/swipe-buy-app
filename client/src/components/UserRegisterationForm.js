import React, { Component } from "react";
import { Button, Form, Grid, Header, Card } from "semantic-ui-react";

class UserRegisterationForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConformation: "",
      address: "",
      city: "",
      country: "",
      phone: "",
      userSignUp: false,
      error: null,
      errorMessage: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.lastName);
  };

  handleErrors(response) {
    return response.json().then(json => {
      if (!response.ok) {
        throw json.message;
      } else {
        return json;
      }
    });
  }

  handleSubmit = e => {
    console.log("================>", e);
    e.preventDefault();
    const { password, passwordConformation } = this.state;
    if (password !== passwordConformation) {
      alert("passwords don't match");
    } else {
      const userRequest = {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          country: this.state.country,
          phone: this.state.phone,
          address: this.state.address,
          city: this.state.city,
          password: this.state.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      };
      fetch("http://localhost:3500/auth/register", userRequest)
        .then(this.handleErrors)
        .then(this.resetForm)
        .catch(error => {
          this.setState({
            error: true,
            errorMessage: error
          });
        });
    }
  };
  resetForm = () => {
    this.setState({
      userSignUp: true,
      email: "",
      firstName: "",
      lastName: "",
      country: "",
      phone: "",
      address: "",
      city: "",
      password: "",
      passwordConformation: "",
      hasErrors: false
    });
  };
  handleCancelClick = () => {
    window.location.href = "/";
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      passwordConformation,
      city,
      address,
      phone,
      country
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} centered>
        <Header as="h1" textAlign="center">
          <Header.Content style={{ marginTop: "2em" }}>Register</Header.Content>
        </Header>
        <Form.Group>
          <Form.Input
            fluid
            icon="user"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            required
            label="First name"
            placeholder="First Name"
            width={3}
          />
          <Form.Input
            fluid
            icon="user"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
            required
            label="Last name"
            placeholder="Last name"
            placeholder="Last name"
            width={3}
          />
          <Form.Input
            fluid
            label="City"
            placeholder="City"
            name="city"
            value={city}
            onChange={this.handleChange}
            required
            width={3}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Country"
            placeholder="Country"
            name="country"
            value={country}
            onChange={this.handleChange}
            required
            width={2}
          />
          <Form.Input
            label="Address"
            placeholder="Address"
            name="address"
            value={address}
            onChange={this.handleChange}
            required
            width={4}
          />
          <Form.Input
            label="Phone number"
            placeholder="Phone number"
            name="phone"
            value={phone}
            onChange={this.handleChange}
            required
            width={3}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            fluid
            type="password"
            icon="lock"
            placeholder="Password"
            label="Password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
            width={3}
          />
          <Form.Input
            fluid
            type="password"
            icon="lock"
            label="Password Confirmation"
            placeholder="Password confirmation"
            name="passwordConformation"
            value={passwordConformation}
            onChange={this.handleChange}
            required
            width={3}
          />
          <Form.Input
            fluid
            icon="envelope"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
            label="Email"
            placeholder="Email"
            width={3}
          />
        </Form.Group>

        <Button.Group fluid>
          <Button color="red" onClick={this.handleCancelClick}>
            Cancel
          </Button>

          <Button onSubmit={this.handleSubmit} color="orange" type="submit">
            Submit
          </Button>
        </Button.Group>
      </Form>
    );
  }
}

export default UserRegisterationForm;
