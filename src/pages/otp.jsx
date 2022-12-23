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
    <Page name="otp">
       <Card style={{ textAlign: 'center'}}>
        <Box mt={4}>
          <Avatar size={120} src={logo}></Avatar>        
        </Box>
        <Box mt={10}>
          <Row>
            <Col >
              <Text size='large' bold>
                Xác thực mã OTP
              </Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text size='large'>
              Nhập mã OTP được gửi đến số điện thoại
              </Text>
            </Col>
          </Row>
        </Box>
       
        <Row className="otp-textbox">
          <Col  className = "num-otp-row">
            <input height='60px' width='55px'></input>
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
        <ul>
        <li className="step ">
          <div className="step-content">
          <span className="step-retangle"></span>
          
          </div>
        </li>
        </ul>
        
          <Box >
          <Row>
            <Col>
              <Text>
              Bạn không nhận được mã?
              </Text>
            </Col>
            <Col>
              <Box>
              <Button
              type="button"
              className="primary"
              onClick={() => onClickSignup()}
              >
              <b>Gửi lại mã</b>
              </Button>
              </Box>
            </Col>
          </Row>
        </Box>

          <Box mx={6} mt={10}>
          <Button
            type='submit' 
            responsive 
            className="btn-submit"
            onClick={() => onChangeInput()}
            >
            Đăng nhập
          </Button>
        </Box>
      </Card>
    </Page>
  );
}
export default OTPPage;

