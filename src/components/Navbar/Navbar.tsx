import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SiFampay } from "react-icons/si";
import { NavLink } from "react-router-dom";

export default function NavbarBs() {
  return (
    <Navbar expand="md" fixed="top" className="mt-2 " data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" className="fs-1 ms-2">
          <SiFampay />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>

            <NavDropdown title="Contact" id="nav-dropdown">
              <NavDropdown.Item href="https://www.instagram.com/mekancarl/">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.facebook.com/mekan.carl">
                Facebook
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/mekan-sahatvaliyev-59a523252/">
                Linkedin
              </NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com/mekan86631199">
                Twitter
              </NavDropdown.Item>
              <NavDropdown.Item href="mailto:smekan2320@gmail.com">
                Send Email
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
