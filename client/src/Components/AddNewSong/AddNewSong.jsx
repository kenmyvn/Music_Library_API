import "./AddNewSong.css";
import React, { useState } from "react";

const AddNewSong = (props) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [release_date, setReleaseDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newSong = {
      title: title,
      artist: artist,
      album: album,
      genre: genre,
      release_date: release_date,
    };
    console.log(newSong);
    props.songsProperty(newSong);
  }

  return (
    <form className="display-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        className="form-control form"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label htmlFor="artist">Artist</label>
      <input
        type="text"
        className="form-control form"
        value={artist}
        onChange={(event) => setArtist(event.target.value)}
      />
      <label htmlFor="album">Album</label>
      <input
        type="text"
        className="form-control form"
        value={album}
        onChange={(event) => setAlbum(event.target.value)}
      />
      <label htmlFor="genre">Genre</label>
      <input
        type="text"
        className="form-control form"
        value={genre}
        onChange={(event) => setGenre(event.target.value)}
      />
      <label htmlFor="release_date" className="label">
        Release Date
      </label>
      <input
        type="date"
        className="form-control form"
        value={release_date}
        onChange={(event) => setReleaseDate(event.target.value)}
      />
      <button type="submit" className="btn btn-outline-danger">
        Add A Song
      </button>
    </form>
  );
};

export default AddNewSong;
