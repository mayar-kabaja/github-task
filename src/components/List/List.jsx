import * as React from 'react';
import { List } from '@mui/material';

export default function AlignItemsList({ children }) {
  return <List sx={{ maxWidth: 360, bgcolor: 'background.paper' }}>{children}</List>;
}
