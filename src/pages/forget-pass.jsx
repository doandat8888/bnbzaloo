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
  Avatar,
  Tabs,
  Link,
  Tab
} from 'zmp-framework/react';
import FullOrderInput from '../components/checkout/full-order-input';
import StepCustomer from '../components/checkout/step-customer';
import StepMessage from '../components/checkout/step-message';
import StepReceiver from '../components/checkout/step-receiver';
import VoucherList from '../components/checkout/voucher-list';
import store from '../store';
import logo from '../static/icons/logo.png'
import NavbarBack from '../components/navbar-back';
import FormInputEmail from '../components/register/email-input-text';


const onClickLogin = (e) => {
  store.dispatch("login");
}


const ForgetPasswordPage = () => {
  return (
    <Page name="forgetpass">
      <Card style={{ textAlign: 'center'}}>
        <Box mt={10}>
          <Avatar size={120} src={logo}></Avatar>        
        </Box>
        <Box mt={10}>
          <Row>
            <Col >
              <Text size='large' bold>
                Đăng nhập ngay
              </Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text size='large'>
              Nhập email hoặc số điện thoại đã đăng ký
              </Text>
            </Col>
          </Row>
        </Box>
      
        <Box mt={10}>
          <FormInputEmail 
            errorMessage="Email chưa đăng ký tài khoản"
          />
        </Box>
       
        <Box mx={6} mt={10}>
          <Button
            type='submit' 
            responsive 
            className="btn-submit"
            onClick={() => onChangeInput()}
            >
            Gửi
          </Button>
        </Box>

      </Card>
    </Page>
  );
}

export default ForgetPasswordPage;