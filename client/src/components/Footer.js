import React from "react";
import "../styles/footer.css";

import {
  Container,
  Header,
  List,
  Grid,
  Segment,
  Icon,
  Menu,
  Input
} from "semantic-ui-react";

export default function Footer() {
  return (
    <section id='footer'>
      <div class='container'>
        <div class='row text-center text-xs-center text-sm-left text-md-left'>
          <div class='col-xs-12 col-sm-4 col-md-4'>
            <h5>Products</h5>
            <ul class='list-unstyled quick-links'>
              <li>
                <a href='javascript:void();'>
                  <i class='fa fa-angle-double-right'></i>Home
                </a>
              </li>
              <li>
                <a href='javascript:void();'>
                  <i class='fa fa-angle-double-right'></i>About
                </a>
              </li>
              <li>
                <a href='javascript:void();'>
                  <i class='fa fa-angle-double-right'></i>FAQ
                </a>
              </li>
              <li>
                <a href='javascript:void();'>
                  <i class='fa fa-angle-double-right'></i>Get Started
                </a>
              </li>
              <li>
                <a href='javascript:void();'>
                  <i class='fa fa-angle-double-right'></i>Videos
                </a>
              </li>
            </ul>
          </div>
          <div class='col-xs-12 col-sm-4 col-md-4'>
            <h5>Information</h5>
            <ul class='list-unstyled quick-links'>
              <li>
                <a href='javascript:void();'>
                  <i class='fa fa-angle-double-right'></i>Home
                </a>
              </li>
              <li>
                <a href='javascript:void();'>
                  <i class='fa fa-angle-double-right'></i>About
                </a>
              </li>
              <li>
                <a href='javascript:void();'>
                  <i class='fa fa-angle-double-right'></i>FAQ
                </a>
              </li>
              <li>
                <a href='javascript:void();'>
                  <i class='fa fa-angle-double-right'></i>Get Started
                </a>
              </li>
              <li>
                <a href='javascript:void();'>
                  <i class='fa fa-angle-double-right'></i>Videos
                </a>
              </li>
            </ul>
          </div>
          <div class='col-xs-12 col-sm-4 col-md-4'>
            <h5>Contacts</h5>
            <ul class='list-unstyled quick-links'>
              <li>
                <a href='javascript:void();'>
                  <i class='fa fa-angle-double-right'></i>Email
                </a>
              </li>
              <li>
                <a href='javascript:void();'>
                  <i class='fa fa-angle-double-right'></i>Facebook
                </a>
              </li>
              <li>
                <a href='javascript:void();'>
                  <i class='fa fa-angle-double-right'></i>Twitter
                </a>
              </li>
              <li>
                <a href='javascript:void();'>
                  <i class='fa fa-angle-double-right'></i>Instagram
                </a>
              </li>
              <li>
                <a href='#' title='Design and developed by'>
                  <i class='fa fa-angle-double-right'></i>Numbers
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class='row'>
          <div class='col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5'>
            <ul class='list-unstyled list-inline social text-center'>
              <li class='list-inline-item'>
                <a href='javascript:void();'>
                  <i class='fa fa-facebook'></i>
                </a>
              </li>
              <li class='list-inline-item'>
                <a href='javascript:void();'>
                  <i class='fa fa-twitter'></i>
                </a>
              </li>
              <li class='list-inline-item'>
                <a href='javascript:void();'>
                  <i class='fa fa-instagram'></i>
                </a>
              </li>
              <li class='list-inline-item'>
                <a href='javascript:void();'>
                  <i class='fa fa-google-plus'></i>
                </a>
              </li>
              <li class='list-inline-item'>
                <a href='javascript:void();' target='_blank'>
                  <i class='fa fa-envelope'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class='row'>
          <div class='col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white'>
            <p>
              <u>
                <a href='m'>Swipe Buy website</a>
              </u>{" "}
              is sopping website, where can buy your items form all over the
              world. UK located main store, all services available.
            </p>
            <p class='h6'>
              &copy All right Reversed.
              <a class='text-green ml-2' href='Swipe buy' target='_blank'>
                Swipe buy
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
