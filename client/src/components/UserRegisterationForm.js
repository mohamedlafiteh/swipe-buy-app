import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";

class UserRegisterationForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConformation: "",
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
                    <select
                      onChange={this.handleChange}
                      id='country'
                      name='country'
                      value={this.state.country}
                      class='form-control custom-select bg-white border-left-0 border-md'
                    >
                      <option value='select'>Select Your Country</option>
                      <option value='Afganistan'>Afghanistan</option>
                      <option value='Albania'>Albania</option>
                      <option value='Algeria'>Algeria</option>
                      <option value='American Samoa'>American Samoa</option>
                      <option value='Andorra'>Andorra</option>
                      <option value='Angola'>Angola</option>
                      <option value='Anguilla'>Anguilla</option>
                      <option value='Antigua & Barbuda'>
                        Antigua & Barbuda
                      </option>
                      <option value='Argentina'>Argentina</option>
                      <option value='Armenia'>Armenia</option>
                      <option value='Aruba'>Aruba</option>
                      <option value='Australia'>Australia</option>
                      <option value='Austria'>Austria</option>
                      <option value='Azerbaijan'>Azerbaijan</option>
                      <option value='Bahamas'>Bahamas</option>
                      <option value='Bahrain'>Bahrain</option>
                      <option value='Bangladesh'>Bangladesh</option>
                      <option value='Barbados'>Barbados</option>
                      <option value='Belarus'>Belarus</option>
                      <option value='Belgium'>Belgium</option>
                      <option value='Belize'>Belize</option>
                      <option value='Benin'>Benin</option>
                      <option value='Bermuda'>Bermuda</option>
                      <option value='Bhutan'>Bhutan</option>
                      <option value='Bolivia'>Bolivia</option>
                      <option value='Bonaire'>Bonaire</option>
                      <option value='Bosnia & Herzegovina'>
                        Bosnia & Herzegovina
                      </option>
                      <option value='Botswana'>Botswana</option>
                      <option value='Brazil'>Brazil</option>
                      <option value='British Indian Ocean Ter'>
                        British Indian Ocean Ter
                      </option>
                      <option value='Brunei'>Brunei</option>
                      <option value='Bulgaria'>Bulgaria</option>
                      <option value='Burkina Faso'>Burkina Faso</option>
                      <option value='Burundi'>Burundi</option>
                      <option value='Cambodia'>Cambodia</option>
                      <option value='Cameroon'>Cameroon</option>
                      <option value='Canada'>Canada</option>
                      <option value='Canary Islands'>Canary Islands</option>
                      <option value='Cape Verde'>Cape Verde</option>
                      <option value='Cayman Islands'>Cayman Islands</option>
                      <option value='Central African Republic'>
                        Central African Republic
                      </option>
                      <option value='Chad'>Chad</option>
                      <option value='Channel Islands'>Channel Islands</option>
                      <option value='Chile'>Chile</option>
                      <option value='China'>China</option>
                      <option value='Christmas Island'>Christmas Island</option>
                      <option value='Cocos Island'>Cocos Island</option>
                      <option value='Colombia'>Colombia</option>
                      <option value='Comoros'>Comoros</option>
                      <option value='Congo'>Congo</option>
                      <option value='Cook Islands'>Cook Islands</option>
                      <option value='Costa Rica'>Costa Rica</option>
                      <option value='Cote DIvoire'>Cote DIvoire</option>
                      <option value='Croatia'>Croatia</option>
                      <option value='Cuba'>Cuba</option>
                      <option value='Curaco'>Curacao</option>
                      <option value='Cyprus'>Cyprus</option>
                      <option value='Czech Republic'>Czech Republic</option>
                      <option value='Denmark'>Denmark</option>
                      <option value='Djibouti'>Djibouti</option>
                      <option value='Dominica'>Dominica</option>
                      <option value='Dominican Republic'>
                        Dominican Republic
                      </option>
                      <option value='East Timor'>East Timor</option>
                      <option value='Ecuador'>Ecuador</option>
                      <option value='Egypt'>Egypt</option>
                      <option value='El Salvador'>El Salvador</option>
                      <option value='Equatorial Guinea'>
                        Equatorial Guinea
                      </option>
                      <option value='Eritrea'>Eritrea</option>
                      <option value='Estonia'>Estonia</option>
                      <option value='Ethiopia'>Ethiopia</option>
                      <option value='Falkland Islands'>Falkland Islands</option>
                      <option value='Faroe Islands'>Faroe Islands</option>
                      <option value='Fiji'>Fiji</option>
                      <option value='Finland'>Finland</option>
                      <option value='France'>France</option>
                      <option value='French Guiana'>French Guiana</option>
                      <option value='French Polynesia'>French Polynesia</option>
                      <option value='French Southern Ter'>
                        French Southern Ter
                      </option>
                      <option value='Gabon'>Gabon</option>
                      <option value='Gambia'>Gambia</option>
                      <option value='Georgia'>Georgia</option>
                      <option value='Germany'>Germany</option>
                      <option value='Ghana'>Ghana</option>
                      <option value='Gibraltar'>Gibraltar</option>
                      <option value='Great Britain'>Great Britain</option>
                      <option value='Greece'>Greece</option>
                      <option value='Greenland'>Greenland</option>
                      <option value='Grenada'>Grenada</option>
                      <option value='Guadeloupe'>Guadeloupe</option>
                      <option value='Guam'>Guam</option>
                      <option value='Guatemala'>Guatemala</option>
                      <option value='Guinea'>Guinea</option>
                      <option value='Guyana'>Guyana</option>
                      <option value='Haiti'>Haiti</option>
                      <option value='Hawaii'>Hawaii</option>
                      <option value='Honduras'>Honduras</option>
                      <option value='Hong Kong'>Hong Kong</option>
                      <option value='Hungary'>Hungary</option>
                      <option value='Iceland'>Iceland</option>
                      <option value='Indonesia'>Indonesia</option>
                      <option value='India'>India</option>
                      <option value='Iran'>Iran</option>
                      <option value='Iraq'>Iraq</option>
                      <option value='Ireland'>Ireland</option>
                      <option value='Isle of Man'>Isle of Man</option>
                      <option value='Israel'>Israel</option>
                      <option value='Italy'>Italy</option>
                      <option value='Jamaica'>Jamaica</option>
                      <option value='Japan'>Japan</option>
                      <option value='Jordan'>Jordan</option>
                      <option value='Kazakhstan'>Kazakhstan</option>
                      <option value='Kenya'>Kenya</option>
                      <option value='Kiribati'>Kiribati</option>
                      <option value='Korea North'>Korea North</option>
                      <option value='Korea Sout'>Korea South</option>
                      <option value='Kuwait'>Kuwait</option>
                      <option value='Kyrgyzstan'>Kyrgyzstan</option>
                      <option value='Laos'>Laos</option>
                      <option value='Latvia'>Latvia</option>
                      <option value='Lebanon'>Lebanon</option>
                      <option value='Lesotho'>Lesotho</option>
                      <option value='Liberia'>Liberia</option>
                      <option value='Libya'>Libya</option>
                      <option value='Liechtenstein'>Liechtenstein</option>
                      <option value='Lithuania'>Lithuania</option>
                      <option value='Luxembourg'>Luxembourg</option>
                      <option value='Macau'>Macau</option>
                      <option value='Macedonia'>Macedonia</option>
                      <option value='Madagascar'>Madagascar</option>
                      <option value='Malaysia'>Malaysia</option>
                      <option value='Malawi'>Malawi</option>
                      <option value='Maldives'>Maldives</option>
                      <option value='Mali'>Mali</option>
                      <option value='Malta'>Malta</option>
                      <option value='Marshall Islands'>Marshall Islands</option>
                      <option value='Martinique'>Martinique</option>
                      <option value='Mauritania'>Mauritania</option>
                      <option value='Mauritius'>Mauritius</option>
                      <option value='Mayotte'>Mayotte</option>
                      <option value='Mexico'>Mexico</option>
                      <option value='Midway Islands'>Midway Islands</option>
                      <option value='Moldova'>Moldova</option>
                      <option value='Monaco'>Monaco</option>
                      <option value='Mongolia'>Mongolia</option>
                      <option value='Montserrat'>Montserrat</option>
                      <option value='Morocco'>Morocco</option>
                      <option value='Mozambique'>Mozambique</option>
                      <option value='Myanmar'>Myanmar</option>
                      <option value='Nambia'>Nambia</option>
                      <option value='Nauru'>Nauru</option>
                      <option value='Nepal'>Nepal</option>
                      <option value='Netherland Antilles'>
                        Netherland Antilles
                      </option>
                      <option value='Netherlands'>
                        Netherlands (Holland, Europe)
                      </option>
                      <option value='Nevis'>Nevis</option>
                      <option value='New Caledonia'>New Caledonia</option>
                      <option value='New Zealand'>New Zealand</option>
                      <option value='Nicaragua'>Nicaragua</option>
                      <option value='Niger'>Niger</option>
                      <option value='Nigeria'>Nigeria</option>
                      <option value='Niue'>Niue</option>
                      <option value='Norfolk Island'>Norfolk Island</option>
                      <option value='Norway'>Norway</option>
                      <option value='Oman'>Oman</option>
                      <option value='Pakistan'>Pakistan</option>
                      <option value='Palau Island'>Palau Island</option>
                      <option value='Palestine'>Palestine</option>
                      <option value='Panama'>Panama</option>
                      <option value='Papua New Guinea'>Papua New Guinea</option>
                      <option value='Paraguay'>Paraguay</option>
                      <option value='Peru'>Peru</option>
                      <option value='Phillipines'>Philippines</option>
                      <option value='Pitcairn Island'>Pitcairn Island</option>
                      <option value='Poland'>Poland</option>
                      <option value='Portugal'>Portugal</option>
                      <option value='Puerto Rico'>Puerto Rico</option>
                      <option value='Qatar'>Qatar</option>
                      <option value='Republic of Montenegro'>
                        Republic of Montenegro
                      </option>
                      <option value='Republic of Serbia'>
                        Republic of Serbia
                      </option>
                      <option value='Reunion'>Reunion</option>
                      <option value='Romania'>Romania</option>
                      <option value='Russia'>Russia</option>
                      <option value='Rwanda'>Rwanda</option>
                      <option value='St Barthelemy'>St Barthelemy</option>
                      <option value='St Eustatius'>St Eustatius</option>
                      <option value='St Helena'>St Helena</option>
                      <option value='St Kitts-Nevis'>St Kitts-Nevis</option>
                      <option value='St Lucia'>St Lucia</option>
                      <option value='St Maarten'>St Maarten</option>
                      <option value='St Pierre & Miquelon'>
                        St Pierre & Miquelon
                      </option>
                      <option value='St Vincent & Grenadines'>
                        St Vincent & Grenadines
                      </option>
                      <option value='Saipan'>Saipan</option>
                      <option value='Samoa'>Samoa</option>
                      <option value='Samoa American'>Samoa American</option>
                      <option value='San Marino'>San Marino</option>
                      <option value='Sao Tome & Principe'>
                        Sao Tome & Principe
                      </option>
                      <option value='Saudi Arabia'>Saudi Arabia</option>
                      <option value='Senegal'>Senegal</option>
                      <option value='Seychelles'>Seychelles</option>
                      <option value='Sierra Leone'>Sierra Leone</option>
                      <option value='Singapore'>Singapore</option>
                      <option value='Slovakia'>Slovakia</option>
                      <option value='Slovenia'>Slovenia</option>
                      <option value='Solomon Islands'>Solomon Islands</option>
                      <option value='Somalia'>Somalia</option>
                      <option value='South Africa'>South Africa</option>
                      <option value='Spain'>Spain</option>
                      <option value='Sri Lanka'>Sri Lanka</option>
                      <option value='Sudan'>Sudan</option>
                      <option value='Suriname'>Suriname</option>
                      <option value='Swaziland'>Swaziland</option>
                      <option value='Sweden'>Sweden</option>
                      <option value='Switzerland'>Switzerland</option>
                      <option value='Syria'>Syria</option>
                      <option value='Tahiti'>Tahiti</option>
                      <option value='Taiwan'>Taiwan</option>
                      <option value='Tajikistan'>Tajikistan</option>
                      <option value='Tanzania'>Tanzania</option>
                      <option value='Thailand'>Thailand</option>
                      <option value='Togo'>Togo</option>
                      <option value='Tokelau'>Tokelau</option>
                      <option value='Tonga'>Tonga</option>
                      <option value='Trinidad & Tobago'>
                        Trinidad & Tobago
                      </option>
                      <option value='Tunisia'>Tunisia</option>
                      <option value='Turkey'>Turkey</option>
                      <option value='Turkmenistan'>Turkmenistan</option>
                      <option value='Turks & Caicos Is'>
                        Turks & Caicos Is
                      </option>
                      <option value='Tuvalu'>Tuvalu</option>
                      <option value='Uganda'>Uganda</option>
                      <option value='United Kingdom'>United Kingdom</option>
                      <option value='Ukraine'>Ukraine</option>
                      <option value='United Arab Erimates'>
                        United Arab Emirates
                      </option>
                      <option value='United States of America'>
                        United States of America
                      </option>
                      <option value='Uraguay'>Uruguay</option>
                      <option value='Uzbekistan'>Uzbekistan</option>
                      <option value='Vanuatu'>Vanuatu</option>
                      <option value='Vatican City State'>
                        Vatican City State
                      </option>
                      <option value='Venezuela'>Venezuela</option>
                      <option value='Vietnam'>Vietnam</option>
                      <option value='Virgin Islands (Brit)'>
                        Virgin Islands (Brit)
                      </option>
                      <option value='Virgin Islands (USA)'>
                        Virgin Islands (USA)
                      </option>
                      <option value='Wake Island'>Wake Island</option>
                      <option value='Wallis & Futana Is'>
                        Wallis & Futana Is
                      </option>
                      <option value='Yemen'>Yemen</option>
                      <option value='Zaire'>Zaire</option>
                      <option value='Zambia'>Zambia</option>
                      <option value='Zimbabwe'>Zimbabwe</option>
                    </select>
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
                      type='password'
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
                        onClick={this.handleSubmit}
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
                      <Link to='/login'>
                        <a href='#' class='text-primary ml-2'>
                          Login
                        </a>
                      </Link>
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
