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
  TabView,
  Tabbar,
  Tabs,
  Link,
  Tab,
  Toggle,
  Swiper,
  SwiperSlide
} from 'zmp-framework/react';
import FullOrderInput from '../components/checkout/full-order-input';
import StepCustomer from '../components/checkout/step-customer';
import StepMessage from '../components/checkout/step-message';
import StepReceiver from '../components/checkout/step-receiver';
import VoucherList from '../components/checkout/voucher-list';
import FormInputEmail from '../components/register/email-input-text';
import store from '../store';
import logo from '../static/icons/logo.png'
import NavbarBack from '../components/navbar-back';


const onClickHistoryOrder = (e) => {
  store.dispatch("historyorder");
}

const HistoryPage = () => {
 
  return (
    <Page name="historyorder">
      <Box>
        <NavbarBack title='Lịch sử đặt hàng' linkRight="/find-order" labelRight='Search'/>
      </Box>
      <Card>
        <Box flex flexDirection="row" flexWrap>
          <Box>
            <Button typeName="primary">
            Chờ thanh toán
            </Button>
          </Box>
          <Box>
            <Button typeName="secondary">
            Chờ admin xử lý
            </Button>
          </Box>
          <Box>
            <Button typeName="secondary">
            Chờ xác nhận
            </Button>
          </Box>
        </Box>      
        <Swiper></Swiper>
      </Card>
      
    </Page>
  );
}

export default HistoryPage;