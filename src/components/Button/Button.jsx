import React from 'react';
import { Button as Btn } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getPulls, handleOpenChildModal } from '../Features/PullRequests';

function Button({ name , login }) {
    const dispatch = useDispatch();
    let repoName = name ;
    const handlClick = () => {
        dispatch(getPulls(  {login , repoName} ));
        dispatch(handleOpenChildModal());
    }
  return (
      <Btn onClick={handlClick } >{name}</Btn>
  );
}

export default Button;
