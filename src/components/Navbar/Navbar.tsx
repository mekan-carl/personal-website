import { NavLink } from "react-router-dom";
import { SiFampay } from "react-icons/si";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav
          className=" container navbar navbar-expand-lg fixed-top bg-transparent "
          data-bs-theme="dark"
        >
          <div className="container-fluid ">
            <NavLink
              style={{ fontSize: "2rem" }}
              className="navbar-brand "
              to="/"
            >
              <SiFampay />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li className="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Contact
                  </a>
                  <ul className="dropdown-menu bg-transparent">
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.instagram.com/mekancarl/"
                        target="blank"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.facebook.com/mekan.carl"
                        target="blank"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.linkedin.com/in/mekan-sahatvaliyev-59a523252/"
                        target="blank"
                      >
                        Linkedin
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://twitter.com/mekan86631199"
                        target="blank"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="mailto:smekan2320@gmail.com"
                        target="blank"
                      >
                        Send Email
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
