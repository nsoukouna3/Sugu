import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';




function Header(){

    return(
        <div className='d-flex flex-column' >
            <Navbar >
            <Container fluid > 
                <LinkContainer to="/">
                    <Navbar.Brand>sugu</Navbar.Brand>
                </LinkContainer>

                
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">About</Nav.Link>
                <Nav.Link href="#action2">Cart</Nav.Link>
                <Nav.Link href="#action2">Product</Nav.Link>
                <Nav.Link href="#action2">Account</Nav.Link>

              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>

            </Container>
            </Navbar>
        </div>
    )
}
export default Header;