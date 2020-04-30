import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/cart.css";

export class Cart extends Component {
  render() {
    return (
      <div class='containers-fluid'>
        <div class='row'>
          <aside class='col-lg-9'>
            <div class='card'>
              <div class='table-responsive'>
                <table class='table table-borderless table-shopping-cart'>
                  <thead class='text-muted'>
                    <tr class='small text-uppercase'>
                      <th scope='col'>Product</th>
                      <th scope='col' width='120'>
                        Quantity
                      </th>
                      <th scope='col' width='120'>
                        Price
                      </th>
                      <th
                        scope='col'
                        class='text-right d-none d-md-block'
                        width='200'
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <figure class='itemside align-items-center'>
                          <div class='aside'>
                            <img
                              src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1574342208/ra_unisex_tshirt_x2200_fafafa_ca443f4786_front-c_267_146_1000_1000-bg_f8f8f8.u1.jpg'
                              class='img-sm'
                            />
                          </div>
                          <figcaption class='info'>
                            {" "}
                            <a href='#' class='title text-dark' data-abc='true'>
                              Printed White Tshirt
                            </a>
                            <p class='small text-muted'>
                              SIZE:M <br /> Brand: Cantabil
                            </p>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        {" "}
                        <select class='form-control'>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>{" "}
                      </td>
                      <td>
                        <div class='price-wrap'>
                          {" "}
                          <var class='price'>$9</var>{" "}
                          <small class='text-muted'> £6 each</small>{" "}
                        </div>
                      </td>
                      <td class='text-right d-none d-md-block'>
                        {" "}
                        <a
                          data-original-title='Save to Wishlist'
                          title=''
                          href=''
                          class='btn btn-light'
                          data-toggle='tooltip'
                          data-abc='true'
                        >
                          {" "}
                          <i class='fa fa-heart'></i>
                        </a>{" "}
                        <a
                          href=''
                          class='btn btn-light btn-round'
                          data-abc='true'
                        >
                          {" "}
                          Remove
                        </a>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </aside>
          <aside class='col-lg-3'>
            <div class='card mb-3'>
              <div class='card-body'>
                <form>
                  <div class='form-group'>
                    {" "}
                    <label>Summary</label>
                    <div class='input-group'>
                      <span class='input-group-append'>
                        {" "}
                        <span>Items: 1</span>{" "}
                      </span>{" "}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class='card'>
              <div class='card-body'>
                <dl class='dlist-align'>
                  <dt>Total price:</dt>
                  <dd class='text-right ml-3'>£69.97</dd>
                </dl>
                <dl class='dlist-align'>
                  <dt>Discount:</dt>
                  <dd class='text-right text-danger ml-3'>- £0</dd>
                </dl>
                <dl class='dlist-align'>
                  <dt>Total:</dt>
                  <dd class='text-right text-dark b ml-3'>
                    <strong>£59.97</strong>
                  </dd>
                </dl>
                <hr />{" "}
                <a
                  href='#'
                  class='btn btn-out btn-primary btn-square btn-main'
                  data-abc='true'
                >
                  {" "}
                  Contact Seller{" "}
                </a>{" "}
                <Link to='/'>
                  <a
                    href='#'
                    class='btn btn-out btn-success btn-square btn-main mt-2'
                    data-abc='true'
                  >
                    Continue Shopping
                  </a>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default Cart;
