import React from "react";
import { Page, Icon, Box, useStore, Button, Row, Col, Text, Grid, GridItem } from "zmp-framework/react";
import { zmp } from 'zmp-framework/react';
import store from '../store';
import '../css/order.less';
import TopNav from '../components/step/top-nav';

const StepthreePage = () => {
  const onClickNext = () => {
    store.dispatch("stepthreenext");
  }
  return (
    <Page name="stepthree" className="stepthree">
      <Row className="top-nav pd10 bgf">
        <Col width="100" className="top-text">
          <Box>
            <Icon
              className=''
              zmp='zi-chevron-left'
            />
            <p className="text-title">
              Bước (3/4)
            </p>
          </Box>
        </Col>
        <TopNav />
      </Row>
      <p className="main-title">Bạn muốn tặng quà cho <span>XXX</span> dịp gì?</p>
      <Row className="main">
        <button className="event-btn" onClick={() => onClickNext()}>
          Cá nhân
          <Icon className="right-icon" zmp='zi-chevron-right' />
        </button>
        <button className="event-btn" onClick={() => onClickNext()}>
          Ngày lễ trong năm
          <Icon className="right-icon" zmp='zi-chevron-right' />
        </button>
        <button className="event-btn" onClick={() => onClickNext()}>
          Dịp khác
          <Icon className="right-icon" zmp='zi-chevron-right' />
        </button>
      </Row>
    </Page>
  );
};
export default StepthreePage;