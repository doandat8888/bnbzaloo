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
  useStore
} from "zmp-framework/react";
import store from "../store";
import '../css/remember.less';

const RememberPage = () => {

  return (
    <Page name='remember' className='remember-page'>
        <Title className='remember-title'>Ghi nhớ</Title>
        <Text className='remember-sub-title'>Nơi lưu giữ những ngày đặc biệt của bạn</Text>
        <Box className='remember-content'></Box>
    </Page>
  );
};

export default RememberPage;
