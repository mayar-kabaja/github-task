import React, { useEffect, useState } from 'react';
import { Input as InputMaterial } from '@mui/material';
import { useDispatch } from 'react-redux';
import { clearUsers, getUsers } from '../Features/Users';

function Input() {
  const [login, setLogin] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    login ? dispatch(getUsers(login)) : dispatch(clearUsers());
  }, [dispatch, login ] );
  return (
    <InputMaterial
      type="search"
      onChange={(e) => setLogin(e.target.value)}
      placeholder="search"
      style={{ width: '300px' }}
    />
  );
}

export default Input;
