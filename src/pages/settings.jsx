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
  Avatar,
  Box
} from 'zmp-framework/react';
import store from '../store';


const onClickLoginPage = (e) => {
  store.dispatch("loginpage");
}
const onClickLogin = (e) => {
  store.dispatch("login");
}
const onClickSignup = (e) => {
  store.dispatch("signup");
}
const onClickForgetPassword = (e) => {
  store.dispatch("forgetpass");
}
const onClickOTP = (e) => {
  store.dispatch("otp");
}
const onClickHistoryOrder = (e) => {
  store.dispatch("historyorder");
}


const SettingPage = () => {

  return (
    <Page name="settings" >
      <Card className='text-center cover pd10 mg10'>
        <Button onClick={() => onClickLoginPage()}>
          Đăng Nhập
        </Button>
      </Card>

      <Card className='text-center cover pd10 mg10'>
        <Button onClick={() => onClickForgetPassword()}>
          Quên mật khẩu
        </Button>
      </Card>


      <Card className='text-center cover pd10 mg10'>
        <Button onClick={() => onClickOTP()}>
          OTP
        </Button>
      </Card>

      <Card className='text-center cover pd10 mg10'>
        <Button onClick={() => onClickHistoryOrder()}>
          Lịch sử đặt hàng
        </Button>
      </Card>

      <Card className='text-center cover pd10 mg10'>
        <Button onClick={() => onClickLogin()}>
          Trang chủ
        </Button>
      </Card>

      <Card className='text-center cover pd10 mg10'>
        <Button onClick={() => onClickSignup()}>
          Đăng ký
        </Button>
      </Card>

    </Page>
  );
}

export default SettingPage;