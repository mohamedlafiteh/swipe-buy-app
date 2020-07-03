import React, { Component } from "react";
import { Link } from "react-router-dom";
import ".././styles/addItemForm.css";

class AddItemForm extends Component {
  render() {
    return (
      <div className='bg-light'>
        <div className='container'>
          <div className='row justify justify-content-center'>
            <div className='col-11 col-md-8 col-lg-6 col-xl-5'>
              <form className=''>
                <div className='card bg-dark'>
                  <div className='row mt-0'>
                    <div className='col-md-12 '>
                      <h4 className='item-title'>Add Your Item</h4>
                    </div>
                  </div>
                  <div className='form-group row mb-3'>
                    <div className='col-md-12 mb-0'>
                      <p className='mb-1'>Item name</p>{" "}
                      <input
                        style={{ marginBottom: "20px" }}
                        type='text'
                        placeholder='Item name'
                        name='item'
                        className='form-control input-box rm-border'
                      />
                      <p className='mb-1'>Item Price</p>{" "}
                      <input
                        type='text'
                        placeholder='Item Price'
                        name='price'
                        className='form-control input-box rm-border'
                      />
                      <p className='mb-1'>Company</p>{" "}
                      <input
                        style={{ marginBottom: "20px" }}
                        type='text'
                        placeholder='Company'
                        name='company'
                        className='form-control input-box rm-border'
                      />
                    </div>
                  </div>
                  <div
                    class='row justify-content-center'
                    style={{ marginBottom: "20px" }}
                  >
                    <div class='col-md-12 col-lg-10 col-12'>
                      <div>
                        <label>Upload The Images </label>{" "}
                        <input
                          type='file'
                          class='form-control form-control input-box rm-border'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='form-group row'>
                    <div className='col-md-12 mb-2'>
                      <p className='mb-1'>description</p>{" "}
                      <textarea
                        type='text'
                        placeholder='Enter your description'
                        name='description'
                        className='form-control input-box rm-border'
                      ></textarea>
                    </div>
                  </div>
                  <div className='form-group row justify-content-center mb-0'>
                    <div className='col-md-12 px-3'>
                      {" "}
                      <button
                        className='btn btn-block btn-purple rm-border'
                        type='button'
                        class='btn btn-primary'
                      >
                        Submit
                      </button>
                      <Link to='/'>
                        <button
                          className='btn btn-block btn-purple rm-border'
                          type='button'
                          class='btn btn-primary'
                          style={{ marginLeft: "20px" }}
                        >
                          Cancel
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddItemForm;
