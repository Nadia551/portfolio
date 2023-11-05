import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import { Link } from "react-scroll";

function Navi() {
  return (
    <Navbar className="bg-transparent" data-bs-theme="light">
      <Container>
        <Nav className="ms-auto">
          <Link to="skills" smooth={true} duration={500} className="nav-link">
            Skills
          </Link>
          <Link to="Projects" smooth={true} duration={500} className="nav-link">
            Projects
          </Link>

          <Link
            to="Certificates"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Certificates
          </Link>

          <Link to="Contact" smooth={true} duration={500} className="nav-link">
            Contact
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navi;
