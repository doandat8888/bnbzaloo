import React from "react";
import { Page, Icon, Box, useStore, Button, Row, Col, Text, Grid, GridItem, Card } from "zmp-framework/react";
import { zmp } from 'zmp-framework/react';
import store from '../../store';
import '../../css/sanpham.less';

import Sp1Img from '../../static/icons/sp1.png';

const SanphamDetailPage = () => {
  return (
    <Card name="sanpham" className="sanpham">
      <Row className="dssanpham">
        <Grid columns={2} noBorder="true">
          <GridItem className="pro-items">
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
          <GridItem className="pro-items">
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
          <GridItem className="pro-items">
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
          <GridItem className="pro-items">
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
          <GridItem className="pro-items">
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
          <GridItem className="pro-items">
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
    </Card>
  );
};

export default SanphamDetailPage;
