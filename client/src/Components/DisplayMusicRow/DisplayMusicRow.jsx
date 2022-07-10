const DisplayMusicRow = (props) => {
  const song = props.song;
  return (
    <tr>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td>{song.genre}</td>
      <td>{song.release_date}</td>
    </tr>
  );
};

export default DisplayMusicRow;
