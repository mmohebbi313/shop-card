import React , {useContext} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
import { CiShoppingCart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import ProductsCont from "../contex/contex";




export default function MainNavbar  ({bag}){

  const {dataShopCard} = useContext(ProductsCont)

    return (
        <Navbar expand="lg"  className="bg-dark navbar-dark fixed-top">
          <Container >
            <Navbar.Brand href="#home" >Mohebbi shop...</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="PRODUCT" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Phone</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Lap top
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Computer</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    All
                  </NavDropdown.Item>
                </NavDropdown>
                
              </Nav>
              
            </Navbar.Collapse>
            <a href="#" onClick={bag}>
            <CiShoppingCart size={30} color="white" className="ms-3" />
             <span className="span">{dataShopCard.length}</span>
            </a>
          </Container>
        </Navbar>
      );
}