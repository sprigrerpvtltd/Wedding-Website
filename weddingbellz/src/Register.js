import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import './Home.css';

function Home() {
  return (
      <Router>
    <div className="home">
        

        {/* Registration Form Start*/}

        <div className="container-fluid">
         <h1>Register</h1>
         <h6>Please fill the form to create an account</h6>
         
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label style={{fontSize:18,fontWeight:'bold'}}>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" required />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label style={{fontSize:18,fontWeight:'bold'}}>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label style={{fontSize:18,fontWeight:'bold'}}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label style={{fontSize:18,fontWeight:'bold'}}>Gender</Form.Label> <br />
            <input type="radio" name="gen" value="male" required/> Male <br />
            <input type="radio" name="gen" value="male" required/> FeMale
        </Form.Group>
        
        <Form.Group controlId="formBasicPassword">
            <Form.Label style={{fontSize:18,fontWeight:'bold'}}>City</Form.Label>
            <Form.Control type="text" placeholder="Enter City" required/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label style={{fontSize:18,fontWeight:'bold'}}>Partner name</Form.Label>
            <Form.Control type="text" placeholder="Enter Partner Name" required/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label style={{fontSize:18,fontWeight:'bold'}}>Mobile No</Form.Label>
            <Form.Control type="text" placeholder="Enter Mobile No" required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label style={{fontSize:18,fontWeight:'bold'}}>Budget</Form.Label>
            <Form.Control type="text" placeholder=" Enter Budget" required />
        </Form.Group>
        
        <Form.Group controlId="formBasicPassword">
            <Form.Label style={{fontSize:18,fontWeight:'bold'}}>Enter Wedding Date</Form.Label>
            <input type="date"required />
        </Form.Group>
        <div style={{marginTop:-20,}}>
            By creating an account you agree to our 
            <div style={{marginLeft:290,marginTop:-23.5,color:'cyan',fontWeight:'bold',textDecoration:'underline'}}>Terms & Privacy.</div>
        </div>
        
        <Button variant="success" type="submit" className="btn-block mt-3">
          Register
        </Button>
        <div style={{marginTop:20,textAlign:'center'}}>
          Already Have an account?
            <div style={{marginLeft:250,marginTop:-23.5,color:'cyan',fontWeight:'bold',textDecoration:'underline'}}>Sign in.</div>
        </div>
        </Form>
      {/* Registration Form Ends*/}
    </div>
    </div>
</Router>
  );
}

export default Home;
