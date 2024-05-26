
import './App.css';
import StyledEngineProvider from "@mui/material/StyledEngineProvider"
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage'
import { fetchTopAlbums,fetchNewAlbums,fetchSongs } from './api/api';
import { useState,useEffect} from 'react';
import {Outlet} from 'react-router-dom'
function App() {
  const [data,setData]=useState({});
  const generateAlbums=(key,source)=>{
    source().then((data)=>{
      
      setData((prevData)=>{
        return {...prevData,[key]:data}
      });
    })
    

  }
  useEffect(()=>{
    generateAlbums("topAlbums",fetchTopAlbums);
    generateAlbums("newAlbums",fetchNewAlbums);
    generateAlbums("songs",fetchSongs);
  });
  const {topAlbums=[],newAlbums=[],songs=[]}=data;
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
