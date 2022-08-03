import React, { useEffect } from 'react';
import { zmpready, App, TabView, View, Tabbar, Link } from 'zmp-framework/react';
import store from '../store';

const MyApp = () => {
  // ZMP Parameters
  const zmpparams = {
    name: 'BNB_Zalo', // App name
    theme: 'auto', // Automatic theme detection
    // App store
    store: store,
  };
  useEffect(() => {
    zmpready(() => {
      // Call ZMP APIs here
    });
  }, [])

  return (
    <App {...zmpparams} >
      {/* TabView container */}
      <TabView className="safe-areas">
        {/* Tabbar for switching Tab*/}
        <Tabbar bottom id="app-tab-bar">
          <Link tabLink="#view-home" iconZMP="zi-home" tabLinkActive>
            Home
          </Link>
          <Link tabLink="#view-catalog" iconZMP="zi-list-1">
            Catalog
          </Link>
          <Link tabLink="#view-settings" iconZMP="zi-setting">
            Settings
          </Link>
        </Tabbar>

        <View id="view-home" main tab tabActive url="/" />
        <View id="view-catalog" name="catalog" tab url="/catalog/" />
        <View id="view-settings" name="settings" tab url="/settings/" />
      </TabView>
    </App>
  );
}
export default MyApp;