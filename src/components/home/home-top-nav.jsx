import React from "react";
import { Icon, Box, useStore, Button, Row, Col, Text } from "zmp-framework/react";
import locationIcon from "../../static/icons/location.png";
import store from '../../store'
import { zmp } from 'zmp-framework/react'



const HomeTopNav = () => {

  const onClickAllClear = (e) => {
    store.dispatch("clearAllCache");
  }

  const onCartClick = (e) => {
    zmp.views.main.router.navigate('/checkout', {
      animate: true
    })
  }

  const cart = useStore("cart");

  return (
    <Row className="pd10 bgf">
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
              Thủ Đức, TP.HCM
            </Text>
          </Col>
        </Row>
      </Col>
      <Col width="60" className="top-acts">

        <Box flex justifyContent="flex-end" flexDirection='row' flexWrap>
          <Button
            className='btn-trans'
            onClick={() => onClickAllClear()}
          >
            <Icon
                className=''
                zmp='zi-qrline'
              />
          </Button>

          <Button
            className='btn-trans'
            onClick={() => onClickAllClear()}
          >
            <Icon
                className=''
                zmp='zi-search'
              />
          </Button>

          <Button
            className='btn-trans'
            onClick={() => onClickAllClear()}
          >
            <Icon
                className=''
                zmp='zi-notif'
              />
          </Button>

          <Button
            className='btn-trans'
            onClick={() => onCartClick()}
          >
            {cart.length > 0 ?
            <i className="badge-counter">{cart.length}</i>
            :
            <></>
            }

          <span className="material-icons">shopping_cart</span>

          </Button>

        </Box>

      </Col>
    </Row>
  );
};

export default HomeTopNav;
