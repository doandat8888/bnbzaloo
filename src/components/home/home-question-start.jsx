import React from "react";
import {
  Icon,
  Box,
  Button,
  Row,
  Col,
  Card,
  SwiperSlide,
  Text,
  Swiper,
  Title,
} from "zmp-framework/react";
import store from "../../store";

const HomeQuestionStart = () => {
  const onClickOrder = () =>{
    store.dispatch("Stepone");
  }
  return (
    <Card className="steps-ctn cover text-center">
      <Title size="small">Bạn muốn đặt quà cho ai?</Title>

      <div className="text-center pd10 mg10">
        <Button
          className="btn-start w100 btn"
          //onClick={() => onClickChooseButtonType(BUTTON_TYPE.TERTIARY)}
          onClick={()=>onClickOrder()}
        >

          Chọn người nhận quà <Icon className="ml5" zmp="zi-chevron-right" />
        </Button>
      </div>
    </Card>
  );
};

export default HomeQuestionStart;
