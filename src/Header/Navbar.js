import React from 'react';
import  { Navbar, Nav, NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import './Navbar.css';
const NavBar = () => {
    return (
        <div className="navBar">
            
                    <Navbar className="navs" expand="lg" >
                    <Navbar.Brand href="Home">Examgenics</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto mr-center ">
                           
                            <Nav.Link href="Home">Home</Nav.Link>
                            <NavDropdown  title="Jobs"  id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Pharmacy</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Engineering</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">10th , ITI</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Books" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Pharmacy</NavDropdown.Item>
                                <NavDropdown.Item href="Pharmacy">Engineering</NavDropdown.Item>
                                <NavDropdown.Item href="#actio/3.3">10th , ITI</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated licd ..</NavDropdown.Item>
                            </NavDropdown>

                        <Nav.Link href="#">Result</Nav.Link>
                   
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    </Navbar>
                   
                   
        </div>
        
    );
}

export default NavBar;
