import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeCardData from "./HomeCardData";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { exampledata } from "../../../Data/exampledata";

// eslint-disable-next-line react/prop-types
export default function HomeCard({ sectionName }) { // Note: destructured props
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    568: { items: 2.5 },
    1024: { items: 4 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = exampledata.slice(0,10).map((product, index) => (
    <HomeCardData key={index} product={product} sectionName={sectionName} /> // Pass sectionNam as prop
  ));

  return (
    <div className="px-4 lg:px-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4" >{sectionName}</h3>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          mouseTracking
          disableDotsControls
          responsive={responsive}
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
          disableButtonsControls
        />
        
        {activeIndex !== 0 && <Button
          onClick={slidePrev}
          className="absolute top-1/2 left-0 z-50 transform -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <KeyboardArrowLeftIcon className="text-black" />
        </Button>}

        {activeIndex !== items.length - 1 && <Button
          onClick={slideNext}
          className="absolute top-1/2 right-0 z-50 transform -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <KeyboardArrowLeftIcon className="rotate-180 text-black" />
        </Button>}
      </div>
    </div>
  );
}
