import React, { useState } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import * as Icon from "react-bootstrap-icons";
import logo from "../assests/images/Logo.png"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container className="mt-3" fluid>
      <header>
        {/* top banner */}
        <div className="text-center rounded py-2" id="top-banner">
          <p id="top-banner-text">
            Free Courses <small>🌟</small> Sale Ends Soon, Get It Now
          </p>
          <Icon.ArrowRight className=" text-white" />
        </div>
        {/* nav bar */}

        
          <Navbar className="navbar-expand-lg navColor px-lg-4 py-1">
            
              <NavbarBrand href="/" >
                <img
                  src={logo}
                 
                  alt="looooogo"
                />
              </NavbarBrand>
             <div className="order-lg-1 d-flex ml-auto pr-2   ">
                <Nav navbar className="flex-row" >
                  <NavItem className="me-1 me-md-3">
                    <NavLink href="#home">Sign Up</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      href="#"
                      className=" btn px-md-5   px-3  text-center text-white Loginbtn"
                    >
                      Login
                    </NavLink>
                  </NavItem>
                </Nav>
              </div> 
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar className="text-start">
                <Nav navbar>
                  <NavItem>
                    <NavLink href="#home">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#courses">Courses</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#courses">About Us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pricing">Pricing</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Contact</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/dashboard">Dashboard</NavLink>
                  </NavItem>
                </Nav>
           
              </Collapse>
            
          </Navbar>


        
      </header>
    </Container>
  );
};

export default Header;
