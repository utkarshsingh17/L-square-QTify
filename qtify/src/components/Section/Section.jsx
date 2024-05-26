import { CircularProgress } from '@mui/material';
import React,{useEffect} from "react"
import  {useState} from 'react'
import styles from "./Section.module.css"
import Card from "../Card/Card"
import Carousel from '../Carousel/Carousel';
import Filters from '../Filters/Filters';
const Section=({title,data,filtersource,type})=>{
  
  const[selectedFilterIndex,setselectedFilterIndex]=useState(0)
    const [carouselToggle,setCarouselToggle]=useState(true)
    const handleToggle=()=>{
        setCarouselToggle(!carouselToggle);
    }
   
    return (
        <div>
        <div className={styles.header}>
          <h3>{title}</h3>
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle ? "Show All" : "Collapse All"}
          </h4>
        </div>
       
        {data.length === 0 ? (
          <CircularProgress />
        ) : (
          <div className={styles.cardWrapper}>
            {!carouselToggle ? (
              <div className={styles.wrapper}>
                  {data.map((card) => (
                  <Card data={card} type={type} key={card.id} />
                  ))}
              </div>
            ) : (
              
              <Carousel data={data} type={type} renderCardComponent={(data,type) => <Card data={data} type={type}/>}/>
              
            )}
          </div>
        )}
      </div>
    )
}
export default Section;