 import Hero from "../../components/Hero/Hero"
 import {useOutletContext} from "react-router-dom"
 import Section from '../../components/Section/Section'
 import styles from './HomePage.module.css'
 import { fetchFilters } from "../../api/api"
 import {useState} from 'react'
 import { useEffect } from "react"
 import Filters  from "../../components/Filters/Filters";
 const HomePage=()=>{
    const {data} =useOutletContext();
    const {topAlbums,newAlbums,songs}=data;
    const [filteredDataValues, setFilteredDataValues] = useState([''])
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState(0);

  const generateSongsData = (value) => {

    let songData = songs;

    let key;
    if (value === 0) {

      setFilteredDataValues(songs)
      return;
    }

    else if (value === 1) {
      key = 'rock'

    }

    else if (value === 2) {
      key = 'pop'
    }

    else if (value === 3) {
      key = 'jazz'
    }

    else if (value === 4) {
      key = 'blues'
    }

    const data = songData.filter((item) => {
      return item.genre.key === key

    })
    setFilteredDataValues(data)

  }

  const handleChange = (event, newValue) => {
    setValue(newValue)

    generateSongsData(newValue)

  }
  const handleToggle = () => {
    setToggle(!toggle)
  }

  const filteredData = (val) => {
    generateSongsData(val)
    
  }
  useEffect(() => {
    generateSongsData(value)
}, [value, songs])
  useEffect(() => {
    
    
  
    

  }, [])
    return(
        <>
            <Hero/>
            <div className={styles.sectionWrapper}>
                <Section title="Top Albums" data={topAlbums} type="album"/>
                <Section title="New Albums" data={newAlbums} type="album"/>
                <Filters data={songs} type='songFilter' title='Songs' filteredData={filteredData} filteredDataValues={filteredDataValues} value={value} handleChange={handleChange} handleToggle={handleToggle}/>
            </div>
        </>
    )
 }
 export default HomePage;