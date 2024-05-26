
import './App.css';
import StyledEngineProvider from "@mui/material/StyledEngineProvider"
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage'
import { fetchTopAlbums,fetchNewAlbums,fetchSongs } from './api/api';
import { useState,useEffect} from 'react';
import {Outlet} from 'react-router-dom'
function App() {
  const [topAlbums, setTopSongsData] = useState([]);
  const [newAlbums, setNewSongsData] = useState([]);
  const [songs, setSongsData] = useState([]);

  useEffect(() => {
    (async () => {
      const topAlbums = await fetchTopAlbums();
      setTopSongsData(topAlbums);

      const newAlbums = await fetchNewAlbums();
      setNewSongsData(newAlbums);

      const songs = await fetchSongs();
      setSongsData(songs);
    })();
  }, []);
    

  
 
  
  return (
    <>
    <StyledEngineProvider injectFirst>
      <Navbar/>
      <Outlet context={{data:{topAlbums,newAlbums,songs}}}/>
    </StyledEngineProvider>

    </>
  );
}

export default App;
