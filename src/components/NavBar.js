import {Navbar, Nav, Container} from 'react-bootstrap/';


function NavBar(){
    return(
        <>

    <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand href="#home">Noodles</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#pricing">About us</Nav.Link>
        <Nav.Link href="#features">Available Brands</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
</>
    )
}


export default NavBar;