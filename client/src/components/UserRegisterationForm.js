import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";
import CountriesSelection from "./CountriesSelection";

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
    console.log(this.state.firstName);
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

  countryValue = country => {
    console.log("mooo " + country);
    this.setState({
      country: country
    });
  };

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
      <>
        <header class='header'>
          <nav class='navbar navbar-expand-lg navbar-light py-3'></nav>
        </header>

        <div class='container'>
          <div class='row py-5 mt-4 align-items-center'>
            <div class='col-md-5 pr-lg-5 mb-5 mb-md-0'>
              <img
                src='https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg'
                alt=''
                class='img-fluid mb-3 d-none d-md-block'
              />
              <h1>Create an Account</h1>
              <p class='font-italic text-muted mb-0'>
                You will experience the best shopping on Swipe-buy.
              </p>
              <p class='font-italic text-muted'>
                This is the link for mor information{" "}
                <a href='#' class='text-muted'>
                  <u>About-Swipe-buy</u>
                </a>
              </p>
            </div>

            <div class='col-md-7 col-lg-6 ml-auto register-form'>
              <form action='#' onSubmit={this.handleSubmit}>
                <div class='row'>
                  <div class='input-group col-lg-6 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-user text-muted'></i>
                      </span>
                    </div>
                    <input
                      name='firstName'
                      value={firstName}
                      onChange={this.handleChange}
                      id='firstName'
                      type='text'
                      placeholder='First Name'
                      class='form-control bg-white border-left-0 border-md'
                    />
                  </div>
                  <div class='input-group col-lg-6 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-user text-muted'></i>
                      </span>
                    </div>
                    <input
                      id='lastName'
                      type='text'
                      name='lastName'
                      value={lastName}
                      onChange={this.handleChange}
                      placeholder='Last Name'
                      class='form-control bg-white border-left-0 border-md'
                    />
                  </div>
                  <div class='input-group col-lg-12 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-envelope text-muted'></i>
                      </span>
                    </div>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      value={email}
                      onChange={this.handleChange}
                      placeholder='Email Address'
                      class='form-control bg-white border-left-0 border-md'
                    />
                  </div>
                  <div class='input-group col-lg-12 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-phone-square text-muted'></i>
                      </span>
                    </div>
                    <select
                      id='countryCode'
                      name='countryCode'
                      style={{ maxWidth: "80px" }}
                      class='custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted'
                    >
                      <option value=''>+12</option>
                      <option value=''>+10</option>
                      <option value=''>+15</option>
                      <option value=''>+18</option>
                    </select>
                    <input
                      id='phoneNumber'
                      type='tel'
                      name='phone'
                      value={phone}
                      onChange={this.handleChange}
                      placeholder='Phone Number'
                      class='form-control bg-white border-md border-left-0 pl-3'
                    />
                  </div>
                  .
                  <div class='input-group col-lg-12 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-black-tie text-muted'></i>
                      </span>
                    </div>

                    <CountriesSelection countryValue={this.countryValue} />
                  </div>
                  <div class='input-group col-lg-6 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-lock text-muted'></i>
                      </span>
                    </div>
                    <input
                      id='password'
                      type='password'
                      name='password'
                      value={password}
                      onChange={this.handleChange}
                      placeholder='Password'
                      class='form-control bg-white border-left-0 border-md'
                    />
                  </div>
                  <div class='input-group col-lg-6 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-lock text-muted'></i>
                      </span>
                    </div>
                    <input
                      id='passwordConfirmation'
                      type='text'
                      name='passwordConformation'
                      value={passwordConformation}
                      onChange={this.handleChange}
                      placeholder='Confirm Password'
                      class='form-control bg-white border-left-0 border-md'
                    />
                  </div>
                  <div class='form-group col-lg-12 mx-auto mb-0'>
                    <a href='#' class='btn btn-primary btn-block py-2'>
                      <span
                        onSubmit={this.handleSubmit}
                        class='font-weight-bold'
                      >
                        Create your account
                      </span>
                    </a>
                  </div>
                  <div class='form-group col-lg-12 mx-auto d-flex align-items-center my-4'>
                    <div class='border-bottom w-100 ml-5'></div>
                    <span class='px-2 small text-muted font-weight-bold text-muted'>
                      OR
                    </span>
                    <div class='border-bottom w-100 mr-5'></div>
                  </div>
                  <div class='form-group col-lg-12 mx-auto'>
                    <a
                      href='#'
                      class='btn btn-primary btn-block py-2 btn-facebook'
                    >
                      <i class='fa fa-facebook-f mr-2'></i>
                      <span class='font-weight-bold'>
                        Continue with Facebook
                      </span>
                    </a>
                    <a
                      href='#'
                      class='btn btn-primary btn-block py-2 btn-twitter'
                    >
                      <i class='fa fa-twitter mr-2'></i>
                      <span class='font-weight-bold'>
                        Continue with Twitter
                      </span>
                    </a>
                  </div>
                  <div class='text-center w-100'>
                    <p class='text-muted font-weight-bold'>
                      Already Registered?{" "}
                      <a href='#' class='text-primary ml-2'>
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserRegisterationForm;

{
  /* 
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
                          <Button color="red" as={Link} to="/">
                            Cancel
          </Button>

                          <Button onSubmit={this.handleSubmit} color="orange" type="submit">
                            Submit
          </Button>
                        </Button.Group>
                      </Form> */
}
