import React, { Component } from "react";
import { Form, Input, Button, Segment, Grid, Header } from "semantic-ui-react";
import { getToken } from "../api/getToken";

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loginError: null
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    getToken(email, password)
      .then(res => {
        sessionStorage.setItem("token", res.token);
        sessionStorage.setItem("userName", res.user.name);
        window.location.href = "/";
      })
      .catch(err => {
        this.setState({
          loginError: true
        });
      });
  };
  render() {
    const { email, password } = this.state;
    return (
      <Grid padded="horizontally" centered columns={16}>
        <Grid.Column largeScreen="6" computer="10" mobile="16" tablet="10">
          <Header as="h2" textAlign="center">
            Login to your account
          </Header>

          <Segment secondary>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Form.Field inline>
                <Input
                  onChange={this.handleChange}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail Address"
                  name="email"
                  value={email}
                  type="email"
                />
              </Form.Field>

              <Form.Field inline>
                <Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Button color="red" fluid type="submit" content="Login" />
            </Form>
          </Segment>
          <Segment size="small" secondary textAlign="center"></Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginForm;
