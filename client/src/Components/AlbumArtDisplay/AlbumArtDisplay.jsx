import "./AlbumArtDisplay.css";

const AlbumArtDisplay = (props) => {
  return (
    <div className="display-album">
      <img
        className="image-display"
        src="/ab67616d0000b273ab1db43ea21d86f036e97a43.png"
        height="250px"
        alt="monsta x shape of love"
      />
      <img
        className="image-display"
        src="ab67616d0000b2733ebc648c767f73382d6c76c7.png"
        height="250px"
        alt="monsta x the dreaming"
      />
      <img
        className="image-display"
        src="ab67616d0000b2731b11d18d5123d81f456975e5.png"
        height="250px"
        alt="monsta x no limit"
      />
      <img
        className="image-display"
        src="ab67616d0000b27303b313cdf98d61d141645f11.png"
        height="250px"
        alt="monsta x one of a kind"
      />
      <img
        className="image-display"
        src="ab67616d0000b27378d88428e28c760429f6cc7a.png"
        height="250px"
        alt="monsta x fatal love"
      />
    </div>
  );
};

export default AlbumArtDisplay;
