import * as React from 'react';
import { List } from '@mui/material';

export default function AlignItemsList({ children }) {
  return (
      <List sx={{ maxWidth: 360, bgcolor: 'background.paper' }} style={{ position : 'absolute' ,
       left : '50%' ,
        transform :'translateX(-50%)' , 
        background : '#eee',
        top : '50px' , 
        width : '90%'} }>
    {children}
    </List>
    
  );
}
