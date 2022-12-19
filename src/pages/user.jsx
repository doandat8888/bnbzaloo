import React from 'react'
import { Avatar, List, ListItem, Page, Title, useStore, zmp } from 'zmp-framework/react'
import NavbarBack from '../components/navbar-back'

const UserPage = () => {
  const user = useStore('user')

  return (
    <Page 
      name="user"
      onPageBeforeIn={()=>{
        //hide navbar
        zmp.toolbar.hide('#app-tab-bar')
      }}
    >
      <NavbarBack
        title="User info"
        linkRight="/form"
        labelRight="Edit"
      />
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <Avatar story online src={user.avatar.startsWith('http') ? user.avatar : null}>{user.avatar}</Avatar>
        <Title style={{ marginTop: 8 }}>{user.name}</Title>
      </div>
      <List>
        <ListItem title="Display name" after={user.name} />
        <ListItem title="ID" after={user.id} />
      </List>
    </Page>
  )
}

export default UserPage;