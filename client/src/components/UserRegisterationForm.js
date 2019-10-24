import React, { Component } from "react";
import { Button, Form, Grid, Header, Card } from "semantic-ui-react";

export class UserRegisterationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConformation: "",
      userSignUp: false,
      error: null,
      errorMessage: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
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
    e.preventDefault(e);
    const { password, passwordConformation } = this.state;
    if (password !== passwordConformation) {
      alert("passwords don't match");
    } else {
      const userRequest = {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
          name: this.state.name,
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
      name: "",
      email: "",
      password: "",
      confirmationPassword: "",
      hasErrors: false
    });
  };
  handleCancelClick = () => {
    window.location.href = "/";
  };
  clickLogin = () => {
    window.location.href = "/login";
  };

  render() {
    const { name, email, password, passwordConformation } = this.state;
    return (
      <Grid padded="horizontally" centered column={16}>
        <Grid.Column largeScreen="6" computer="10" mobile="16" tablet="10">
          <Header as="h1" textAlign="center">
            <Header.Content style={{ marginTop: "20px" }}>
              Register
            </Header.Content>
          </Header>
          <Card style={{ marginTop: "4em", padding: "2em", width: "100%" }}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field inline>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Name"
                  name="name"
                  label="Name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  fluid
                  icon="envelope"
                  iconPosition="left"
                  label="Email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
              </Form.Field>

              <Form.Field inline>
                <Form.Input
                  fluid
                  type="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  label="Password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  required
                />
              </Form.Field>
              <Form.Field inline>
                <Form.Input
                  fluid
                  type="password"
                  icon="lock"
                  iconPosition="left"
                  label="Password Confirmation"
                  placeholder="Password confirmation"
                  name="passwordConformation"
                  value={passwordConformation}
                  onChange={this.handleChange}
                  required
                />
              </Form.Field>

              <Button.Group fluid>
                <Button color="red" onClick={this.handleCancelClick}>
                  Cancel
                </Button>

                <Button color="orange" type="submit">
                  Submit
                </Button>
              </Button.Group>
            </Form>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserRegisterationForm;
