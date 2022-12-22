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
  Toggle
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
      
      <TabView >
            <Tabbar top >
              <Link tabLinkActive>
                <Button>Chờ thanh toán</Button>
              </Link>
              <Link>
                <Button>Chờ admin xử lý</Button>
              </Link>
              <Link>
              <Button>Chờ xác nhận</Button>
              </Link>
            </Tabbar>

            <Tabs>
                <Tab tabActive>
                    
                </Tab>
                <Tab>
                   
                </Tab>
                <Tab>
                   
                </Tab>
            </Tabs>
        </TabView>
        
    </Page>
  );
}

export default HistoryPage;