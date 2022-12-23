import React from "react";
import { Page, Icon, Box, useStore, Button, Row, Col, Text, Grid, GridItem, Radio } from "zmp-framework/react";
import { zmp } from 'zmp-framework/react';
import store from '../store';
import '../css/order.less';

const StepthreePage = () => {
  const onClickNext = () => {
    store.dispatch("stepfour");
  }
  return (
    <Page name="stepthree-next" className="stepthree">
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
      </Row>
      <Row className="main">
        <button className="event-btn">
          <Icon className="search-icon" zmp='zi-search' />
          Tìm kiếm dịp tặng gần đây
          <Icon className="mic-icon" zmp='zi-mic-solid' />
        </button>
        <button className="event-btn">
          <Radio name='gender' value='sinhnhat' defaultChecked label='Sinh nhật' />
        </button>
        <button className="event-btn">
          <Radio name='gender' value='damcuoi' label='Đám cưới' />
        </button>
        <button className="event-btn">
          <Radio name='gender' value='kiniem' label='Kỉ niệm ngày cưới' />
        </button>
        <button className="event-btn">
          <Radio name='gender' value='dipquantrong' label='Mội dịp quan trọng' />
        </button>
        </Row>
        <Row className="footer">
        <button className="next-btn" onClick={() => onClickNext()}>
          Tiếp theo
        </button>
      </Row>
    </Page>
  );
};
export default StepthreePage;