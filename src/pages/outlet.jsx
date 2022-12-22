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
import store from '../store';

import '../css/outlet.less';
import map from '../static/map.png';
import pic from '../static/icons/size-1.png';


import FormFilterLocation from '../components/outlet/filter';

const onClickLogin = (e) => {
  store.dispatch("login");
}
const onClickOutletPro = (e) => {
  store.dispatch("outletPro");
}

const OutletPage = () => {

  return (
    <Page name="outlet" className="outlet" >
      <Row className="header">
        <Col width="30">
          <Button
            className="btn-back"
            onClick={() => onClickLogin()}
          >

            <Icon className="back-icon" zmp="zi-chevron-left" />
          </Button>
        </Col>
        <Col width='70'>
          <p className="header-outlet">Cửa hàng</p>
        </Col>
      </Row>
      <Row className="map">
        <img src={map} />
      </Row>
      <Row className="search-outlet">
        <Icon className="search-icon" zmp="zi-search" />

        <Input
          className="form-input"
          type="text"
          placeholder="Nhập tên cửa hàng"
          clearButton
        >
        </Input>
        <Icon className="mic-icon" zmp="zi-mic" />
      </Row>
      <Row className="filter">
        <FormFilterLocation />
      </Row>
      <div className="shop-location">
        <Row className="shop-row">
        
          <Col className="shop-col">
            <img className='img' src={pic} />
            <p className="shop-name">SAN Flower</p>
            <p className="shop-adr" >Quận 3,TP.HCM</p>
            <Button className="shop-state-div" onClick={() => onClickOutletPro()}>
              <Icon className="icon-check" zmp="zi-check-circle"></Icon>
              <p className="shop-state">Có sản phẩm</p>
            </Button>
         

          </Col>
          <Col className="shop-col">
            <img className='img' src={pic} />
            <p className="shop-name">SAN Flower</p>
            <p className="shop-adr" >Quận 3,TP.HCM</p>
            <div className="shop-state-div">
              <Icon className="icon-check" zmp="zi-check-circle"></Icon>
              <p className="shop-state">Có sản phẩm</p>

            </div>


          </Col>
        </Row>
        <Row className ="shop-row">
          <Col className="shop-col">
            <img className='img' src={pic} />
            <p className="shop-name">SAN Flower</p>
            <p className="shop-adr" >Quận 3,TP.HCM</p>
            <div className="shop-state-div">
              <Icon className="icon-check" zmp="zi-check-circle"></Icon>
              <p className="shop-state">Có sản phẩm</p>

            </div>


          </Col>
          <Col className="shop-col">
            <img className='img' src={pic} />
            <p className="shop-name">SAN Flower</p>
            <p className="shop-adr" >Quận 3,TP.HCM</p>
            <div className="shop-state-div">
              <Icon className="icon-check" zmp="zi-check-circle"></Icon>
              <p className="shop-state">Có sản phẩm</p>

            </div>


          </Col>
        </Row>
      </div>
    </Page>
  );
}

export default OutletPage;

