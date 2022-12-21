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


const onClickHistoryOrder = (e) => {
  store.dispatch("historyorder");
}

const HistoryPage = () => {

  return (
    <Page name="historyorder" className="historyorder">
    
    </Page>
  );
}

export default LoginPage;