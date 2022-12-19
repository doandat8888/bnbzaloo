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
  Checkbox
} from 'zmp-framework/react';
import HomePage from '.';
import NameInput, { FormInputName } from '../components/register/name-input-text';
import store from '../store';
import FormInput from '../components/common/form-input-phone-number';

import '../css/DanhmucHoa.less';

const onClickDanhmucHoa = (e) => {
  store.dispatch("signup");
}

const RegistetPage = () => {
//aaaaaa
  return (
    <Page name="register" className="register" >
      <Card className='text-form' >
          <Row className='header'>
            <Col width="5">
              <Icon
                zmp='zi-chevron-left'
                className='back-icon'
              />
            </Col>
            <Col width="95">
              <p className="maincolor text-center">Đăng ký ngay </p>
            </Col>
          </Row>
          <p className="text-color-3 text-center">Để khám phá tính năng của B&B nhé</p>
        <Row className="text-name">
          
          <Icon
            zmp='zi-user'
            className="user-icon"
          />
          <FormInputName/>
         
        </Row>
        <Row>
         <FormInput/>
        </Row>
        <Row className = 'text-email'>
        {/* <Icon
            zmp='zi-user'
            className="user-icon"
          /> */}
          <FormInputEmail/>
        </Row>
        <Row>
          <FormInputPassword/>
        </Row>
        <Row>
          <FormConformPassword/>
        </Row>
        <Row  className ='intro-code'>
          <FormInputCode/>
        </Row>
        <Row>
          <Box>
            <Checkbox name='rule' label='Tôi đồng ý với các điều khoản mà Belove & Beyond cung cấp.' value='rule' />
          </Box>
        </Row>
        <Row>
          <Button
           type='submit' 
           responsive 
           className="btn-submit"
           onClick={() => onClickLoginPage()}
            >
            Đăng ký

          </Button>
        </Row>
        <Row className  = 'login-link'>
          <p>Bạn đã có tài khoản?</p>
          <Button onClick={() => onClickLoginPage()}>
             Đăng nhập ngay
             </Button>
        </Row>
      </Card>


    </Page>
  );
}

export default RegistetPage;

