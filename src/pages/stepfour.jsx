import React from "react";
import { Page, Icon, Box, useStore, Button, Row, Col, Text, Grid, GridItem } from "zmp-framework/react";
import { zmp } from 'zmp-framework/react';
import store from '../store';
import '../css/order.less';
import SpDetail from '../components/step/sp-detail';

const StepfourPage = () => {
  return (
    <Page name="stepfour" className="stepfour">
      <p className="text-title">
        Bước (4/4)
      </p>
      <p className="main-title">Chúng tôi đã phân tích và tìm ra các sản phẩm phù hợp với nhu cầu của bạn nhất</p>
      <button className="xemthem-btn tonghop-btn">Xem thêm tổng hợp</button>
      <button className="xemthem-btn nganh-btn">Xem theo ngành hàng</button>
      <SpDetail />
    </Page>
  );
};
export default StepfourPage;