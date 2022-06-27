import { ListItem, ListItemAvatar, Avatar,ListItemText } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getRepos, handleOpen } from '../Features/Repos';

function Item({login , avatar}) {
  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(getRepos(login));
    dispatch(handleOpen());
  }
  return (
    <ListItem alignItems="flex-start" style={{ cursor: 'pointer'}} onClick={handleClick}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={login}
        />
      </ListItem>
  );
}

export default Item;
