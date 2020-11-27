import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Form, Nav, FormControl} from "react-bootstrap";

import "../App.scss";



const NavBar = ({ onTextChange}) => {
 
  
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"><img src="logo.png" alt ="nothing" width={'35%'}/></Navbar.Brand>
          <Nav className="mr-auto">
      
          </Nav>
          <Form inline onSubmit={(e) => e.preventDefault()}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
         
              onChange={(e) =>onTextChange(e.target.value)}
            />
          </Form>
        </Navbar>
        
           </React.Fragment>
    );
  };

export default NavBar;
