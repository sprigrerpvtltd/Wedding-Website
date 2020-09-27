import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router';
import './App.css';
import './Home.css';
import Register from'./Register';
function Home(){
return (
  
    <div>
        <Router>
     {/* NavBar Starts */}
      <Navbar expand="lg" className="navbar">
      <img src={ require('./img/logo1.png') } className="img" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="mr-auto" style={{marginLeft:300}}>

             <Nav.Link href="#home" >HOME</Nav.Link>
           
            <NavDropdown title="SERVICES" id="basic-nav-dropdown"style={{marginLeft:50}}>
            <NavDropdown.Item href="#action/3.1" className="bg-dark text-white">Photographer</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="bg-dark text-white">Makeup</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="bg-dark text-white">Destination</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4" className="bg-dark text-white">Bridal Wear</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5" className="bg-dark text-white">Groom Wear</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#link"style={{marginLeft:50}}>PORTFOLIO</Nav.Link>
            </Nav>
            <Form inline>
              
               <Button exact strict className="btn btn-success  outline-primary"  style={{marginRight:50}} onClick >Register </Button>
            
            <Button variant="outline-success" style={{marginRight:50}}>LOGIN</Button>
            </Form>
            </Navbar.Collapse>
       </Navbar>
     {/* NavBar Ends */}

        {/* Wedding Image 1 */}
        <div className="full-width-image">
            <img src={ require('./img/pic1.png') }  />
        </div>

        {/* Our services */}
        <div className="text-center mt-9">
            <img src={ require('./img/services.png') }  />      
        </div>

      <div class="container">
        <div class="row">                                     
            <div class="col-sm-4">                 
            <img src={ require('./img/camera.png') }  /> 
            </div>                  
            <div class="col-sm-4 mt-5">
            <img src={ require('./img/makeup.png') }  /> 
            </div>  
            <div class="col-sm-4 mt-3">
            <img src={ require('./img/destination.png') }  /> 
            </div>                 
        </div>
      </div>

      
      <div class="container">
        <div class="row">                                     
            <div class="col-sm-4 mt-5">                 
            <img src={ require('./img/bridal.png') }  /> 
            </div>                  
            <div class="col-sm-4 mt-4">
            <img src={ require('./img/groom.png') }  /> 
            </div>  
                            
        </div>
      </div>
      
      
      </Router>
 </div>
 
  );
}


export default Home;
