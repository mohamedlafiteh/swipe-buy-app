import React, { Component } from "react";
import { getToken } from "../api/getToken";
import { Link } from "react-router-dom";
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
        <div className='container-fluid'>
          <div className='row no-gutter'>
            <div className='col-md-6 d-none d-md-flex bg-image'></div>
            <div className='col-md-6 bg-light '>
              <div className='login d-flex align-items-center py-5'>
                <div className='container form-container'>
                  <div className='row'>
                    <div className='col-lg-10 col-xl-7 mx-auto'>
                      <h3 className='display-4'>Sign In</h3>
                      <p className='text-muted mb-4'>
                        Enter your name and password
                      </p>
                      <form onSubmit={this.handleSubmit}>
                        <div className='form-group mb-3'>
                          <input
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            id='inputEmail'
                            type='email'
                            placeholder='Email address'
                            required=''
                            autofocus=''
                            className='form-control rounded-pill border-0 shadow-sm px-4'
                          />
                        </div>
                        <div className='form-group mb-3'>
                          <input
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                            id='inputPassword'
                            type='password'
                            placeholder='Password'
                            required=''
                            className='form-control rounded-pill border-0 shadow-sm px-4 text-primary'
                          />
                        </div>
                        <div className='custom-control custom-checkbox mb-3'>
                          <input
                            id='customCheck1'
                            type='checkbox'
                            checked
                            className='custom-control-input'
                          />
                          <label
                            for='customCheck1'
                            className='custom-control-label'
                          >
                            Remember password
                          </label>
                        </div>
                        <button
                          onClick={this.handleSubmit}
                          type='submit'
                          className='btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm'
                        >
                          Sign in
                        </button>
                        <div className='text-center d-flex justify-content-between mt-4'>
                          <p>
                            Don't have account?{" "}
                            <Link to='/sign-up-user'>
                              <a href='#' className='font-italic text-muted'>
                                <u>Sign Up</u>
                              </a>
                            </Link>
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
