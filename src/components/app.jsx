import React, { useEffect } from 'react';
import { zmpready, App, TabView, View, Tabbar, Link } from 'zmp-framework/react';
import store from '../store';

const MyApp = () => {
  // ZMP Parameters
  const zmpparams = {
    name: 'Beloved & Beyond', // App name
    theme: 'auto', // Automatic theme detection
    // App store
    store: store,
  };
  useEffect(() => {
    zmpready(() => {
      // Call ZMP APIs here
      store.dispatch('login');


    });
  }, []);  

  return (
    <App {...zmpparams} >
      {/* TabView container */}
      <TabView className="safe-areas">
        {/* Tabbar for switching Tab*/}
        <Tabbar bottom id="app-tab-bar">
          <Link tabLink="#view-home" iconZMP="zi-home" tabLinkActive>
            Trang chủ
          </Link>
          <Link tabLink="#view-catalog" iconZMP="zi-list-1">
            Ghi nhớ
          </Link>
          <Link tabLink="#view-settings" iconZMP="zi-setting">
            Người dùng
          </Link>
        </Tabbar>

        <View id="view-home" main tab tabActive url="/" />
        <View id="view-catalog" children name="catalog" tab url="/catalog/" />
        <View id="view-settings" children name="settings" tab url="/settings/" />
      </TabView>
    </App>
  );
}
export default MyApp;