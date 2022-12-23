import React from "react";
import {
  Page,
  Title,
  List,
  ListItem,
  Box,
  Button,
  Text,
  View,
  useStore,
  TabView,
  Tabbar,
  Tabs,
  Link,
  Tab
} from "zmp-framework/react";
import store from "../store";
import '../css/remember/remember.less';
import mainScreen from "../static/img/mainScreen.png";
import background from "../static/img/background.png";
import DayRemember from "../components/remember/day-remember";
import PeopleList from "../components/remember/people-list";



const RememberPage = () => {

  return (
    <Page name='remember' className='remember-page'>
        <img src={background} className="remember-page-background"/>
        <Title className='remember-title'>Ghi nhớ</Title>
        <Text className='remember-sub-title'>Nơi lưu giữ những ngày đặc biệt của bạn</Text>
        <TabView className='remember-content'>
            <Tabbar top id="app-tab-bar" className='remember-tabs'>
              <Link tabLink="#view-day-remember" tabLinkActive>
                <Text className='remember-content-txt'>Những ngày cần nhớ</Text>
              </Link>
              <Link tabLink="#view-people-list">
                <Text className='remember-content-txt'>Danh sách người thân</Text>
              </Link>
            </Tabbar>

            <Tabs>
                <Tab id="view-day-remember" className="page-content" tabActive>
                    <DayRemember />
                </Tab>
                <Tab id="view-people-list" className="page-content">
                    <PeopleList />
                </Tab>
            </Tabs>
        </TabView>
    </Page>
  );
};

export default RememberPage;
