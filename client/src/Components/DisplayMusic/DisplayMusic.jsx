import "./DisplayMusic.css";

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
        {/* {props.parentEntries.map((entry, index) => {
            return (
            <DisplayMusicRow key={index} />
            );
        })} */}
      </tbody>
    </table>
  );
};

export default DisplayMusic;
