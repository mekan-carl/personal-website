import { BsTwitter, BsInstagram, BsFacebook, BsGithub } from "react-icons/bs";
import "../Footer/Footer.css";
const Footer = () => {
  return (
    <>
      <p className="info-web">This website made with Vite + React + TS</p>
      <div className="footer-container">
        <h5 className="footer-h5">© Mekan Sahatvaliyev</h5>
        <div className="footer-links">
          <a
            title="Twitter"
            className="foot-link"
            href="https://twitter.com/mekan86631199"
            target="blank"
          >
            <BsTwitter />
          </a>
          <a
            title="Instagram"
            className="foot-link"
            href="https://www.instagram.com/mekancarl/"
            target="blank"
          >
            <BsInstagram />
          </a>
          <a
            title="Facebook"
            className="foot-link "
            href="https://www.facebook.com/mekan.carl"
            target="blank"
          >
            <BsFacebook />
          </a>
          <a
            title="GitHub"
            className="foot-link "
            href="https://github.com/mekan-carl"
            target="blank"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
