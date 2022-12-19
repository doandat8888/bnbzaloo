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
import FullOrderInput from '../components/checkout/full-order-input';
import StepCustomer from '../components/checkout/step-customer';
import StepMessage from '../components/checkout/step-message';
import StepReceiver from '../components/checkout/step-receiver';
import VoucherList from '../components/checkout/voucher-list';
import FormInputEmail from '../components/register/email-input-text';
import store from '../store';
import logo from '../static/icons/logo.png'
import '../css/login.less';


const onClickLoginPage = (e) => {
  store.dispatch("loginpage");
}
const onClickSignup = (e) => {
  store.dispatch("signup");
}
const onClickOTP = (e) => {
  store.dispatch("otp");
}


const LoginPage = () => {

  return (
    <Page name="login" className="login">
      <Card className = "login-card">
      <Box className ="logo"> 
       <Avatar size={120} src={logo}></Avatar>
       </Box>
        <Row className="login-now">
          <Col width={100}><b>Đăng nhập ngay</b></Col>
          <Col width={100}>Nhập email hoặc số điện thoại đã đăng ký</Col>
        </Row>
        <Row className="text-phone">
        
          {/* <Input
          type="text"
          clearButton
          required
          placeholder="Email / Số điện thoại"
          className="text-input"
        ></Input> */}
        <Col className = "email-input-loging">
              <FormInputEmail/>
              </Col>
        </Row>
        <div className="faceid">
          Hoặc đăng nhập với FaceID <br/>
         
        </div>
        <Box>
          <Button type='submit' responsive className="btn-submit" onClick={() => onClickOTP()}>
            Tiếp
          </Button>
        </Box>


        <Row className  = 'login-link'>
          <p>Bạn đã có tài khoản?</p>
          <Button onClick={() => onClickSignup()}>
             Đăng ký ngay
             </Button>
        </Row>
      </Card>
    </Page>
  );
}

export default LoginPage;