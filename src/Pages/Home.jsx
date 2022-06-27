import { CircularProgress, Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { AlignItemsList, Input, Item, NestedModal } from '../components';

function Home() {
  const { users, isLoading } = useSelector((store) => store.Users);

  return (
    <Grid container spacing={5}>
      <Grid item xs={24}>
        <Input />
      </Grid>
      <Grid item xs={24} >
       {isLoading ? (
          <CircularProgress />
        ) : users.length ?<AlignItemsList >
           {(
          users.map(({ avatar_url, login }) => (
            <Item login={login} avatar={avatar_url} key={login} />
          ))
        )}
        </AlignItemsList> : (
          <h2>No Result</h2>
        )}
      </Grid>

      <NestedModal />
    </Grid>
  );
}

export default Home;
