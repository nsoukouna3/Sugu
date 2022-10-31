import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';

function Header(){

    return(
        <div className='d-flex flex-column' >
            <Navbar>
            <Container > 
                <LinkContainer to="/">
                    <Navbar.Brand>sugu</Navbar.Brand>
                </LinkContainer>
            </Container>
            </Navbar>
        </div>
    )
}
export default Header;