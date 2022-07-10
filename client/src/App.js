import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import AlbumArtDisplay from './Components/AlbumArtDisplay/AlbumArtDisplay';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import SearchBar from './Components/SearchBar/SearchBar';
import AddNewSong from './Components/AddNewSong/AddNewSong';

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

  async function postNewSong(newSong){
    await axios.post('http://127.0.0.1:8000/music/', newSong).then(res => setSongs([...songs, res]));
    // setSongs(response.data)
  }

  return (
    <div>
       <NavBar />
      {/* <button onClick={() => getAllSongs()}>Get All Songs</button> */}
        <AlbumArtDisplay />
        <AddNewSong songsProperty={postNewSong}/>
        <DisplayMusic songs={songs}/>
        <SearchBar />
    </div>
  );
}

export default App;
