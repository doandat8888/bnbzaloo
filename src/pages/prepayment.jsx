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
} from 'zmp-framework/react';
import FullOrderInput from '../components/checkout/full-order-input';
import StepCustomer from '../components/checkout/step-customer';
import StepMessage from '../components/checkout/step-message';
import StepReceiver from '../components/checkout/step-receiver';
import VoucherList from '../components/checkout/voucher-list';
import store from '../store';

const onClickLogin = (e) => {
  store.dispatch("login");
}

const HomePage = () => {

  return (
    <Page name="prepayment" >
        {/* <StepCustomer /> */}
        {/* <StepReceiver /> */}
        {/* <StepMessage /> */}
        {/* <FullOrderInput /> */}
        <VoucherList />
    </Page>
  );
}

export default HomePage;