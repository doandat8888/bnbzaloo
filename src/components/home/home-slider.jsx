import React, {useEffect} from "react";
import store from '../../store'
import { Icon, Box, Button, Row, Col, Card, SwiperSlide, Text, useStore, Swiper } from "zmp-framework/react";

import { getSliders } from '../../services/bnb'

var sliders = null;





const HomeSlider = () => {

  const _update = useStore("updateTime");

  useEffect(() => {
    getSliders().then((res) => {
      if(res.code == "ok"){
        sliders = res.sliders;
        store.dispatch("setUpdate", Math.random());
      } else {
        alert(res.msg);
      }
    }, (err) => {} );

  }, []);

  if(sliders == null || sliders[1] == null){
    return <></>
  }

  return (
    <Card className="top-slider">
        <Swiper>
            {sliders[1].map((slide, index) => (


          <SwiperSlide key={index}>
            <img src={slide.image}  />
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
  );
};

export default HomeSlider;
