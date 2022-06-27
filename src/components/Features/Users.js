import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getUsers = createAsyncThunk('users/getUsers', async (login, thunkAPI) => {
    try {
      const resp = await axios.get(`https://api.github.com/search/users?q=${login}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });


const usersSlice =  createSlice({
    name : 'users',
    initialState : {users : [] , isLoading : false},
    reducers:{
      clearUsers : (state ) => {
        state.users = [];
      }
    },
    extraReducers: {
        [getUsers.pending]: (state) => {
          state.isLoading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.users = action.payload.items;
        },
        [getUsers.rejected]: (state) => {
          state.isLoading = false;
        },
      },
      

})
export default usersSlice.reducer;
export const { clearUsers } = usersSlice.actions;