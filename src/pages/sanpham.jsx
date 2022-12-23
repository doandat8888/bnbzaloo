import React from "react";
import { Page, Icon, Box, useStore, Button, Row, Col, Text, Grid, GridItem } from "zmp-framework/react";
import { zmp } from 'zmp-framework/react';
import store from '../store';
import '../css/sanpham.less';

import Sp1Img from '../static/icons/sp1.png';

const SanphamPage = () => {
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
    <Page name="sanpham" className="sanpham">
      <Col>
        <Row className="top-nav pd10 bgf">
          <Col width="40" className="top-text">
            <Box>
              <Icon
                className=''
                zmp='zi-chevron-left'
              />
              <Text className="text-title inblock text-color-3" style={{ marginBottom: 0 }}>
                Sản phẩm
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
        <Row className="dssanpham">
          <h1 className="text-title">Combo sinh nhật</h1>
          <p>Hơn 30 combo quà tặng được thiết kế dành riêng cho dịp sinh nhật: Hoa tươi - Bánh kem - Cây xanh - Nến thơm.</p>
          <Grid columns={2} noBorder="true">
            <GridItem className="pro-items" onClick={() => onClickSanpham()}>
              <img src={Sp1Img} />
              <div className="pro-item">
                <Button className="pro-btn pro-btn-id">D612583</Button>
                <Button className="pro-btn pro-btn-name">Hoa tươi</Button>
                <Button className="pro-btn pro-btn-freeship">Freeship</Button>
              </div>
              <h2 className="pro-name">Bó hoa hồng Loki Florist</h2>
              <p className="pro-price">760.000đ</p>
              <p className="pro-cost">790.000đ</p>
            </GridItem>
            <GridItem className="pro-items" onClick={() => onClickSanpham()}>
              <img src={Sp1Img} />
              <div className="pro-item">
                <Button className="pro-btn pro-btn-id">D612583</Button>
                <Button className="pro-btn pro-btn-name">Hoa tươi</Button>
                <Button className="pro-btn pro-btn-freeship">Freeship</Button>
              </div>
              <h2 className="pro-name">Hoa tươi và nến thơm</h2>
              <p className="pro-price">1415.000đ</p>
              <p className="pro-cost">1415.000đ</p>
            </GridItem>
            <GridItem className="pro-items" onClick={() => onClickSanpham()}>
              <img src={Sp1Img} />
              <div className="pro-item">
                <Button className="pro-btn pro-btn-id">D612583</Button>
                <Button className="pro-btn pro-btn-name">Hoa tươi</Button>
                <Button className="pro-btn pro-btn-freeship">Freeship</Button>
              </div>
              <h2 className="pro-name">Bó hoa hồng Loki Florist</h2>
              <p className="pro-price">760.000đ</p>
              <p className="pro-cost">790.000đ</p>
            </GridItem>
            <GridItem className="pro-items" onClick={() => onClickSanpham()}>
              <img src={Sp1Img} />
              <div className="pro-item">
                <Button className="pro-btn pro-btn-id">D612583</Button>
                <Button className="pro-btn pro-btn-name">Hoa tươi</Button>
                <Button className="pro-btn pro-btn-freeship">Freeship</Button>
              </div>
              <h2 className="pro-name">Hoa tươi và nến thơm</h2>
              <p className="pro-price">1415.000đ</p>
              <p className="pro-cost">1415.000đ</p>
            </GridItem>
            <GridItem className="pro-items" onClick={() => onClickSanpham()}>
              <img src={Sp1Img} />
              <div className="pro-item">
                <Button className="pro-btn pro-btn-id">D612583</Button>
                <Button className="pro-btn pro-btn-name">Hoa tươi</Button>
                <Button className="pro-btn pro-btn-freeship">Freeship</Button>
              </div>
              <h2 className="pro-name">Bó hoa hồng Loki Florist</h2>
              <p className="pro-price">760.000đ</p>
              <p className="pro-cost">790.000đ</p>
            </GridItem>
            <GridItem className="pro-items" onClick={() => onClickSanpham()}>
              <img src={Sp1Img} />
              <div className="pro-item">
                <Button className="pro-btn pro-btn-id">D612583</Button>
                <Button className="pro-btn pro-btn-name">Hoa tươi</Button>
                <Button className="pro-btn pro-btn-freeship">Freeship</Button>
              </div>
              <h2 className="pro-name">Hoa tươi và nến thơm</h2>
              <p className="pro-price">1415.000đ</p>
              <p className="pro-cost">1415.000đ</p>
            </GridItem>
          </Grid>
        </Row>
      </Col>
    </Page>
  );
};

export default SanphamPage;
