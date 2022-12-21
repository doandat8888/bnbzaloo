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

const onClickForgetPass = (e) => {
  store.dispatch("forgetpass");
}

const ForgetPasswordPage = () => {
  return (
    <Page name="forgetpass" className="forgetpass">
     <p></p>
      {/* Tabs */}
<Tabs>
 <Tab id="tab-1" tabActive>Tab 1</Tab>
 <Tab id="tab-2">Tab 2</Tab>
</Tabs>
{/* Switch Between Tabs */}
<Link tabLink="#tab-1" tabLinkActive>Show Tab 1</Link>
<Link tabLink="#tab-2">Show Tab 2</Link>

    </Page>
  );
}

export default ForgetPasswordPage;