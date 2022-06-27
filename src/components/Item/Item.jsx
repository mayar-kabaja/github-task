import { ListItem, ListItemAvatar, Avatar,ListItemText } from '@mui/material';
import React from 'react';
function Item({login , avatar}) {
  return (
    <ListItem alignItems="flex-start" style={{ cursor: 'pointer'}}>
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
