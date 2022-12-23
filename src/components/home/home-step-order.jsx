import React from "react";
import { Icon, Box, Button, Row, Col, Card, SwiperSlide, Text, Swiper, Title } from "zmp-framework/react";
import store from '../../store';

const HomeStepOrder = () => {
  const onClickOrder = () => {
    store.dispatch("Stepone");
  }
  return (
    <Card className="steps-ctn cover text-center">
        <Title size="small">Đặt quà tặng nhanh chóng trong 4 bước</Title>

        <ul className="steps">
            <li className="step ">
                <div className="step-content">
                <span className="step-circle">1</span>
                <span className="step-text">Chọn<br />người nhận</span>
                </div>
            </li>
            <li className="step ">
                <div className="step-content">
                <span className="step-circle">2</span>
                <span className="step-text">Chọn<br />khu vực</span>
                </div>
            </li>
            <li className="step ">
                <div className="step-content">
                <span className="step-circle">3</span>
                <span className="step-text">Chọn<br />dịp tặng</span>
                </div>
            </li>
            <li className="step ">
                <div className="step-content">
                <span className="step-circle">4</span>
                <span className="step-text">Chọn<br />sản phẩm</span>
                </div>
            </li>
        </ul>

        <div className="text-center pd10 mg10">
        <Button className="btn-primary btn"
            //onClick={() => onClickChooseButtonType(BUTTON_TYPE.TERTIARY)}
            onClick={() => onClickOrder()}>
            <Icon
                className=''
                zmp='zi-chevron-right'
              />

            Bắt Đầu Đặt Quà
          </Button>
          </div>
    </Card>

  );
};

export default HomeStepOrder;
