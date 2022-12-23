import React from "react";
import { Icon, Box, useStore, Button, Row, Col, Text, Grid, GridItem } from "zmp-framework/react";
import { zmp } from 'zmp-framework/react';
import store from '../store';
import '../css/DanhmucHoa.less';

import HomeQuestionStart from '../components/home/home-question-start';
import HoaImg from '../static/icons/hoa.png';

const DanhmucHoaPage = () => {

  const onClickAllClear = (e) => {
    store.dispatch("clearAllCache");
  }
  const onCartClick = (e) => {
    zmp.views.main.router.navigate('/checkout', {
      animate: true
    })
  }
  const cart = useStore("cart");

  const onClickSanpham = (e) => {
    store.dispatch("sanpham");
  }

  return (
    <Col className="danhmucHoa">
      <Row className="top-nav pd10 bgf">
        <Col width="30" className="top-text">
          <Box>
            <Icon
              className=''
              zmp='zi-chevron-left'
            />
            <Text className="text inblock text-color-3" style={{ marginBottom: 0 }}>
              Hoa
            </Text>
          </Box>
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

      <HomeQuestionStart />

      <Row className="danhmuc">
        <h1 className="text-title">Danh mục sản phẩm <span>Hoa</span></h1>
        <Grid columns={4} noBorder="true" className="cate-item">
          <GridItem onClick={() => onClickSanpham()}>
            <img src={HoaImg} />
            <p>Combo quà tặng sinh nhật</p>
          </GridItem>
          <GridItem>
            <img src={HoaImg} />
            <p>Hoa sinh nhật</p>
          </GridItem>
          <GridItem>
            <img src={HoaImg} />
            <p>Hoa sinh nhật</p>
          </GridItem>
          <GridItem>
            <img src={HoaImg} />
            <p>Hoa sinh nhật</p>
          </GridItem>
          <GridItem>
            <img src={HoaImg} />
            <p>Combo quà tặng sinh nhật</p>
          </GridItem>
          <GridItem>
            <img src={HoaImg} />
            <p>Hoa sinh nhật</p>
          </GridItem>
          <GridItem>
            <img src={HoaImg} />
            <p>Hoa sinh nhật</p>
          </GridItem>
          <GridItem>
            <img src={HoaImg} />
            <p>Hoa sinh nhật</p>
          </GridItem>
          <GridItem>
            <img src={HoaImg} />
            <p>Combo quà tặng sinh nhật</p>
          </GridItem>
          <GridItem>
            <img src={HoaImg} />
            <p>Hoa sinh nhật</p>
          </GridItem>
          <GridItem>
            <img src={HoaImg} />
            <p>Hoa sinh nhật</p>
          </GridItem>
          <GridItem>
            <img src={HoaImg} />
            <p>Hoa sinh nhật</p>
          </GridItem>
          <GridItem>
            <img src={HoaImg} />
            <p>Combo quà tặng sinh nhật</p>
          </GridItem>
          <GridItem>
            <img src={HoaImg} />
            <p>Hoa sinh nhật</p>
          </GridItem>
          <GridItem>
            <img src={HoaImg} />
            <p>Hoa sinh nhật</p>
          </GridItem>
          <GridItem>
            <img src={HoaImg} />
            <p>Hoa sinh nhật</p>
          </GridItem>
        </Grid>
      </Row>
    </Col>
  );
};

export default DanhmucHoaPage
  ;
