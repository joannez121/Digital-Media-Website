import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from '@mui/material'

const responsive = {
  all: {
    breakpoint: { min: 0, max: 3000 },
    items: 1,
  },
};

const HeroItem = ({ image }) => {
  return (
    <Box component="img"
      src={image.src}
      alt={image.alt}
      height="100%"
      width="100%"
    ></Box>
  )
}

const Hero = ({ images }) => {
  return (
    <Carousel responsive={responsive} showDots autoPlay rewind rewindWithAnimation containerClass="carousel-container">
      {images.map((image) => <HeroItem image={image} />)}
    </Carousel>
  );
}

export default Hero;