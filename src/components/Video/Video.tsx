import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "../Video/Video.css";

const Video = () => {
  return (
    <div className="video-container-main">
      <div className="video-container">
        <Container>
          <div className="ratio ratio-16x9">
            <iframe
              className="my-video"
              title="self-introduction"
              src="https://www.youtube.com/embed/J0gIVmLteVs"
              autoFocus={false}
              allowFullScreen
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Video;
