import { Link } from "react-router-dom";
import "../Heading&Text/Heading&Text.css";
import "animate.css";

const Heading = () => {
  return (
    <>
      <div className="text-container">
        <h1
          title="refresh the page "
          className="animate__animated animate__bounce hello"
        >
          Hello,
        </h1>
        <h4 className="h4-text">
          <p className="Im-Mekan">I'm Mekan</p> I prepared a short video to
          introduce myself, If you want to know more informations click{" "}
          <Link to="/about">here</Link>
        </h4>
      </div>
    </>
  );
};

export default Heading;
