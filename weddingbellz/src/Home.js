import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router-dom";
import "./App.css";
import "./Home.css";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Card from 'react-bootstrap/Card';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width:750
  },
}));


function Home(){

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [openn, setOpenn] = React.useState(false);

  const handleClickOpen = () => {
    setOpenn(true);
  };

  const handleClosee = () => {
    setOpenn(false);
  };
  
  
  
  return (

    
    <div>

        {/* Model Login Form Start*/}
        <Dialog open={openn} onClose={handleClosee} aria-labelledby="form-dialog-title">
        <Card style={{ width: '22rem',marginLeft:'auto',height:380}}>
              <Card.Body>
                  <Card.Title><h1>Login</h1></Card.Title>
                <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label style={{fontSize:18,fontWeight:'bold'}}>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label style={{fontSize:18,fontWeight:'bold'}}>Password</Form.Label>
                  <Form.Control type="email" placeholder="Enter Password" required />
                </Form.Group>
                <Button variant="success" type="submit" className="btn-block mt-5">
                  Login
                </Button>

                </Form>
              </Card.Body>
              </Card>
            <DialogActions>
            <Button onClick={handleClosee} variant="danger">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        {/* Model Registration Form Start*/}
        
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
       <Fade in={open}>
            <div className={classes.paper}>
            <div className="container-fluid">
            <h1>Register</h1>
            <h6>Please fill the form to create an account</h6>

             <Form>
              <div class="form-group row">
                <label
                 class="col-sm-2 col-form-label"
                  style={{ fontSize: 15, fontWeight: "bold" }}
                >
                  Name
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
                  style={{ fontSize: 15, fontWeight: "bold" }}
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
                  style={{ fontSize: 15, fontWeight: "bold" }}
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
                  style={{ fontSize: 15, fontWeight: "bold" }}
                  class="col-sm-2 col-form-label"
                >
                  Gender
                </Form.Label>
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
                  style={{ fontSize: 15, fontWeight: "bold" }}
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
                  style={{ fontSize: 15, fontWeight: "bold" }}
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
                  style={{ fontSize: 15, fontWeight: "bold" }}
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
                  style={{ fontSize: 15, fontWeight: "bold" }}
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
                  style={{ fontSize: 15, fontWeight: "bold" }}
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
                onClick={() => {
                  this.save();
                }}
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
        </Fade>
      </Modal>
    <Router>

          {/* NavBar Starts */}

          <Navbar expand="lg" className="navbar">
            <img src={require("./img/logo1.png")} className="img" />
              <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto" style={{ marginLeft: 50 }}>
                <Nav.Link href="#home">HOME</Nav.Link>

              <NavDropdown
                title="SERVICES"
                id="basic-nav-dropdown"
                style={{ marginLeft: 50 }}
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  className="bg-dark text-white"
                >
                  Photographer
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  className="bg-dark text-white"
                >
                  Makeup
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  className="bg-dark text-white"
                >
                  Destination
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.4"
                  className="bg-dark text-white"
                >
                  Bridal Wear
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.5"
                  className="bg-dark text-white"
                >
                  Groom Wear
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#link" style={{ marginLeft: 50 }}>
                PORTFOLIO
              </Nav.Link>
            </Nav>
            <Form inline>

              <Button
                variant="outline-success"
                onClick={handleOpen}
                style={{ marginRight: 50 }}
              >
                Register
              </Button>
              <Button variant="outline-success" style={{ marginRight: 50 }} onClick={handleClickOpen} >
                LOGIN
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        {/* NavBar Ends */}

        {/* Wedding Image 1 */}
        <div className="full-width-image">
          <img src={require("./img/pic1.png")} />
        </div>

        {/* Our services */}
        <div className="text-center mt-9">
          <img src={require("./img/services.png")} />
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <img src={require("./img/camera.png")} />
            </div>
            <div class="col-sm-4 mt-5">
              <img src={require("./img/makeup.png")} />
            </div>
            <div class="col-sm-4 mt-3">
              <img src={require("./img/destination.png")} />
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-4 mt-5">
              <img src={require("./img/bridal.png")} />
            </div>

            <div class="col-sm-4 mt-4">
              <img src={require("./img/groom.png")} />
            </div>
            <div class="col-sm-4 mt-4">
              <img src={require("./img/package.png")} />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );

  }


export default Home;
