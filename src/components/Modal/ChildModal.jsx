import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { handleCloseChildModal } from '../Features/PullRequests';
import { CircularProgress } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  overflow:'scroll',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height : 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ChildModal() {
  const dispatch = useDispatch();
  const {openChildModal , pulls , isLoading} = useSelector((store) => store.pulls)
  console.log(pulls);
  const handleClose = () => {
    dispatch(handleCloseChildModal());
  };

  return (
    <React.Fragment>
      <Modal
        hideBackdrop
        open={openChildModal}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 , overflow:'scroll'}}>
          <h2 id="child-modal-title">Pulls</h2>
          { !isLoading ?
             (pulls.length ? pulls.map(({title})=><p key={title}>{title}</p>
            ): <h3>No Pulls</h3>)
            : <CircularProgress/>
          }
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}