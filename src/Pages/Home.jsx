import { CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { AlignItemsList, Input, Item } from '../components';


function Home() {
  const { users, isLoading } = useSelector((store) => store.Users);
  return (
    <>
      <Input />
      { isLoading ? <CircularProgress /> : null}
      <AlignItemsList >
        {users.length ?  users.map(({ avatar_url, login }) => (
          <Item login={login} avatar={avatar_url} key={login} />
        )) : 'no Result'}
      </AlignItemsList>
    </>
  );
}

export default Home;
