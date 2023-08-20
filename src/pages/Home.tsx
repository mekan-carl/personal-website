import Heading from "../components/Heading&Text/Heading";
import Video from "../components/Video/Video";
import Footer from "../components/Footer/Footer";
import HomeBGimage from "../components/HomeBGimage";
const Home = () => {
  return (
    <>
      <HomeBGimage />
      <Heading />
      <Video />
      <h4
        className="text-light text-center "
        style={{
          fontWeight: "normal",
          letterSpacing: "1.3px",
          lineHeight: "1.5em",
        }}
      >
        I suggest you to visit my E-commerce website click{" "}
        <a
          className="text-reset fst-italic"
          href="https://e-commerce-mekan-carl.vercel.app/"
          target="blank"
        >
          here
        </a>
      </h4>
      <Footer />
    </>
  );
};

export default Home;
