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
import HomeSlider from '../components/home/home-slider';
import HomeStepOrder from '../components/home/home-step-order';
import HomeQuestionStart from '../components/home/home-question-start';
import AllFocusCategory from '../components/home/all-focus-category';
import HomeCategoryProduct from '../components/home/home-category-product';

const HomePage = () => {
  const user = useStore('user');
  return (
    <Page name="home" >
      <HomeTopNav />
      <HomeSlider />
      <HomeStepOrder />
      <HomeQuestionStart />
      <AllFocusCategory />
      <HomeCategoryProduct />
    </Page>
  );
}

export default HomePage;