import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getRepos = createAsyncThunk('repos/getRepos', async (login, thunkAPI) => {
    try {
      const resp = await axios.get(`https://api.github.com/users/${login}/repos`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });


const reposSlice = createSlice({
    name : 'repos',
    initialState : { repos : [] , isLoading : false , open : false },
    reducers : {
        handleOpen : (state) => {
            return {
                ...state,
                open : true,
            }
        },
        handleClose : (state) => {
            return {
                ...state,
                open : false,
            }
        }
    },
    extraReducers: {
        [getRepos.pending]: (state) => {
          state.isLoading = true;
        },
        [getRepos.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.repos = action.payload;
        },
        [getRepos.rejected]: (state) => {
          state.isLoading = false;
        },
      },

})
export { reposSlice };
export const { handleOpen , handleClose } = reposSlice.actions;
