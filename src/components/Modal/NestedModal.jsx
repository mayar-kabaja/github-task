import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ChildModal from './ChildModal';
import { useDispatch, useSelector } from 'react-redux';
import { handleClose } from '../Features/Repos';
import { Button } from '..';
import { CircularProgress } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  overflow:'scroll',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
export default function NestedModal() {
  const { open , repos , isLoading } = useSelector((store) => (store.repose));
  const dispatch = useDispatch();
  return (
    <div>
      <Modal
        open={open}
        onClose={()=>dispatch(handleClose())}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, maxwidth: 200 , maxHeight : '700px'}}>
          <h2>All Repos</h2>
          {!isLoading?
            ( repos.length
            ? repos.map(({name , owner : { login }}) => <Button key={name} name={name} login={login}/>)
            : <h3>no Repos</h3>)
            : <CircularProgress /> 
          }
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}