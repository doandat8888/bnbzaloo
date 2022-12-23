import React from 'react';
import {
  Page,
  Row,
  Col,
  Text,
  Button,
  Box,
  Avatar,
  Icon,
  Card
} from 'zmp-framework/react';
import NavbarBack from '../components/navbar-back';
import store from '../store';
import logo from '../static/icons/logo.png'
import FormInput from '../components/login/input-text';


const LoginPage = () => {
  const onClickSignup = (e) => {
    store.dispatch("signup");
  }
  const onClickOTP = (e) => {
    store.dispatch("otp");
  }
  const handleSubmit = (e) => {
    
  }

  const onForgetPass = (e) => {
    store.dispatch("forgetpass");
  }
  return (
    <Page name="login">
        <NavbarBack />
        <Card style={{ textAlign: 'center'}}>
        <Box mt={4}>
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
          <FormInput />
        </Box>

        <Box flex flexDirection='column' alignItems='center' mt={10} >
          <Text size='large' bold>
            Hoặc đăng nhập với FaceID
          </Text>
          <Icon 
          
          />
        
        </Box>


        <Box mx={6}>
          <Button
            type='submit' 
            responsive 
            className="btn-submit"
            onClick={() => handleSubmit()}
            >
            Tiếp
          </Button>
        </Box>

        <Box mt={10}>
          <Row>
            <Col>
              <Box ml={6}>
              Bạn đã có tài khoản?
              </Box>
            </Col>
            <Col>
              <Box m={0}>
              <Button
              type="button"
              className="primary"
              onClick={() => onClickSignup()}
              >
              <b>Đăng ký ngay</b>
              </Button>
              </Box>
            </Col>
          </Row>
        </Box>

      </Card>
    </Page>
  );
}

export default LoginPage;