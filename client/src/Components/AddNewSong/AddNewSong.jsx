import "./AddNewSong.css";

const AddNewSong = (props) => {
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
        <td>
          <input type="text" class="form-control" value="" />
        </td>
        <td>
          <input type="text" class="form-control" value="" />
        </td>
        <td>
          <input type="text" class="form-control" value="" />
        </td>
        <td>
          <input type="text" class="form-control" value="" />
        </td>
        <td>
          <input type="date" class="form-control" value={[]} />
        </td>
        <button type="button" class="btn btn-outline-secondary">
          Add A Song
        </button>
      </tbody>
    </table>
  );
};

export default AddNewSong;
