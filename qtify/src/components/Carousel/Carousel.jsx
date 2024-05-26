import React, { useEffect } from 'react'
import 'swiper/css'
import {Navigation} from 'swiper/modules'
import {Swiper,useSwiper,SwiperSlide} from 'swiper/react'
import styles from './Carousel.module.css'
import CarouselLeft from './CarouselLeft/CarouselLeft'
import CarouselRight from './CarouselRight/CarouselRight'
import Card from '../Card/Card'
const Controls = ({data}) => {
    let swiper = useSwiper();

   
    useEffect(() => {
         swiper.slideTo(0)
    },[swiper])

    return <></>
}

const Carousel = ({data,type,renderCardComponent}) => {
 
  return (
    <div className={styles.wrapper}>
        <Swiper style={{padding:"0px 20px"}} initialSlide = {0} modules={{Navigation}} slidesPerView={'auto'} spaceBetween={40} allowTouchMove>
             <Controls data={data} />
            <CarouselLeft />
            <CarouselRight /> 
            {data.map((item) => (
                <SwiperSlide>{renderCardComponent(item,type)}</SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Carousel