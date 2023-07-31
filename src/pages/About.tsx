import Footer from "../components/Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-end">
        <div className="flex-shrink-0">
          <img
            style={{ objectFit: "cover", height: "18rem", marginLeft: "10px" }}
            src="public/profilee.png"
            alt="black white image of a young boy"
          />
        </div>
        <div className="text flex-grow-1 ms-3">
          <h1 className="text-center">About me</h1>
          <h4 className="text-center">Front-End Web-Developer</h4>
          <p className="text-center">
            I am a 21-year-old front-end web developer, born in Turkmenistan,
            and currently living in Istanbul, Turkey. My education includes
            attending No:42 High School in Ashgabat. I am a passionate and
            driven junior front-end web developer with over 8 months of
            experience in the field. I possess strong skills in HTML, CSS,
            JavaScript, and React. I am constantly seeking to expand my
            knowledge and stay up-to-date with the latest web development
            trends. With a keen eye for detail and a dedication to delivering
            top-notch results, I am eager to contribute my expertise to projects
            and collaborate with a dynamic team of professionals.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
