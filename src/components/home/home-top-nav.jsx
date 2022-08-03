import React from "react";
import { Icon, Box, Button, Row, Col, Text } from "zmp-framework/react";
import locationIcon from "../../static/icons/location.png";

const HomeTopNav = () => {
  return (
    <Row className="pd10">
      <Col width="40">
        <Row>
          <Col>
            <img src={locationIcon} className="inblock mr5" />
            <Text className="inblock text-color-3" style={{ marginBottom: 0 }}>
              Khu vực giao hàng
            </Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text
              size="large"
              bold="true"
              className="maincolor"
              style={{ marginBottom: 0 }}
            >
              Thủ Đức, TP HCM
            </Text>
          </Col>
        </Row>
      </Col>
      <Col width="60" className="top-acts">

        <Box flex justifyContent="flex-end" flexDirection='row' flexWrap>
          <Button
            className='btn-trans'
            onClick={() => onClickChooseButtonType(BUTTON_TYPE.SECONDARY)}
          >
            <Icon
                className=''
                zmp='zi-qrline'
              />
          </Button>

          <Button
            className='btn-trans'
            onClick={() => onClickChooseButtonType(BUTTON_TYPE.SECONDARY)}
          >
            <Icon
                className=''
                zmp='zi-qrline'
              />
          </Button>

          <Button
            className='btn-trans'
            onClick={() => onClickChooseButtonType(BUTTON_TYPE.SECONDARY)}
          >
            <Icon
                className=''
                zmp='zi-qrline'
              />
          </Button>

          <Button
            className='btn-trans'
            onClick={() => onClickChooseButtonType(BUTTON_TYPE.SECONDARY)}
          >
            <Icon
                className=''
                zmp='zi-qrline'
              />
          </Button>

        </Box>

      </Col>
    </Row>
  );
};

export default HomeTopNav;
