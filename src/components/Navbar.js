import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


import brandlogo from '../assets/imgs/brandlogo.png';

export const MyNavbar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#"><img src={brandlogo} alt="home-logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1"style={{color:'black'}}>About</Nav.Link>
                            <Nav.Link href="#action2"style={{color:'black'}}>Contact us</Nav.Link>
                            <Nav.Link href="#action3"style={{color:'black'}}>TimeTable</Nav.Link>
                            <Nav.Link href="#action4"style={{color:'black'}}>Live Location</Nav.Link>
                        </Nav>
                        <Form className="d-flex" >
                            <Button variant="danger">Sign In</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
