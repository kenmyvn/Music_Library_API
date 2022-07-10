import "./AlbumArtDisplay.css";
import { MDBRipple } from "mdb-react-ui-kit";

const AlbumArtDisplay = (props) => {
  return (
    <div className="display-album">
      <MDBRipple
        className="bg-image hover-overlay shadow-1-strong rounded"
        rippleTag="div"
        rippleColor="danger"
      >
        <img
          src="/ab67616d0000b273ab1db43ea21d86f036e97a43.png"
          className="image-display"
          height="250px"
          alt="monsta x shape of love"
        />
        <a href="#!">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBRipple
        className="bg-image hover-overlay shadow-1-strong rounded"
        rippleTag="div"
        rippleColor="danger"
      >
        <img
          src="/ab67616d0000b2733ebc648c767f73382d6c76c7.png"
          className="image-display"
          height="250px"
          alt="monsta x the dreaming"
        />
        <a href="#!">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBRipple
        className="bg-image hover-overlay shadow-1-strong rounded"
        rippleTag="div"
        rippleColor="danger"
      >
        <img
          src="ab67616d0000b2731b11d18d5123d81f456975e5.png"
          className="image-display"
          height="250px"
          alt="monsta x no limit"
        />
        <a href="#!">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBRipple
        className="bg-image hover-overlay shadow-1-strong rounded"
        rippleTag="div"
        rippleColor="danger"
      >
        <img
          src="ab67616d0000b27303b313cdf98d61d141645f11.png"
          className="image-display"
          height="250px"
          alt="monsta x one of a kind"
        />
        <a href="#!">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBRipple
        className="bg-image hover-overlay shadow-1-strong rounded"
        rippleTag="div"
        rippleColor="danger"
      >
        <img
          src="ab67616d0000b27378d88428e28c760429f6cc7a.png"
          className="image-display"
          height="250px"
          alt="monsta x fatal love"
        />
        <a href="#!">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
          ></div>
        </a>
      </MDBRipple>
    </div>
  );
};

export default AlbumArtDisplay;
