import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getPulls = createAsyncThunk('pulls/getPulls', async (data , thunkAPI) => {
  const  {login , repoName} = data;
    try {
      const resp = await axios.get(`https://api.github.com/repos/${login}/${repoName}/pulls`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

const pullsSlice = createSlice({
    name:'pulls',
    initialState : { pulls : [] , openChildModal : false , isLoading : false },
    reducers :{
      handleOpenChildModal : (state) => {
        return{
          ...state,
          openChildModal : true
        }
      },
      handleCloseChildModal :(state) => {
        return{
          ...state,
          openChildModal : false
        }
      },
    },
    extraReducers: {
        [getPulls.pending]: (state) => {
          state.isLoading = true;
        },
        [getPulls.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.pulls = action.payload;
        },
        [getPulls.rejected]: (state) => {
          state.isLoading = false;
        },
      },
})
export { pullsSlice };
export const { handleCloseChildModal  , handleOpenChildModal  } = pullsSlice.actions;