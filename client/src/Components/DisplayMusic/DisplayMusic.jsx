import "./DisplayMusic.css";
import DisplayMusicRow from "../DisplayMusicRow/DisplayMusicRow";

const DisplayMusic = (props) => {
  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {props.songs
          .filter((song) => {
            return (
              song.title
                .toLowerCase()
                .includes(props.userInput.toLowerCase()) ||
              song.artist
                .toLowerCase()
                .includes(props.userInput.toLowerCase()) ||
              song.album
                .toLowerCase()
                .includes(props.userInput.toLowerCase()) ||
              song.genre.toLowerCase().includes(props.userInput.toLowerCase())
            );
          })
          .map((song, index) => {
            return <DisplayMusicRow key={index} song={song} />;
          })}
      </tbody>
    </table>
  );
};

export default DisplayMusic;
