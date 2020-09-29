import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { connect } from "react-redux";
import * as actions from "./actions/actions";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import "./Home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      status: true,
    };
  }

  save = (msg) => {
    if (msg === "insert") {
      this.setState({
        status: true,
      });
    }
  };
  save = () => {
    this.state.addUser({
      name: this.refs.name.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
    });
  };

  render() {
    return (
      <Router>
        <div className="home">
          {/* Registration Form Start*/}

          <div className="container-fluid">
            <h1>Register</h1>
            <h6>Please fill the form to create an account</h6>

            <Form>
              <div class="form-group row">
                <label
                  for="inputEmail"
                  class="col-sm-2 col-form-label"
                  style={{ fontSize: 18, fontWeight: "bold" }}
                >
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Enter Name"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="inputEmail"
                  class="col-sm-2 col-form-label"
                  style={{ fontSize: 18, fontWeight: "bold" }}
                >
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Enter Email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="inputEmail"
                  class="col-sm-2 col-form-label"
                  style={{ fontSize: 18, fontWeight: "bold" }}
                >
                  Password
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Enter Password"
                  />
                </div>
              </div>

              <div class="form-group row">
                <Form.Label
                  style={{ fontSize: 18, fontWeight: "bold" }}
                  class="col-sm-2 col-form-label"
                >
                  Gender
                </Form.Label>{" "}
                <br />
                <div class="col-sm-10">
                  <input type="radio" name="gen" value="male" /> Male &nbsp;
                  &nbsp;
                  <input type="radio" name="gen" value="male" /> Female
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="inputEmail"
                  class="col-sm-2 col-form-label"
                  style={{ fontSize: 18, fontWeight: "bold" }}
                >
                  City
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Enter City"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="inputEmail"
                  class="col-sm-2 col-form-label"
                  style={{ fontSize: 18, fontWeight: "bold" }}
                >
                  Partner Name
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Enter Partner Name"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="inputEmail"
                  class="col-sm-2 col-form-label"
                  style={{ fontSize: 18, fontWeight: "bold" }}
                >
                  Mobile No
                </label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Enter Mobile Number"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="inputEmail"
                  class="col-sm-2 col-form-label"
                  style={{ fontSize: 18, fontWeight: "bold" }}
                >
                  Budget
                </label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Enter Budget"
                  />
                </div>
              </div>

              <div class="form-group row">
                <Form.Label
                  style={{ fontSize: 18, fontWeight: "bold" }}
                  class="col-sm-2 col-form-label"
                >
                  Enter Wedding Date
                </Form.Label>
                <div class="col-sm-10">
                  <input type="date" />
                </div>
              </div>

              <div style={{ marginTop: -20 }}>
                By creating an account you agree to our
                <div
                  style={{
                    marginLeft: 290,
                    marginTop: -23.5,
                    color: "cyan",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  Terms & Privacy.
                </div>
              </div>

              <Button
                variant="success"
                type="submit"
                className="btn-block mt-3"
                
              >
                Register
              </Button>
              <div style={{ marginTop: 20, textAlign: "center" }}>
                Already Have an account?
                <div
                  style={{
                    marginLeft: 250,
                    marginTop: -23.5,
                    color: "cyan",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  Sign in.
                </div>
              </div>
            </Form>
            {/* Registration Form Ends*/}
          </div>
        </div>
      </Router>
    );
  }
}

export default Home;
