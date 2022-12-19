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
import CheckoutCart from '../components/checkout/cart';
import store from '../store';

const onClickLogin = (e) => {
  store.dispatch("login");
}

const HomePage = () => {

  return (
    <Page name="checkout" >
        <CheckoutCart />
    </Page>
  );
}

export default HomePage;