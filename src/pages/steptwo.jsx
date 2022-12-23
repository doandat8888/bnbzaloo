import React, { useState, useMemo, useEffect } from "react";
import { Page, Icon, Box, useStore, Button, Row, Col, Text, Grid, GridItem, Sheet, ListInput, Picker } from "zmp-framework/react";
import '../css/order.less';
import store from "../store";
import TopNav from '../components/step/top-nav';

const HomePage = () => {
  const onClickNext = () => {
    store.dispatch("stepthree");
  }
  return (
    <Page name="steptwo" className="steptwo">
      <Row className="top-nav pd10 bgf">
        <Col width="100" className="top-text">
          <Box>
            <Icon
              className=''
              zmp='zi-chevron-left'
            />
            <p className="text-title">
              Bước (2/4)
            </p>
          </Box>
        </Col>
        <TopNav />

      </Row>


      <p className="main-title">Bạn muốn <span>giao quà đến đâu?</span></p>
      <Row className="main">
        <button className="address-btn">
          <div className="add-input">
            <Icon className="add-icon" zmp='zi-home' />
            <Picker
              className='input-n'
              title='Tỉnh, thành phố'
              placeholder='Tỉnh, thành phố'
              data={[
                {
                  textAlign: 'center',
                  values: ['1', '2', '3', '4'],
                  displayValues: [
                    'Hồ Chí Minh',
                    'Hà Nội',
                    'Đà Nẵng',
                    'Huế',
                    'Quảng Bình',
                    'Quảng Nam'
                  ]
                }
              ]}
              formatValue={(values, displayValues) => {
                return `${displayValues[0]}`;
              }}
            />
            <Icon className="down-icon" zmp='zi-chevron-down' />
          </div>
        </button>
        <button className="address-btn">
          <div className="add-input">
            <Icon className="add-icon" zmp='zi-pin' />
            <Picker
              className='input-n'
              title='Tỉnh, thành phố'
              placeholder='Tỉnh, thành phố'
              data={[
                {
                  textAlign: 'center',
                  values: ['1', '2', '3', '4'],
                  displayValues: [
                    'Huyện 1',
                    'Huyện 2',
                    'Huyện 3',
                    'Huyện 4',
                    'Huyện 5',
                    'Huyện 6',
                    'Huyện 7'
                  ]
                }
              ]}
              formatValue={(values, displayValues) => {
                return `${displayValues[0]}`;
              }}
            />
            <Icon className="down-icon" zmp='zi-chevron-down' />
          </div>
        </button>
      </Row>
      <Row className="footer">
        <button className="next-btn" onClick={() => onClickNext()}>
          Tiếp theo
        </button>
      </Row>
    </Page>
  );
}

export default HomePage;