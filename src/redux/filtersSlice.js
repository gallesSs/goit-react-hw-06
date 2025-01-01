import {createSelector, createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: ''
}

const slice = createSlice({
  name: 'filter',
  initialState,
  selectors: {
    selectFilter: state => state.name,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    }
  }
})

export const {selectFilter} = slice.selectors;
export const {changeFilter} = slice.actions
export const filterReducer = slice.reducer;