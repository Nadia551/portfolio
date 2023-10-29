import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
function Navi()
{
    return  <Navbar className="bg-transparent" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#features">Projects</Nav.Link>
        <Nav.Link href="#pricing">Certificates</Nav.Link>
        <Nav.Link href="#pricing">Contact Me</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

}








export default Navi;