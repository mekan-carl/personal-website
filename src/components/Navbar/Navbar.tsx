import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Image, Nav } from "react-bootstrap";
import logo from "../../assets/menu-btn.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { SiFampay } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { BiMailSend, BiSolidContact } from "react-icons/bi";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="laptop-screen">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid ">
            <a className="navbar-brand link-light fs-2" href="#">
              <SiFampay /> gull
            </a>
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              data-bs-theme="dark"
            >
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active link-light"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/about"
                  className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle link-light "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </a>
                <ul className="dropdown-menu bg-black ">
                  <li>
                    <a
                      target="blank"
                      className="dropdown-item link-light"
                      href="https://www.instagram.com/mekancarl/"
                    >
                      <BsInstagram /> <span className="ms-2">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="blank"
                      className="dropdown-item link-light"
                      href="https://www.facebook.com/mekan.carl"
                    >
                      <BsFacebook /> <span className="ms-2">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="blank"
                      className="dropdown-item  link-light"
                      href="https://twitter.com/mekan86631199"
                    >
                      <BsTwitter /> <span className="ms-2">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="blank"
                      className="dropdown-item  link-light"
                      href="https://github.com/mekan-carl"
                    >
                      <BsGithub /> <span className="ms-2">Github</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="blank"
                      className="dropdown-item  link-light"
                      href="mailto:smekan2320@gmail.com"
                    >
                      <BiMailSend /> <span className="ms-2">Send email</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="mobile-screen  fixed-top">
        <span className="toggleButton ">
          <a className="navbar-brand link-light fs-2" href="#">
            <SiFampay /> gull
          </a>
          <Image src={logo} onClick={handleShow} className="hamburger" />
        </span>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          responsive="lg"
          className="offcan bg-black"
          data-bs-theme="dark"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="Nav ">
              <Nav.Link
                onClick={handleClose}
                as={NavLink}
                to="/"
                className="link-light navlink2 fs-4"
              >
                <AiFillHome />
                <span className="ms-4 "> Home</span>
              </Nav.Link>
              <Nav.Link
                onClick={handleClose}
                as={NavLink}
                to="/about"
                className="link-light navlink2 fs-4 mt-2"
              >
                <BiSolidContact />
                <span className="ms-4 "> About</span>
              </Nav.Link>
              <Nav.Link className="link-light navlink2 fs-2 mt-4 border-bottom ">
                <span>Contact</span>
              </Nav.Link>
              <Nav.Link
                onClick={handleClose}
                target="blank"
                href="https://www.instagram.com/mekancarl/"
                className="link-light navlink2 fs-5 "
              >
                <BsInstagram />
                <span className="ms-4 "> Instagram</span>
              </Nav.Link>
              <Nav.Link
                onClick={handleClose}
                target="blank"
                href="https://www.facebook.com/mekan.carl"
                className="link-light navlink2 fs-5 "
              >
                <BsFacebook />
                <span className="ms-4 "> Facebook</span>
              </Nav.Link>
              <Nav.Link
                onClick={handleClose}
                target="blank"
                href="https://twitter.com/mekan86631199"
                className="link-light navlink2 fs-5 "
              >
                <BsTwitter />
                <span className="ms-4 "> Twitter</span>
              </Nav.Link>
              <Nav.Link
                onClick={handleClose}
                target="blank"
                href="https://github.com/mekan-carl"
                className="link-light navlink2 fs-5 "
              >
                <BsGithub />
                <span className="ms-4 "> Github</span>
              </Nav.Link>
              <Nav.Link
                onClick={handleClose}
                target="blank"
                href="mailto:smekan2320@gmail.com"
                className="link-light navlink2 fs-5 "
              >
                <BiMailSend />
                <span className="ms-4 ">Send email</span>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Example;
