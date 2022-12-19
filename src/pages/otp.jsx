import React from 'react';
import {
  Page,
  Navbar,
  NavTitleLarge,
  List,
  ListInput,
  ListItem,
  Card,
  Input,
  Row,
  Col,
  Text,
  Button,
  Icon,
  Box,
  Avatar
} from 'zmp-framework/react';

import store from '../store';
import logo from '../static/icons/logo.png'
//import '../css/otp.less';

const onClickOTP = (e) => {
  store.dispatch("otp");
}

const OTPPage = () => {
  return (
    <Page name="otp" className="otp">
       <Card className = "otp-card" >
       <Box className ="logo"> 
       <Avatar size={120} src={logo}></Avatar>
       </Box>
        <Row className="otp-now">

          <Col width={100}><b>Xác thực mã OTP</b></Col>
          <Col width={100}>Nhập mã OTP được gửi đến số điện thoại</Col>
        </Row>
        <Row className="otp-textbox">
          <Col  className = "num-otp-row">
            <input className = "num-otp"></input>
          </Col>
          <Col  className = "num-otp-row">
          <input className = "num-otp"></input>

          </Col>
          <Col className = "num-otp-row">
          <input className = "num-otp"></input>

          </Col>
          <Col className = "num-otp-row">
          <input className = "num-otp"></input>

          </Col>
        </Row>
        <Row className = "code-get-again">
          <p>
          Bạn không nhận được mã?
          </p>
          <Button className ="">
            Gửi lại mã
          </Button>
          </Row>
        <Box>
          <Button type='submit' responsive className="btn-submit">
            Đăng nhập
          </Button>
        </Box>
      </Card>
    </Page>
  );
}
export default OTPPage;

