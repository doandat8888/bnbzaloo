import React from 'react';
import {
  Page,
  Navbar,
  NavTitleLarge,
  List,
  ListItem,
  Card,
  Text,
  Button,
  Icon,
  Row,
  Col,
  Box,
  zmp,
  ListInput,
  Checkbox,
  Input,
  Sheet,
  Picker

} from 'zmp-framework/react';

import '../css/outletpro.less';
import pic from '../static/icons/size-1.png';
import QRcode from '../static/QR cửa hàng.png';


import FormInputProduct from '../components/products-outlet/searchbar';
// import FormFilterDemand from '../components/products-outlet/filterdemand';


const onClickLoginPage = (e) => {
  store.dispatch("loginpage");
}


const OutletPage = () => {

  return (
    <Page name="outletpro" className="outletpro" >
      <Row className="header">
        <Icon className="search-icon" zmp="zi-search"></Icon>
        <FormInputProduct />
      </Row>
      <Row className="shop">
        <Col className="logo-shop" width="30">
          <img src={pic} />

        </Col>
        <Col width="50">
          <Row className="name-shop">SAN Flower</Row>
          <Row className="adr">Quận 1, TP.HCM</Row>
        </Col>
        <Col width="20">
          <img className="code" src={QRcode} />
        </Col>
      </Row>
      <Row className="occasion-btn">
        <button className="btn">Tất cả</button>
        <button className="btn">Sinh Nhật</button>
        <button className="btn">Đám cưới</button>
        <button className="btn">Kỉ niệm ngày cưới</button>

      </Row>
      <Row>
        
      </Row>
    </Page>
  );
}

export default OutletPage;

