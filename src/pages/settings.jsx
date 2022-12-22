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
const onClickOutlet = (e) => {
  store.dispatch("outlet");
}
const onClickOutletPro = (e) => {
  store.dispatch("outletPro");
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

          <Button onClick={() => onClickLogin()}>
             Trang chủ
             </Button>
             </Card>
      <Card className='text-center cover pd10 mg10'>
          <Button onClick={() => onClickSignup()}> 
           Đăng ký
           </Button>
      </Card>
      <Card className='text-center cover pd10 mg10'>
          <Button onClick={() => onClickOutlet()}> 
           Danh sách cửa hàng
           </Button>
      </Card>
      <Card className='text-center cover pd10 mg10'>
          <Button onClick={() => onClickOutletPro()}> 
           Danh sách sản phẩm trong cửa hàng
           </Button>
      </Card>

    </Page>
  );
}

export default SettingPage;