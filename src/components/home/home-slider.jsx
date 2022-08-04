import React from "react";
import { Icon, Box, Button, Row, Col, Card, SwiperSlide, Text, Swiper } from "zmp-framework/react";

import { getSliders } from '../../services/bnb'

var sliders = await getSliders()

const HomeSlider = () => {
  return (
    <Card className="top-slider">
        <Swiper>
            {sliders[1].map((slide, index) => (


          <SwiperSlide key={index}>
            <img src={slide.image} className="top-slider" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
  );
};

export default HomeSlider;
