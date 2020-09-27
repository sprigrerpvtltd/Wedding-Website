import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import './App.css';
import './Home.css';

function Login() {
  return (
    <div className="login">
        

        {/* Registration Form Start*/}

        <div className="container-fluid">
         <h3>Welcome to Wedding Bellz</h3>
         {/* Wedding Image 1 */}
        <div>
           
            <Card style={{ width: '22rem',marginLeft:'auto',height:380, }}>
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
        </div>

         
        
    </div>
    </div>
  );
}

export default Login;
