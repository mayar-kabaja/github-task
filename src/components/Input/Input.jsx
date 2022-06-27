import React, { useState } from 'react';
import { Input as InputMaterial } from '@mui/material';

function Input() {
    const [ login , setLogin ] =  useState('');
    console.log(login);
  return (
      <InputMaterial type='search' onChange={(e)=> setLogin(e.target.value)} placeholder='search' style={{ width : '300px'}} />
  )
}

export default Input;
