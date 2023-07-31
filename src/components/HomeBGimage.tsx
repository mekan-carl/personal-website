import "./HomeBGimage.css";
import home from "../../public/pexels-hasan-albari-1229861.jpg";

const HomeBGimage = () => {
  return (
    <>
      <img className="img-fluid" src={home} />
      <div className="text-m ">
        <h4>I'm</h4>
        <h1 className="mekan">MEKAN</h1>
        <h3>I like to make websites with animations</h3>
      </div>
    </>
  );
};

export default HomeBGimage;
