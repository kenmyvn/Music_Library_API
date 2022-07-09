import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import AlbumArtDisplay from './Components/AlbumArtDisplay/AlbumArtDisplay';
// import AlbumArtDisplay from './Components/AlbumArtDisplay/AlbumArtDisplay';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs()
    console.log('Hello World')
  }, []);


  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response.data);
    setSongs(response.data)
  }

  return (
    <div>
       <NavBar />
      {/* <button onClick={() => getAllSongs()}>Get All Songs</button> */}
        <AlbumArtDisplay />
    </div>
  );
}

export default App;
