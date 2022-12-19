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
import store from '../store';

const onClickLogin = (e) => {
  store.dispatch("login");
}

const HomePage = () => {

  return (
    <Page name="home" >
      <Card className='text-center cover pd10 mg10'>
          <Button onClick={() => onClickLogin()}><Icon
                className=''
                zmp='zi-chevron-right'
              /> Đăng Nhập</Button>
      </Card>

    </Page>
  );
}

export default HomePage;