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
import logo from '../static/icons/logo.png';
import NavbarBack from '../components/navbar-back';
import WaitPayment from '../components/history-order/wait-payment';



const HistoryPage = () => {
 
  return (
    <Page name="historyorder">
      <Box>
        <NavbarBack title='Lịch sử đặt hàng' linkRight="/find-order" labelRight={''}/>
      </Box>
      <Card>
        {/* <Box flex flexDirection="row" flexWrap>
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
        </Box>       */}
      </Card>

      <TabView className='history-order-content'>
            <Tabbar top id="app-tab-bar" className='history-order-tabs'>
              <Link tabLink="#view-wait-payment" tabLinkActive>
                <Text className='history-order-content-txt'>Chờ thanh toán</Text>
              </Link>
              <Link tabLink="#view-admin-handle">
                <Text className='history-order-content-txt'>Chờ admin xử lý</Text>
              </Link>
              <Link tabLink="#view-wait-accept">
                <Text className='history-order-content-txt'>Chờ xác nhận</Text>
              </Link>
            </Tabbar>

            <Tabs>
                <Tab id="view-wait-payment" className="page-content" tabActive>
                    <WaitPayment />
                </Tab>
                <Tab id="view-admin-handle" className="page-content">
                    {/* <AdminHandle /> */}
                </Tab>
                <Tab id="view-wait-accept" className="page-content">
                    {/* <WaitAccept /> */}
                </Tab>
            </Tabs>
        </TabView>
      
    </Page>
  );
}

export default HistoryPage;