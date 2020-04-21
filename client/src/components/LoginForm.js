import React, { Component } from "react";
import { getToken } from "../api/getToken";
import "../styles/login.css";

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
      <>
        <div class='container-fluid'>
          <div class='row no-gutter'>
            <div class='col-md-6 d-none d-md-flex bg-image'></div>
            <div class='col-md-6 bg-light '>
              <div class='login d-flex align-items-center py-5'>
                <div class='container form-container'>
                  <div class='row'>
                    <div class='col-lg-10 col-xl-7 mx-auto'>
                      <h3 class='display-4'>Sign In</h3>
                      <p class='text-muted mb-4'>
                        Enter your name and password
                      </p>
                      <form onSubmit={this.handleSubmit}>
                        <div class='form-group mb-3'>
                          <input
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            id='inputEmail'
                            type='email'
                            placeholder='Email address'
                            required=''
                            autofocus=''
                            class='form-control rounded-pill border-0 shadow-sm px-4'
                          />
                        </div>
                        <div class='form-group mb-3'>
                          <input
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                            id='inputPassword'
                            type='password'
                            placeholder='Password'
                            required=''
                            class='form-control rounded-pill border-0 shadow-sm px-4 text-primary'
                          />
                        </div>
                        <div class='custom-control custom-checkbox mb-3'>
                          <input
                            id='customCheck1'
                            type='checkbox'
                            checked
                            class='custom-control-input'
                          />
                          <label
                            for='customCheck1'
                            class='custom-control-label'
                          >
                            Remember password
                          </label>
                        </div>
                        <button
                          onClick={this.handleSubmit}
                          type='submit'
                          class='btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm'
                        >
                          Sign in
                        </button>
                        <div class='text-center d-flex justify-content-between mt-4'>
                          <p>
                            Don't have account?{" "}
                            <a href='#' class='font-italic text-muted'>
                              <u>Sign Up</u>
                            </a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginForm;

{
  /* <Grid padded="horizontally" centered columns={16}>
              <Grid.Column largeScreen="6" computer="10" mobile="16" tablet="10">
                <Header
                  as="h2"
                  textAlign="center"
                  style={{ marginTop: ".5em", padding: "1em" }}
                >
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
            </Grid> */
}
