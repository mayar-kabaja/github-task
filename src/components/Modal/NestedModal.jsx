import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ChildModal from './ChildModal';
import { useDispatch, useSelector } from 'react-redux';
import { handleClose } from '../Features/Repos';
import { Button } from '..';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
export default function NestedModal() {
  const { open , repos } = useSelector((store) => (store.repose));
  const dispatch = useDispatch();
  return (
    <div>
      <Modal
        open={open}
        onClose={()=>dispatch(handleClose())}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 700 , maxHeight : '700px'}}>
          <h2>All Repos</h2>
          {
            open && repos.length
            ? repos.map(({name , owner : { login }}) => <Button key={name} name={name} login={login}/>)
            : null
          }
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}