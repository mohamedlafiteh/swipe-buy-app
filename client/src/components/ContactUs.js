import React from "react";
import "../styles/contactUs.css";
import logo from "./nav.png";

export default function ContactUs() {
  return (
    <div class='container-s d-flex justify-content-center'>
      <div class='row my-2 mx-2'>
        <div class='col-md-6'>
          {" "}
          <img className='img-contact' src={logo} alt='IMG' />{" "}
        </div>

        <div class='col-md-6'>
          <h2 class='form-title'>Contact us</h2>
          <p class='justify text-muted'>
            Have an enquiry or would like to give us feedback?
            <br />
            Fill out the form below to contact our team.
          </p>
          <form>
            <div class='form-group pt-2 pl-1'>
              {" "}
              <label for='exampleInputName'>Your name</label>{" "}
              <input type='text' class='form-control' id='exampleInputName' />{" "}
            </div>
            <div class='form-group pl-1'>
              {" "}
              <label for='exampleInputEmail1'>Your email address</label>{" "}
              <input
                type='email'
                class='form-control'
                id='exampleInputEmail1'
              />{" "}
            </div>
            <div class='form-group pl-1'>
              {" "}
              <label for='exampleFormControlTextarea1'>Your message</label>{" "}
              <textarea
                class='form-control'
                id='exampleFormControlTextarea1'
                rows='5'
              ></textarea>{" "}
            </div>
            <div class='row'>
              <div class='col-md-3 offset-md-9'>
                <button type='submit' class='btn-contact btn-primary'>
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
