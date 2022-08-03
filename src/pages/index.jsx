import React from 'react';
import {
  Page,
  Navbar,
  NavTitleLarge,
  List,
  ListItem,
  Card,
  useStore,
} from 'zmp-framework/react';

import HomeTopNav from '../components/home/home-top-nav';

const HomePage = () => {
  const user = useStore('user');
  return (
    <Page name="home" >
      <HomeTopNav />
    </Page>
  );
}

export default HomePage;