import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <section id='footer'>
      <div className='container'>
        <div className='row text-center text-xs-center text-sm-left text-md-left'>
          <div className='col-xs-12 col-sm-4 col-md-4'>
            <h5>Products</h5>
            <ul className='list-unstyled quick-links'>
              <li>
                <a href='#'>
                  <i className='fa fa-angle-double-right'></i>Home
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-angle-double-right'></i>About
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-angle-double-right'></i>FAQ
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-angle-double-right'></i>Get Started
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-angle-double-right'></i>Videos
                </a>
              </li>
            </ul>
          </div>
          <div className='col-xs-12 col-sm-4 col-md-4'>
            <h5>Information</h5>
            <ul className='list-unstyled quick-links'>
              <li>
                <a href='#'>
                  <i className='fa fa-angle-double-right'></i>Home
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-angle-double-right'></i>About
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-angle-double-right'></i>FAQ
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-angle-double-right'></i>Get Started
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-angle-double-right'></i>Videos
                </a>
              </li>
            </ul>
          </div>
          <div className='col-xs-12 col-sm-4 col-md-4'>
            <h5>Contacts</h5>
            <ul className='list-unstyled quick-links'>
              <li>
                <a href='#'>
                  <i className='fa fa-angle-double-right'></i>Email
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-angle-double-right'></i>Facebook
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-angle-double-right'></i>Twitter
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-angle-double-right'></i>Instagram
                </a>
              </li>
              <li>
                <a href='#' title='Design and developed by'>
                  <i className='fa fa-angle-double-right'></i>Numbers
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5'>
            <ul className='list-unstyled list-inline social text-center'>
              <li className='list-inline-item'>
                <a href='#'>
                  <i className='fa fa-facebook'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#'>
                  <i className='fa fa-twitter'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#'>
                  <i className='fa fa-instagram'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#'>
                  <i className='fa fa-google-plus'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#' target='_blank'>
                  <i className='fa fa-envelope'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white'>
            <p>
              <u>
                <a href='m'>Swipe Buy website</a>
              </u>{" "}
              is sopping website, where can buy your items form all over the
              world. UK located main store, all services available.
            </p>
            <p className='h6'>
              &copy All right Reversed.
              <a className='text-green ml-2' href='Swipe buy' target='_blank'>
                Swipe buy
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
