import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Col,
  Label
} from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.resetFeedbackForm();
    this.props.postFeedback(
      values.firstname,
      values.lastname,
      values.telnum,
      values.email,
      values.agree,
      values.contactType,
      values.message
    );
  }

  render() {
    return (
      <div className="App-header2">
      <div className="container">
        <div className="">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div></div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div className="col-12 col-md-9">
            
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
