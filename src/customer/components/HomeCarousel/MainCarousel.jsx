/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';


const MainCarousel = () => {

    const items = MainCarouselData.map((item)=> < img className='cursor-pointer w-full h-100 object-cover' role='presentation' src={item.src}/>)

    return(
    <AliceCarousel
        animationType="fadeout"
        animationDuration={800}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        items={items}
        mouseTracking
    />
    )
};

export default MainCarousel;
